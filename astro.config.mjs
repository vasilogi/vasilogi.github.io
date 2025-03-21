import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
    site: 'https://vasilogi.github.io/',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    markdown: {
        syntaxHighlight: {
            type: 'shiki',
            excludeLangs: ['mermaid'], // Disable syntax highlighting for Mermaid
        },
        rehypePlugins: [rehypeMermaid], // Add Mermaid plugin
    }
});
