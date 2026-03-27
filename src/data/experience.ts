export type Job = {
	organization: string;
	title: string;
	dates: string;
	highlights: [string, string];
};

export const experience: Job[] = [
	{
		organization: "City of Montebello — Transit Department",
		title: "Finance Technician",
		dates: "Jan 2026 — Present",
		highlights: [
			"Biweekly payroll for ~130 transit staff using Optibus, TimeClock Plus, and Tyler New World; audit time records and align with policy and labor agreements.",
			"Excel and Python tooling for validation, reporting, and workflow automation; support AP, purchasing, and onboarding data entry.",
		],
	},
	{
		organization: "City of Manhattan Beach",
		title: "Accounting Technician (Assignment)",
		dates: "Jan 2025 — Jun 2025",
		highlights: [
			"Daily bank reconciliation and cash reporting; vendor invoices and AP in Tyler Munis with clean records and timely responses.",
			"Travel and reimbursement support, journal entry prep, and GL assistance with Excel for analysis and reconciliation.",
		],
	},
	{
		organization: "City National Bank",
		title: "Foreign Currency Analyst",
		dates: "Jun 2022 — Sep 2023",
		highlights: [
			"FX market monitoring, transaction execution (spot, forward, swap), and client-facing hedging and risk support.",
			"Collaboration with relationship managers on tailored solutions for commercial and private banking clients.",
		],
	},
	{
		organization: "MUFG Union Bank",
		title: "Community Outreach Specialist",
		dates: "Mar 2017 — Jul 2022",
		highlights: [
			"Financial literacy workshops for 500+ community members; partnerships with nonprofits to grow participation.",
			"High-volume, accurate transaction processing in a regulated environment; recognition including President’s Award (2018).",
		],
	},
	{
		organization: "City of El Monte",
		title: "Parks and Recreation Leader (Part-time)",
		dates: "Aug 2016 — Jul 2018",
		highlights: [
			"Administrative support for recreation programs, events, scheduling, and public-facing service.",
			"Recordkeeping and clerical work supporting city-sponsored community programs.",
		],
	},
];
