export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const host = context.request.headers.get('host') || "";
  const subdomain = host.split('.')[0];

  // Map subdomains to repository details
  const SUBDOMAIN_MAP: Record<string, { repo: string; title: string; name: string; desc: string }> = {
    "rails-agent-skills": {
      repo: "igmarin/rails-agent-skills",
      title: "tile.json",
      name: "rails-agent-skills",
      desc: "Model Context Protocol server serving Ruby on Rails agent skills."
    },
    "ruby-core-skills": {
      repo: "igmarin/ruby-core-skills",
      title: "tile.json",
      name: "ruby-core-skills",
      desc: "Model Context Protocol server serving core Ruby skills."
    },
    "hanakai-yaku": {
      repo: "igmarin/hanakai-yaku",
      title: "tile.json",
      name: "hanakai-yaku",
      desc: "Model Context Protocol server serving Hanami 2.x agent skills."
    },
    "agnostic-planning-skills": {
      repo: "igmarin/agnostic-planning-skills",
      title: "tile.json",
      name: "agnostic-planning-skills",
      desc: "Model Context Protocol server serving framework-agnostic planning skills."
    }
  };

  const config = SUBDOMAIN_MAP[subdomain];
  if (!config) {
    return new Response(JSON.stringify({ error: `Subdomain "${subdomain}" not found in registry.` }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Define tools
  const tools = {
    "list_skills": {
      "description": "List all available AI agent skills and their descriptions.",
      "inputSchema": {
        "type": "object",
        "properties": {}
      }
    },
    "get_skill": {
      "description": "Retrieve the specific instructions and markdown content for a given skill.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name of the skill to retrieve (e.g., 'code-review')"
          }
        },
        "required": ["name"]
      }
    }
  };

  // Fetch the tile.json dynamically to populate capabilities.resources
  const resources: Record<string, any> = {};
  try {
    const tileRes = await fetch(`https://raw.githubusercontent.com/${config.repo}/main/${config.title}`);
    if (tileRes.ok) {
      const tileJson: any = await tileRes.json();
      if (tileJson && tileJson.skills) {
        Object.keys(tileJson.skills).forEach((skillName) => {
          resources[`skill://${skillName}`] = {
            "name": skillName,
            "description": `Agent skill: ${skillName}`,
            "mimeType": "text/markdown"
          };
        });
      }
    }
  } catch (err) {
    console.error("Failed to fetch tile.json for server-card resources:", err);
  }

  const serverCard = {
    "$schema": "https://spec.modelcontextprotocol.io/schema/server-card.json",
    "version": "1.0.0",
    "protocolVersion": "2024-11-05",
    "serverInfo": {
      "name": config.name,
      "version": "1.0.0",
      "description": config.desc
    },
    "transport": {
      "type": "sse",
      "url": `https://${host}/mcp`
    },
    "capabilities": {
      "tools": tools,
      "resources": resources
    }
  };

  return new Response(JSON.stringify(serverCard, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
