import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://amufaamo.github.io",
  base: "/astro",
  integrations: [sitemap()],
});
