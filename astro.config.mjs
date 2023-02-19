import { defineConfig } from "astro/config";
// @ts-check

import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  outDir: './build/',
  output: 'static',
  server: {
    host: '0.0.0.0'
  },
  vite: {
    server: {
      strictPort: true
      // hmr: {
      //   port: 443 // Run the websocket server on the SSL port
      // }
    }
  },
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'master',
        }})],
});
