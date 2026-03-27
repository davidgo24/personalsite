// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// For GitHub *Project* Pages (username.github.io/REPO/), set:
//   site: "https://YOUR_USER.github.io",
//   base: "/REPO_NAME/",
// For username.github.io root site, keep base default "/".
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
	site: "https://davidgo24.github.io",
	// Project site: https://davidgo24.github.io/personalsite/
	base: "/personalsite/",
	vite: {
		plugins: [tailwindcss()],
	},
});
