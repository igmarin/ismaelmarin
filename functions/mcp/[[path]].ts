import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
import { handleMcpRequest } from './lib/worker.js';
import { createMcpServer } from './lib/mcp-server.js';

// Base path is /mcp to handle all subroutes under the custom subdomains
const app = new Hono().basePath('/mcp');

// Mapping of subdomains to GitHub repositories hosting the skill packs
const SUBDOMAIN_MAP: Record<string, { repo: string; tile: string }> = {
  "rails-agent-skills": { repo: "igmarin/rails-agent-skills", tile: "tile.json" },
  "ruby-core-skills": { repo: "igmarin/ruby-core-skills", tile: "tile.json" },
  "hanakai-yaku": { repo: "igmarin/hanakai-yaku", tile: "tile.json" },
  "agnostic-planning-skills": { repo: "igmarin/agnostic-planning-skills", tile: "tile.json" }
};

app.all('*', async (c) => {
  const host = c.req.header('host') || "";
  const subdomain = host.split('.')[0];
  const config = SUBDOMAIN_MAP[subdomain];

  if (!config) {
    return c.text(`Subdomain "${subdomain}" not found in MCP registry.`, 404);
  }

  // Create the MCP server instance dynamically fetching files from GitHub
  const creator = async () => {
    // 1. Fetch tile.json
    const tileRes = await fetch(`https://raw.githubusercontent.com/${config.repo}/main/${config.tile}`);
    if (!tileRes.ok) {
      throw new Error(`Failed to fetch tile.json from ${config.repo}: ${tileRes.statusText}`);
    }
    const tileJson = await tileRes.json();

    // 2. Fetch skill contents
    const fetchSkillContent = async (skillPath: string) => {
      const res = await fetch(`https://raw.githubusercontent.com/${config.repo}/main/${skillPath}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch skill content: ${res.statusText}`);
      }
      return res.text();
    };

    return createMcpServer(tileJson, fetchSkillContent);
  };

  // Process GET (SSE connection) and POST (incoming JSON-RPC messages)
  return handleMcpRequest(c.req.raw, creator);
});

// Export Cloudflare Pages Function onRequest handler
export const onRequest = handle(app);
