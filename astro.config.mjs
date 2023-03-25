import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ben.stolovitz.com",
  integrations: [image(), mdx(), react()]
});