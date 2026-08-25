// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://6a8e113c6280b5000859ecff--astrolearntest.netlify.app/",
  integrations: [preact()]
});