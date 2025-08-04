// @ts-check
import { defineConfig,passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "static",

  image: {
    service: passthroughImageService(),
  }
});