import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv';
dotenv.config();

const VITE_FOLDER_NAME = process.env.VITE_FOLDER_NAME;

if (!VITE_FOLDER_NAME) {
  console.error('VITE_FOLDER_NAME environment variable is not set, update your .env file with a value naming your dashboard, eg "VITE_FOLDER_NAME=ha-dashboard"');
  process.exit(1);
}

export default defineConfig({
  base: `/local/${VITE_FOLDER_NAME}/`,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'code.pc-tips.se',
      '.pc-tips.se',
    ],
    cors: {
      origin: [
        'https://code.pc-tips.se',
        '*',
      ],
      credentials: true,
    },
  },
})
