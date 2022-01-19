// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  dist: './public/',
  devOptions: {
    hostname: '0.0.0.0',
  },
  vite: {
    server: {
      strictPort: true,
      hmr: {
        port: 443 // Run the websocket server on the SSL port
      }
    }
  }
});