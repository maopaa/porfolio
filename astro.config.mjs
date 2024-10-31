// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://maopaa.xyz',
    integrations: [mdx(), sitemap(), playformCompress()],
    i18n: {
        locales: ['en', 'es', 'pt'],
        defaultLocale: 'es',
        routing: { prefixDefaultLocale: false }
    }
});