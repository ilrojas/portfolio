// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [astro()],
//   server: {
//     host: '127.0.0.1',
//     port: 4321,
//     strictPort: true,
//     allowedHosts: ['difficulty-immigrants-strength-ex.trycloudflare.com'], // Permitir cualquier host
//     cors: true, // Habilitar CORS
//     headers: {
//       'Access-Control-Allow-Origin': '*', // Permitir solicitudes externas
//     },
//   },
// });

import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // <== Esto permite conexiones externas
    port: 4321,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});


/* import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true,
    port: 4321,
    strictPort: true,
  },
}); */