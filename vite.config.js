/* eslint-disable import/no-extraneous-dependencies */
import { readdirSync } from 'fs';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import detect from 'detect-port';

// https://vitejs.dev/config/
export default async function config() {
  const port = await detect(3000);

  const items = readdirSync(resolve(__dirname, 'src'));

  return defineConfig({
    server: {
      port,
    },
    plugins: [react()],
    resolve: {
      alias: items.map((item) => {
        if (/\.(t|j)sx?$/.test(item)) {
          const name = item.replace(/\.(t|j)sx?$/, '');

          return {
            find: name,
            replacement: `/src/${name}`,
          };
        }
        return {
          find: item,
          replacement: `/src/${item}`,
        };
      }),
    },
    build: {
      target: 'esnext',
    },
  });
}
