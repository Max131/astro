// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astroio.netlify.app",
  compressHTML: false,
  scopedStyleStrategy: "class",
  trailingSlash: "never",
  integrations: [preact()],
  build: {
    inlineStylesheets: "never"
  }
});
