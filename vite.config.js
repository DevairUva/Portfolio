import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspector from 'vite-plugin-react-inspector'

export default defineConfig({
  plugins: [
    react(),
    inspector({
      editor: 'code',
      openIn: 'editor',
    }),
  ],
  base: "/Portfolio/"
})