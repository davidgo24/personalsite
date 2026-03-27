/**
 * Edit this file to personalize the site (name, links, headshot).
 */
export const siteConfig = {
	fullName: "David Godinez",
	headline: "Public sector professional · Government service",
	location: "Los Angeles County, CA",
	/** Hero intro (two paragraphs). */
	introParagraphs: [
		"I grew up in El Monte and got my start in Parks and Recreation at 18—so I’ve been around city work for a while. Since then, I’ve picked up experience in banking and found my way back into local government, continuing to build my skills along the way. I enjoy being part of work that actually supports the community and like knowing the details I handle help things run a little smoother.",
		"Day to day, I try to stay reliable, keep things moving, and be someone my team can count on. Outside of work, I’m usually building web apps or teaching myself how to code—part curiosity, part “there has to be a better way to do this.”",
	],
	headshotSrc: "/headshot.jpg",
	headshotAlt:
		"David Godinez, public sector professional serving local government in Southern California",
	email: "dgodinez24@berkeley.edu",
	/** Display format; use US 10-digit for tel: link generation */
	phone: "(626) 466-5679",
	linkedinUrl: "" as string,
	githubUrl: "https://github.com/davidgo24",
	mambaQuote: "Rest at the end, not in the middle.",
	quoteAttribution: "Kobe Bryant",
} as const;
