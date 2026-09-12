import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Get repository name from GitHub Actions environment variable
const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/';

// https://vite.dev/config/
export default defineConfig({
  base: repoName,
  plugins: [
    tailwindcss(),
    react()
  ],
});
