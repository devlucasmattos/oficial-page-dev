import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/oficial-page-dev/',  // Substitua 'dev-page' pelo nome do seu repositório
});
