import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), disableHistoryFallback]
})
function disableHistoryFallback () {
  const path = require('path')
  const fs = require('fs')

  const ALLOWLIST = [
    // internal requests
    /^\/__vite_ping/,
    /^\/@vite\/client/,
    /^\/@id/,
    /^\/__open-in-editor/,

    // no check needed
    /^\/$/,
    /^\/index.html/
  ]
  return {
    name: 'disable-history-fallback',
    configureServer (server) {
      server.middlewares.use((req, res, next) => {
        if (ALLOWLIST.some(pattern => pattern.test(req.url))) {
          return next()
        }

        const url = req.url
          .replace(/^@/, 'src') // replace common path alias
          .split('?')[0] // ignore query parameters (cache busts)

        if (!fs.existsSync(path.join(__dirname, url))) {
          console.warn('URL not found:', url)
          res.statusCode = 404
          res.end()
        } else {
          next()
        }
      })
    }
  }
}
