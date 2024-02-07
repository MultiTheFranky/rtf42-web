import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [react(), tailwind(), sentry(), spotlightjs(), mdx(), image()],
  vite: {
    build: {
      rollupOptions: {
        external: ["nanoid", "clsx", "marked", "title-case", "bootstrap"],
      },
    },
  },
});
