// All copy, links, and IDs for the site live here. Edit text in this file only.

const YOUTUBE = "https://www.youtube.com/@barnesincai";
const INSTAGRAM = "https://www.instagram.com/barnesincai";
const EMAIL = "barnesincai@gmail.com";

export type Link = { label: string; href: string; enabled: boolean };

export const site = {
  meta: {
    title: "Barnes Inc.",
    description:
      "AI consulting that improves small-business margins in Madison and Milwaukee, and the whole thing documented in public — the builds, the client calls, the misses — so you can learn to do it yourself.",
    ogImage: "/og.png",
  },

  nav: [
    { label: "Story", href: "#project" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
    { label: "Follow", href: "#signup" },
  ],

  hero: {
    eyebrow: "Barnes Inc. — Madison / Milwaukee, WI",
    headline: "Proof that AI can give small businesses the margins they need.",
    positioning:
      "Barnes Inc. gives small business owners AI-driven proof of better margins — sharper marketing that turns into more leads and smarter spend, and automation that cuts the labor cost of redundant manual work like scheduling. Every project becomes a documented case study, so the proof compounds as the work goes.",
    content:
      "The other half of this: I document all of it — the builds, the client calls, the parts that don't work — on YouTube and here, so other people can learn to do this themselves.",
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
      text: "In progress — next: the labor question, then SEO.",
    },
    title: "Project 01: my mom's dog daycare",
    story: [
      "My first client is my mom. She owns a Dogtopia location in Milwaukee. I did the work free, on purpose: I wanted a real result on a real business before I asked anyone to pay for one.",
      "I built a tool that pulls a business's marketing, competitor, and staffing data into a growth audit, rendered her a 16-page report, and delivered it.",
      "Her take: useful in parts, but a lot of it she already knew. Fair — owners live inside their business. What actually moved things forward was asking her directly what she wanted to change. She named it in two sentences.",
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
      "All of it with Claude, starting from zero coding background in summer 2026. Statuses are honest. Most of the code is private for now — ask and I'll walk you through any of it.",
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
        name: "Fantasy football draft engine",
        status: "Used live — Sep 1, 2026 draft",
        live: true,
        blurb:
          "A draft-day decision engine. Pulls projections and ADP from Sleeper, ESPN, and FantasyFootballCalculator, scores every player under the league's exact rules (matched Sleeper's published points 551 for 551), ranks by value over replacement, then runs thousands of simulated drafts to estimate who survives to my next pick. Terminal console plus a browser board that agree on 112 of 112 test states. Day one it caught a real edge: a suspended RB still priced as a third-round pick.",
        stack: ["Python", "numpy / pandas", "Monte Carlo sim", "Sleeper + ESPN APIs"],
        links: [{ label: "Private — walkthrough on request", href: "" }],
      },
      {
        name: "School Hub",
        status: "Daily use — Fall 2026",
        live: true,
        blurb:
          "Canvas → Notion → Claude. A Python tool (standard library only) pulls every assignment, exam, event, grade, announcement, and file for five courses into a local cache and mirrors it into Notion databases without overwriting what I've marked done. Seven custom Claude Code skills on top: sync, week plan, study guide, flashcards, outline, exam prep, course setup. Unit-tested against fixture data.",
        stack: ["Python", "Canvas API", "Notion API", "Claude Code skills"],
        links: [{ label: "Private — walkthrough on request", href: "" }],
      },
      {
        name: "Food Dealz",
        status: "Just started — Sep 2026",
        live: false,
        blurb:
          "Every current food deal near you, restaurants and grocery, compared at the item level: the cheapest pizza slice or pound of ground beef within reach. Launch market is Madison. Next.js 16 on Supabase (Postgres + PostGIS, row-level security), a canonical item taxonomy, and Claude structured extraction with a hard rule that every price must appear verbatim in the captured text. Schema, migrations, and taxonomy are done; scrapers are next.",
        stack: ["Next.js 16", "TypeScript", "Supabase / PostGIS", "Claude API"],
        links: [{ label: "In progress — private", href: "" }],
      },
      {
        name: "This website",
        status: "Live",
        live: true,
        blurb:
          "Astro static site with one content file for every word on the page, design-token CSS, and a farm-at-night theme drawn entirely in hand-written SVG and CSS: a barn whose doors open on scroll, animals that walk, a moon that sets. Generated favicon and share image, sitemap, GitHub → Vercel continuous deploy.",
        stack: ["Astro", "CSS", "SVG", "Vercel"],
        links: [{ label: "Code on GitHub", href: "https://github.com/barnel18/BarnesAI" }],
      },
      {
        name: "Cube Coach",
        status: "In progress",
        live: false,
        blurb:
          "A Rubik's-cube learning app: interactive 3D cube in React + three.js, a move engine with unit tests, a verified layer-by-layer beginner solver, and a tiered algorithm curriculum that gets validated by script before any lesson ships.",
        stack: ["React", "TypeScript", "three.js", "Vitest"],
        links: [{ label: "Demo soon", href: "" }],
      },
      {
        name: "Claude Code workspace",
        status: "Daily use",
        live: true,
        blurb:
          "Persistent memory files, daily logs, per-project overviews, and MCP connectors (Google Drive, Gmail, Notion, Slack, Firecrawl, Apify) so every session starts with full context. Plus a local AI stack on an M2 Mac: Ollama for text models, ComfyUI with SDXL for images. It's how all of the above got built.",
        stack: ["Claude Code", "MCP", "Ollama", "ComfyUI"],
        links: [],
      },
      {
        name: "AI hedge fund (paper trading)",
        status: "First build — Jun 2026",
        live: false,
        blurb:
          "Nine Claude agents — sector analysts, a macro economist, technical and sentiment analysts — each write a view, an investment board votes, and approved trades go to an Alpaca paper-trading account. My first AI project, before I knew what any of it was called. Never traded real money.",
        stack: ["Python", "Claude API", "Alpaca API"],
        links: [{ label: "Private — walkthrough on request", href: "" }],
      },
    ],
  },

  skills: {
    heading: "What I can actually do",
    blurb:
      "Only things I've shipped with. Every tool here is holding up at least one project above.",
    groups: [
      {
        name: "AI & agents",
        items: ["Claude Code (daily driver)", "Claude API — structured outputs, batches", "MCP connectors", "Multi-agent workflows", "Prompt & workflow design", "Custom Claude Code skills", "Local models — Ollama, ComfyUI / SDXL"],
      },
      {
        name: "Python",
        items: ["Data pipelines", "Monte Carlo simulation", "numpy / pandas", "Fuzzy name matching (rapidfuzz)", "httpx / API clients", "SQLite", "unittest", "Jinja2 + WeasyPrint PDFs", "Terminal UIs (rich)"],
      },
      {
        name: "Web",
        items: ["TypeScript", "React", "Next.js 16 (App Router)", "three.js / react-three-fiber", "Astro", "Tailwind v4", "CSS design tokens", "Hand-drawn SVG & scroll-driven animation", "Vite / Vitest", "zod", "zustand"],
      },
      {
        name: "Data & infra",
        items: ["Supabase — Postgres, PostGIS, RLS, migrations", "Google APIs — PageSpeed, Search Console, GA4", "Canvas & Notion APIs", "Git / GitHub", "Vercel", "pnpm / npm / fnm", "Headless Chrome automation", "Secrets hygiene (.env, gitignore)"],
      },
      {
        name: "Business",
        items: ["SEO & competitor audits", "Google Business Profile", "Staffing & labor-cost analysis", "Client debriefs", "Building in public"],
      },
    ],
  },

  roadmap: {
    heading: "Where this is going",
    blurb: "Not the whole plan. Enough to hold me to it.",
    items: [
      { state: "done", when: "Aug 2026", title: "Started Barnes Inc.", detail: "Built the audit pipeline. Delivered the first report to client #1 — free, on purpose." },
      { state: "done", when: "Sep 2026", title: "Went public", detail: "This site, the accounts, the first video scripted." },
      { state: "now", when: "Now", title: "Client #1, for real", detail: "Find the actual constraint behind the labor number, then point the SEO tools at her site. Show the before and after." },
      { state: "next", when: "Fall 2026", title: "Client #2 and the first videos", detail: "Next client from a short list of local service businesses I already know. Publish the first videos and keep a buffer so posting stays consistent." },
      { state: "later", when: "2027", title: "Teach it", detail: "A course and a community — once there are enough real results to teach from. Not before." },
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
      "I'm Lucas Barnes — Barnes to most people. Senior at UW–Madison studying biology, from Pewaukee, Wisconsin. I spent four summers on a concrete crew and ended up leading it. That's where I learned to show up and get the day's work done.",
      "In August 2026 I started building with Claude Code from zero coding background. Two weeks later I had a working audit pipeline and a first client. I got into AI because I think it's the shift, and I'd rather get good at it now than watch it happen.",
      "Barnes Inc. is two things: consulting that improves a small business's margins with the least AI necessary, and the record of that work — videos, write-ups, this site — for people who want to learn to do it themselves. I don't have a long track record yet. That's what the record is for.",
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
