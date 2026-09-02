// All copy, links, and IDs for the site live here. Edit text in this file only.

const YOUTUBE = "https://www.youtube.com/@barnesincai";
const INSTAGRAM = "https://www.instagram.com/barnesincai";
const EMAIL = "barnesincai@gmail.com";

export type Link = { label: string; href: string; enabled: boolean };

export const site = {
  meta: {
    title: "Barnes Inc.",
    description:
      "AI-driven proof of better margins for small business owners in Madison and Milwaukee — built in public, one project at a time.",
    ogImage: "/og.png",
  },

  nav: [
    { label: "Story", href: "#project" },
    { label: "Projects", href: "#projects" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
    { label: "Follow", href: "#signup" },
  ],

  hero: {
    eyebrow: "Barnes Inc. — Madison / Milwaukee, WI",
    headline: "Proof that AI can give small businesses the margins they need.",
    positioning:
      "Barnes Inc. gives small business owners AI-driven proof of better margins — sharper marketing that turns into more leads and smarter spend, and automation that cuts the labor cost of redundant manual work like scheduling. Every project becomes a documented case study, so the proof compounds as the work goes.",
    audience:
      "I work with local, owner-run service businesses that run on scheduling and appointments — dog daycares, dental offices, electricians, the trades.",
    method:
      "Ground rule: use the least AI necessary. If the real fix is a better hiring process or one direct conversation, that's the fix.",
    primaryCta: { label: "Follow the projects", href: "#signup" },
    secondaryCta: { label: "Watch on YouTube", href: YOUTUBE },
  },

  project: {
    status: {
      label: "Live project",
      date: "September 2026",
      text: "In progress — going back to the owner with one direct question.",
    },
    title: "Project 01: my mom's dog daycare",
    story: [
      "My first client is my mom. She owns a Dogtopia location in Milwaukee. I did the work free, on purpose: I wanted a real result on a real business before I asked anyone to pay for one.",
      "I built a tool that pulls a business's marketing, competitor, and staffing data into a full growth audit, and rendered her a report. Then I showed it to her.",
      "Her honest reaction: most of it she already knew. Owners live inside their business. Telling them what's going on isn't the value. Fixing the specific thing they already named is.",
    ],
    problems: [
      {
        name: "Labor is 55% of revenue. She wants 40%.",
        detail:
          "Same staffing on slow Mondays and Fridays as on busy days — and when I raised it, she said \"it's more complicated than that.\" There's a real constraint the schedule data doesn't show. I haven't found it yet.",
      },
      {
        name: "Marketing and SEO.",
        detail:
          "She named it as a gap herself. Nobody has actually pointed the tools at it yet. That's next.",
      },
    ],
    lessons: [
      "Ask direct questions first — where are the holes, what's stopping you from cutting costs or making more money? Owners who can answer need a fix, not an audit.",
      "Use the least AI necessary. Part of her labor problem is training overhead from turnover. That's a hiring problem, not a model problem.",
      "Document as you go. I didn't record the build or the delivery. Everything from here gets recorded.",
    ],
    nextStep: "Call her, record it, and ask exactly what \"more complicated\" means.",
  },

  projects: {
    heading: "What I've built so far",
    blurb:
      "All of it with Claude Code, starting from zero coding background in August 2026. Statuses are honest.",
    items: [
      {
        name: "Business growth-audit pipeline",
        status: "In use — client #1",
        live: true,
        blurb:
          "Workflows → Agent → Tools: Markdown SOPs run by Claude Code, executing ~15 Python tools — Google PageSpeed, Search Console, and GA4 pulls, competitor research, staffing-vs-demand analysis from schedule and labor data — rendered into a branded PDF. Produced a 16-page growth audit for a real dog daycare.",
        stack: ["Claude Code", "Python", "Jinja2 / WeasyPrint", "Google APIs"],
        links: [{ label: "Private (client data) — walkthrough on request", href: "" }],
      },
      {
        name: "This website",
        status: "Live",
        live: true,
        blurb:
          "Astro static site: design-token CSS, one content file for every word on the page, generated favicon and share image, sitemap, GitHub → Vercel continuous deploy. Built and shipped in one afternoon.",
        stack: ["Astro", "CSS", "GitHub", "Vercel"],
        links: [{ label: "Code on GitHub", href: "https://github.com/barnel18/BarnesAI" }],
      },
      {
        name: "Cube Coach",
        status: "In progress",
        live: false,
        blurb:
          "A Rubik's-cube learning app: interactive 3D cube in React + three.js, a move engine with unit tests, and a tiered algorithm curriculum that gets validated by script before any lesson ships.",
        stack: ["React", "TypeScript", "three.js"],
        links: [{ label: "Demo soon", href: "" }],
      },
      {
        name: "Claude Code workspace",
        status: "Daily use",
        live: true,
        blurb:
          "Persistent memory files, daily logs, per-project overviews, and MCP connectors (Google Drive, Gmail, Notion, Slack, Firecrawl) so every session starts with full context. It's how all of the above got built.",
        stack: ["Claude Code", "MCP"],
        links: [],
      },
    ],
  },

  videos: {
    channelUrl: YOUTUBE,
    // Add 11-character YouTube video IDs here, newest first. Empty = shows the placeholder.
    videoIds: [] as string[],
    emptyState: {
      title: "First video: the dog daycare audit story",
      blurb:
        "Built the tool, delivered the report, got told she already knew most of it. Filming it now.",
      ctaLabel: "Subscribe so you don't miss it",
    },
  },

  signup: {
    heading: "Follow the projects as they happen",
    blurb:
      "One email when a project actually moves — a real number changes, a client says something honest, a video goes up. No hype, no drip sequence.",
    // Paste the Beehiiv embed HTML here as a string when the publication exists. null = placeholder card.
    beehiivEmbedHtml: null as string | null,
    fallbackEmail: EMAIL,
  },

  about: {
    heading: "About",
    paragraphs: [
      "Barnes is my last name, and it's been my nickname for as long as I can remember — most people call me that, not Lucas. No family story behind it. It's just mine, and I'm proud of it.",
      "I'm a senior at UW-Madison. I don't have years of consulting experience, and I'm not going to pretend I do. What I have is a belief that AI is the shift — that the people who get good at it early are the ones who'll succeed — and that it's worth being excellent at while it's still early.",
      "So I'm building the track record in the open: real businesses, real numbers, and the parts that don't go well included.",
    ],
  },

  footer: {
    links: [
      { label: "YouTube", href: YOUTUBE, enabled: true },
      { label: "Instagram", href: INSTAGRAM, enabled: true },
      { label: "Email", href: `mailto:${EMAIL}`, enabled: true },
      { label: "TikTok", href: "https://www.tiktok.com/@barnesincai", enabled: false },
      { label: "X", href: "https://x.com/barnesincai", enabled: false },
      { label: "Skool", href: "#", enabled: false },
    ] as Link[],
    note: "Barnes Inc. · Madison / Milwaukee, WI",
  },
};
