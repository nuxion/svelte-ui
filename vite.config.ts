import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/
import dts from 'vite-plugin-dts';
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte(), dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'svelte-ui',
      // the proper extensions will be added
      fileName: 'svelte-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'svelte',
        },
      },
    },
  },
})
