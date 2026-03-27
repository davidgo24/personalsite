/**
 * Resolve paths to files in `public/` when the site uses a subpath (e.g. GitHub Pages project sites).
 * Root-relative URLs like `/headshot.jpg` would otherwise load from the domain root and 404.
 */
export function publicUrl(path: string): string {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	const base = import.meta.env.BASE_URL;
	if (base === "/" || base === "") {
		return normalized;
	}
	return `${base.replace(/\/$/, "")}${normalized}`;
}
