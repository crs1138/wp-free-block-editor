import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        // preprocessorOptions: {
        //   scss: {
        //     additionalData: '@import "@/styles/index.scss";',
        //   },
        // }
    },
    define: {
        'process.env.IS_GUTENBERG_PLUGIN': JSON.stringify(true),
    },
    plugins: [react()],
});
