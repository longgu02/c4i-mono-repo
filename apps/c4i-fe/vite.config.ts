/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/c4i-fe',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [!process.env.VITEST && reactRouter()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  resolve: {
    alias: {
      '@c4i-fe/chat': path.resolve(__dirname, '../../chat/src/lib/chat'),
      '@c4i-fe/milestones': path.resolve(
        __dirname,
        '../../milestones/src/lib/milestones'
      ),
      '@c4i-fe/state': path.resolve(__dirname, '../../state/src/index'),
      '@c4i-fe/shared/store-hooks': path.resolve(
        __dirname,
        '../../shared/store-hooks/src/lib/index'
      ),
      '@c4i-fe/feature-counter': path.resolve(
        __dirname,
        '../../feature-counter/src/index'
      ),
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
