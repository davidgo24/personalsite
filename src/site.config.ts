/**
 * Edit this file to personalize the site (name, links, headshot).
 */
export const siteConfig = {
	fullName: "David Godinez",
	headline: "Public sector professional · Government service",
	location: "Los Angeles County, CA",
	/** Hero intro (two paragraphs). */
	introParagraphs: [
		"I grew up in El Monte and got my start in Parks and Recreation at 18, which gave me an early connection to public service. Since then, I’ve built experience in banking and have continued developing my skills in local government. I value being part of work that supports the community and take pride in delivering reliable, consistent results.",
		"Day to day, I focus on staying dependable, keeping things moving, and contributing where I can to support the team. Outside of work, I enjoy building web applications and have been developing my programming skills through self-study.",
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
