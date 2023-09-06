/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {

    const config = {
        plugins: [react({fastRefresh: false})],
        base: '/',
        test: {
            globals: true,
            environment: 'happy-dom',
            setupFiles: ['src/setupTest.ts']
        },
    }

    if (command !== 'serve') {
        config.base = '/xob-dnim/'
    }
    return config;
})
