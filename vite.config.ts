import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";
import env from "postcss-preset-env";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer({}), env({})],
    },
  },
});
