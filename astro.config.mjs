import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: isDev ? undefined : "https://mbaharip.github.io",
  base: isDev ? undefined : "/acc-model-repo",
});
