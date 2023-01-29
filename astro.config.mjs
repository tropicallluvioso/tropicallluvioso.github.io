import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
// @ts-check

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  outDir: './build/',
  output: 'static',
  devOptions: {
    hostname: '0.0.0.0'
  },
  vite: {
    server: {
      strictPort: true
      // hmr: {
      //   port: 443 // Run the websocket server on the SSL port
      // }
    }
  },
  integrations: [svelte()]
});