export type Project = {
	slug: string;
	title: string;
	tagline: string;
	problem: string;
	solution: string;
	/** Who else benefits—not only the builder */
	stakeholderImpact: string;
	outcome: string;
	imageSrc: string;
	imageAlt: string;
	tech: string[];
	/** Omit when there is no public repository (e.g. internal M365) */
	repoUrl?: string;
	demoUrl?: string;
	details?: string;
	/**
	 * landscape = 16:9 cover (default).
	 * portrait = tall screenshot; full image visible.
	 * landscape-fit = wide UI not 16:9; contain so edges are not cropped.
	 */
	imagePresentation?: "landscape" | "portrait" | "landscape-fit";
	/** When set, shows multiple labeled screenshots instead of a single image area. */
	imageGallery?: { src: string; alt: string; label?: string }[];
	/** Short line above the gallery (e.g. before/after framing). */
	imageGalleryIntro?: string;
};

export const projects: Project[] = [
	{
		slug: "tes-slip-outreach-m365",
		title: "Missing Time Exception Slip—Automated Outreach (Microsoft 365)",
		tagline:
			"Low-code automation that emails the transit operations manager when a slip is missing, with structured details, email documentation, and a central list.",
		problem:
			"Chasing missing time exception slips meant back-and-forth messages, unclear ownership, and risk to payroll accuracy, audit trails, and compliance.",
		solution:
			"Built with SharePoint, Microsoft Lists, Power Automate, and Outlook: when a slip is missing, the flow emails the transit operations manager with the employee name, date out, leave bank requested, and time—creating a clear email record. Key teammates in transit administration are CC’d so everyone who needs visibility stays informed. Minimal custom code; relies on M365 automation.",
		stakeholderImpact:
			"Designed for the transit operations manager and payroll workflow—not a single desk. Transit admin receives coordinated requests instead of ad hoc pings; the team spends less time reconciling who said what, and more time closing the pay period cleanly.",
		outcome:
			"Documented requests, a referable list for gathering multiple slips, and fewer loops before payroll—supporting accuracy, audit readiness, and compliance.",
		imageSrc: "/time-exception-slip.jpg",
		imageAlt: "Automated email requesting a missing time exception slip, with leave date, type, and hours",
		imagePresentation: "portrait",
		tech: ["SharePoint", "Power Automate", "Microsoft Lists", "Outlook"],
	},
	{
		slug: "time-exception-slip-tool",
		title: "Time Exception Slip Automation",
		tagline:
			"Web app that generates pre-filled Time Exception Slip PDFs and OT Excel exports for municipal transit payroll.",
		problem:
			"Every pay period, ~128 slips were filled by hand—names, IDs, dates, OT—slow and error-prone, with rework between PDFs and Finance spreadsheets.",
		solution:
			"A browser-based tool: upload employee data, pick the pay period, build blank-slip binders or enter OT with searchable selectors, then export merged PDFs and Excel in one flow.",
		stakeholderImpact:
			"Payroll, finance, and supervisors depend on consistent slips; the tool is built so anyone on the team can run exports without re-keying data for each other.",
		outcome:
			"Roughly hours of manual work per cycle compressed to minutes, with fewer typos and mismatches between PDF and Excel.",
		imageSrc: "/TimeExceptionToolAutomate.jpg",
		imageAlt:
			"Time Exception Slip Automation Tool: setup, blank slips tab, and generate binder PDF",
		imageGalleryIntro:
			"Before & after: the in-browser tool (left) feeds the merged slip PDFs teams used to fill by hand (right).",
		imageGallery: [
			{
				src: "/TimeExceptionToolAutomate.jpg",
				alt:
					"Time Exception Slip Automation Tool web UI: employee CSV loaded, pay period date, blank slips binder tab",
				label: "Before — in the tool",
			},
			{
				src: "/TimeExceptionSlipSample.jpg",
				alt:
					"After — sample merged PDF: City of Montebello time exception slip with pre-filled name, employee number, department, and pay period",
				label: "After — sample slip output",
			},
		],
		tech: ["Python", "Flask", "Vanilla JS", "ReportLab", "openpyxl"],
		repoUrl: "https://github.com/davidgo24/time-exception-slip-tool",
	},
	{
		slug: "dos-data-entry-cli",
		title: "Daily Operator Schedule Data Entry (DOS)",
		tagline:
			"Keyboard-first web UI for transit DOS data entry with segment export for TimeClock Plus.",
		problem:
			"DOS runs need fast, consistent entry from Excel extracts—click-heavy workflows slow operators down.",
		solution:
			"Card-based flow with keyboard shortcuts, segment logic (REG, GUAR, OT, CTE, etc.), CTE/supervisor lists, and TCP-ready CSV export.",
		stakeholderImpact:
			"Operations and payroll staff share the same export format; coworkers can pick up a session without translating someone else’s spreadsheet.",
		outcome:
			"Supports repeatable, high-volume entry with clear include/exclude and export controls—deployable internally (e.g. Railway) with isolated sessions per user.",
		imageSrc: "/Daily-Operator-Schedule-Data-Entry-Tool.jpg",
		imageAlt:
			"Daily Operator Schedule Data Entry Tool: planned vs actual times, export controls, and keyboard shortcuts",
		imagePresentation: "landscape-fit",
		tech: ["Python", "Flask", "HTML/CSS/JS"],
		repoUrl: "https://github.com/davidgo24/dos_data_entry_cli",
	},
];
