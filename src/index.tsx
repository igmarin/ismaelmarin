import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ismael G Marin Cabrera</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <div class="max-w-2xl mx-auto px-6 py-16">
        <!-- Hero -->
        <header class="mb-12">
          <h1 class="text-4xl font-bold text-amber-400 mb-2">Ismael G Marin Cabrera</h1>
          <p class="text-xl text-gray-400">Tech Lead & Senior Software Engineer</p>
        </header>

        <!-- Bio -->
        <section class="mb-12">
          <p class="text-lg leading-relaxed text-gray-300 mb-4">
            I'm a cross-functional Tech Lead and Senior Software Engineer with 15 years of experience building software — all remote. I've grown alongside Ruby on Rails through every major evolution of the framework, and for the last 10 years I've been focused on scalable backend systems for US and LATAM SaaS companies.
          </p>
        </section>

        <!-- Interests -->
        <section class="mb-12">
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Interests</h2>
          <div class="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p class="text-gray-300">
              Outside of development and AI, I'm a big music fan—grew up in the '90s, so grunge and Britpop are basically part of my DNA.
            </p>
          </div>
        </section>

        <!-- Links -->
        <section class="mb-12">
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect</h2>
          <div class="flex flex-wrap gap-3">
            <a href="https://github.com/igmarin" class="bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
              GitHub
            </a>
            <a href="https://x.com/igmarin" class="bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
              Twitter/X
            </a>
            <a href="https://medium.com/@igmarin" class="bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
              Medium
            </a>
            <a href="https://www.linkedin.com/in/ismaelmarin" class="bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-700 hover:border-amber-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

        <!-- Footer -->
        <footer class="text-sm text-gray-600">
          <p>&copy; ${new Date().getFullYear()} Ismael G Marin Cabrera</p>
        </footer>
      </div>
    </body>
    </html>
  `)
})

export default app
