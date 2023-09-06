/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({fastRefresh: false})],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['src/setupTest.ts']
    },
})
