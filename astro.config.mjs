import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://webt.sk",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  integrations: [
    tailwind(),
    mdx(),
    prefetch(),
    sitemap({
      i18n: {
        defaultLocale: "sk",
        locales: {
          sk: "sk-SK",
          en: "en-US",
        },
      },
    }),
  ],
});
