# wilfredmorgan.com — Content Audit Report
## Generated: 2026-03-29
## Purpose: Input for content/design decoupling

---

## Summary

- **Total files audited:** 17 (7 pages · 7 components · 2 layouts · 1 constants file)
- **Files with hardcoded text:** 14
- **Already externalized (no action needed):** 3
- **Files with no display text (infrastructure only):** 1 (`src/layouts/PageLayout.astro`)
- **Estimated text strings to extract:** ~165 individual strings across all files
- **Recommended data files:** `homepage.json`, `about.json`, `work.json`, `contact.json`, `writing.json`, `shared.json`, `error.json`

> ⚠️ **Discrepancy flagged:** `TechStackMarquee.astro` hardcodes its own tech list (15 items × 2 for loop animation). This duplicates and diverges from `SITE.TECH_STACK` in `src/consts/index.ts`. Extraction must reconcile both.

---

## File-by-File Inventory

---

### `src/pages/index.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 63 | `seo` | `homepage.meta.title` | `Wilfred Morgan — AI Systems Architect \| Agentic AI Implementation & Generative AI Architecture` |
| 64 | `seo` | `homepage.meta.description` | `Wilfred Morgan is an AI Systems Architect who deploys production agentic AI systems in regulated industries...` |
| 20 | `schema` | `homepage.faq[0].question` | `What does an agentic AI architect do?` |
| 23 | `schema` | `homepage.faq[0].answer` | `An agentic AI architect designs, builds, and deploys autonomous AI agent systems that operate within enterpr...` |
| 27 | `schema` | `homepage.faq[1].question` | `How to deploy AI agents in enterprise environments?` |
| 31 | `schema` | `homepage.faq[1].answer` | `Enterprise AI agent deployment requires a production-first architecture approach: define agent scope and gov...` |
| 35 | `schema` | `homepage.faq[2].question` | `What is an AI maturity assessment framework?` |
| 39 | `schema` | `homepage.faq[2].answer` | `An AI maturity assessment framework evaluates an organization's readiness to implement and scale AI systems...` |
| 44 | `schema` | `homepage.faq[3].question` | `How can enterprise AI transformation be completed in 90 days instead of 18 months?` |
| 47 | `schema` | `homepage.faq[3].answer` | `By deploying a production-ready AI architecture using specification-driven development, multi-agent orchest...` |
| 52 | `schema` | `homepage.faq[4].question` | `What certifications do you need for enterprise AI roles?` |
| 55 | `schema` | `homepage.faq[4].answer` | `AI Systems Architect roles typically require a combination of cloud platform certifications and practical...` |

> **Note:** `index.astro` itself renders no visible text — all visible content lives in the five imported components. This page is pure composition + SEO metadata + FAQ schema.

---

### `src/pages/about/index.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 51 | `seo` | `about.meta.title` | `About Wilfred Morgan — AI Systems Architect & AI Strategy Executive` |
| 52 | `seo` | `about.meta.description` | `Wilfred Morgan is an AI Systems Architect with 20+ years of experience deploying production AI systems...` |
| 13 | `schema` | `about.breadcrumb[0].name` | `Home` |
| 14 | `schema` | `about.breadcrumb[1].name` | `About` |
| 24 | `schema` | `about.faq[0].question` | `How to transition from software engineer to AI architect?` |
| 27 | `schema` | `about.faq[0].answer` | `The most effective path from software engineer to AI architect combines three elements: deep platform exper...` |
| 31 | `schema` | `about.faq[1].question` | `Does Wilfred Morgan do AI consulting and speaking engagements?` |
| 34 | `schema` | `about.faq[1].answer` | `Yes. Wilfred Morgan is available for AI Systems Architecture consulting, AI maturity assessments, confer...` |
| 39 | `schema` | `about.faq[2].question` | `What industries does Wilfred Morgan specialize in for AI implementation?` |
| 42 | `schema` | `about.faq[2].answer` | `Wilfred Morgan's AI architecture practice focuses on regulated industries including financial services (11+...` |
| 61 | `visible` | `about.page.sectionLabel` | `About` |
| 65–67 | `visible` | `about.page.h1SrOnly` | `Wilfred Morgan — AI Systems Architect, Generative AI Architecture & AI Strategy Executive` |
| 73 | `visible` | `about.page.displayHeading` | `The Architect` |
| 96 | `data-array` | `about.identityCard[0].label` | `Role` |
| 96 | `data-array` | `about.identityCard[0].value` | `AI Systems Architect` |
| 97 | `data-array` | `about.identityCard[1].label` | `Specialization` |
| 97 | `data-array` | `about.identityCard[1].value` | `Agentic AI · Generative AI · Multi-Agent Systems` |
| 98 | `data-array` | `about.identityCard[2].label` | `Experience` |
| 98 | `data-array` | `about.identityCard[2].value` | `20+ years` |
| 99 | `data-array` | `about.identityCard[3].label` | `Verticals` |
| 99 | `data-array` | `about.identityCard[3].value` | `Financial Services · Healthcare · Energy` |
| 100 | `data-array` | `about.identityCard[4].label` | `Engagements` |
| 100 | `data-array` | `about.identityCard[4].value` | `Selective — inquiry only` |
| 101 | `data-array` | `about.identityCard[5].label` | `Status` |
| 101 | `data-array` | `about.identityCard[5].value` | `Available for engagements` |
| 117–121 | `visible` | `about.bio.paragraph1` | `I am a Principal Architect and AI systems engineer with over 15 years of experience designing and deploying...` |
| 124–130 | `visible` | `about.bio.paragraph2` | `My current focus is the architecture and deployment of Dark Factories — fully autonomous, AI-orchestrated o...` |
| 132–137 | `visible` | `about.bio.paragraph3` | `I work with CTO, VP Engineering, and Head of AI at F500 and high-growth organizations who are done with ex...` |
| 139–143 | `visible` | `about.bio.paragraph4` | `I am also available for speaking engagements, conference panels, and keynotes on autonomous systems design...` |
| 150 | `visible` | `about.speaking.heading` | `Speaking & Panels` |
| 153–158 | `visible` | `about.speaking.intro` | `Available for conferences, panels, and keynotes on autonomous systems, AI transformation, and the architec...` |
| 163 | `data-array` | `about.speaking.talks[0].topic` | `Dark Factory Architecture` |
| 163 | `data-array` | `about.speaking.talks[0].desc` | `How to design and deploy fully autonomous operational pipelines at enterprise scale.` |
| 164 | `data-array` | `about.speaking.talks[1].topic` | `AI Transformation That Actually Ships` |
| 164 | `data-array` | `about.speaking.talks[1].desc` | `The architectural decisions that separate successful AI transformations from expensive experiments.` |
| 165 | `data-array` | `about.speaking.talks[2].topic` | `The 90-Day Enterprise Transformation` |
| 165 | `data-array` | `about.speaking.talks[2].desc` | `Practical methodology for compressing 18-month roadmaps without compromising quality or security.` |
| 166 | `data-array` | `about.speaking.talks[3].topic` | `Multi-Agent System Design` |
| 166 | `data-array` | `about.speaking.talks[3].desc` | `Agent taxonomy, orchestration patterns, and failure mode management for production AI systems.` |
| 178 | `visible` | `about.speaking.ctaLabel` | `Speaking Inquiry →` |

---

### `src/pages/work/index.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 56 | `seo` | `work.meta.title` | `AI Systems Case Studies — Wilfred Morgan \| AI Agent Deployment & Architecture` |
| 57 | `seo` | `work.meta.description` | `Case studies and architecture work from enterprise AI implementations — agentic AI deployment, RAG pipelines...` |
| 49 | `schema` | `work.breadcrumb[0].name` | `Home` |
| 50 | `schema` | `work.breadcrumb[1].name` | `Work` |
| 66 | `visible` | `work.page.sectionLabel` | `Work` |
| 74 | `visible` | `work.page.displayHeading` | `Authority Archive` |
| 76–79 | `visible` | `work.page.subtitle` | `Selected architecture work, case studies, and deployed systems. All enterprise engagements are anonymized...` |
| 11 | `data-array` | `work.projects[0].id` | `multi-agent-operating-system` |
| 12 | `data-array` | `work.projects[0].title` | `Multi-Agent Operating System` |
| 13 | `data-array` | `work.projects[0].category` | `Dark Factory · AI Architecture` |
| 14 | `data-array` | `work.projects[0].status` | `LIVE` |
| 15 | `data-array` | `work.projects[0].year` | `2025–Present` |
| 16–19 | `data-array` | `work.projects[0].summary` | `Principal Architect and systems engineer for a 13-agent, multi-tier AI orchestration system operating acro...` |
| 18 | `data-array` | `work.projects[0].metrics[0]` | `13 agentic AI agents` |
| 18 | `data-array` | `work.projects[0].metrics[1]` | `Multi-agent orchestration` |
| 18 | `data-array` | `work.projects[0].metrics[2]` | `Production autonomous system` |
| 22 | `data-array` | `work.projects[1].id` | `enterprise-ai-transformation` |
| 23 | `data-array` | `work.projects[1].title` | `Enterprise AI Transformation` |
| 24 | `data-array` | `work.projects[1].category` | `Advisory · Architecture` |
| 25 | `data-array` | `work.projects[1].status` | `CASE STUDY` |
| 26 | `data-array` | `work.projects[1].year` | `2024` |
| 27–29 | `data-array` | `work.projects[1].summary` | `Enterprise AI transformation for a Fortune 500 organization. Designed and deployed a multi-agent orchestra...` |
| 29 | `data-array` | `work.projects[1].metrics[0]` | `90-day delivery` |
| 29 | `data-array` | `work.projects[1].metrics[1]` | `70%+ overhead reduction` |
| 29 | `data-array` | `work.projects[1].metrics[2]` | `Principal-led` |
| 33 | `data-array` | `work.projects[2].id` | `dark-factory-methodology` |
| 34 | `data-array` | `work.projects[2].title` | `Dark Factory Methodology` |
| 35 | `data-array` | `work.projects[2].category` | `Systems Design · Whitepaper` |
| 36 | `data-array` | `work.projects[2].status` | `PUBLISHED` |
| 37 | `data-array` | `work.projects[2].year` | `2025` |
| 38–40 | `data-array` | `work.projects[2].summary` | `Proprietary framework for designing autonomous, AI-orchestrated operational pipelines at L4–L5 maturity...` |
| 40 | `data-array` | `work.projects[2].metrics[0]` | `L4–L5 maturity` |
| 40 | `data-array` | `work.projects[2].metrics[1]` | `Full taxonomy` |
| 40 | `data-array` | `work.projects[2].metrics[2]` | `Deployment protocols` |

---

### `src/pages/contact/index.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 22 | `seo` | `contact.meta.title` | `Book an AI Strategy Call — Wilfred Morgan \| AI Systems Architecture Consulting` |
| 23 | `seo` | `contact.meta.description` | `Book a strategy call with Wilfred Morgan for AI Systems Architecture consulting, AI maturity assessments...` |
| 14 | `schema` | `contact.breadcrumb[0].name` | `Home` |
| 15 | `schema` | `contact.breadcrumb[1].name` | `Contact` |
| 32 | `visible` | `contact.page.sectionLabel` | `Contact` |
| 39–41 | `visible` | `contact.page.displayHeading` | `Book a Strategy Call` |
| 42–47 | `visible` | `contact.page.subtitle` | `Calls are reserved for CTO, VP Engineering, and Head of AI at organizations ready to move from exploration...` |
| 60 | `data-array` | `contact.options[0].type` | `Strategy Call` |
| 61 | `data-array` | `contact.options[0].desc` | `90-minute architecture engagement. CTO / VP Engineering / Head of AI. Limited availability. Engagement ter...` |
| 62 | `data-array` | `contact.options[0].cta` | `Schedule on Calendly` |
| 63 | `data-array` | `contact.options[0].href` | `https://calendly.com/wilfred-morgan/` *(see Special Handling Flags)* |
| 68 | `data-array` | `contact.options[1].type` | `Speaking & Consulting Inquiries` |
| 69 | `data-array` | `contact.options[1].desc` | `Conferences, keynotes, panels, and paid consulting engagements. Autonomous systems · AI transformation · Da...` |
| 70 | `data-array` | `contact.options[1].cta` | `Send inquiry` |
| 71 | `data-array` | `contact.options[1].href` | `mailto:info@wilfredmorgan.com` *(see Special Handling Flags)* |
| 88 | `visible` | `contact.options[0].badge` | `PRIMARY` |
| 127–128 | `visible` | `contact.qualifier.heading` | `Who this call is for` |
| 132 | `data-array` | `contact.qualifier.items[0]` | `CTO or VP Engineering at an F500 or high-growth company` |
| 133 | `data-array` | `contact.qualifier.items[1]` | `Head of AI at an organization past the pilot stage` |
| 134 | `data-array` | `contact.qualifier.items[2]` | `Leaders with a real transformation problem — not an exploration budget` |
| 135 | `data-array` | `contact.qualifier.items[3]` | `Organizations ready to act on a 90-day plan` |

> **Note:** `CALENDLY_URL` is already a constant within the file (line 9) but is local only, not in `src/consts/index.ts`. Should be promoted to `SITE.calendlyUrl` in consts or `contact.json`.

---

### `src/pages/writing/index.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 28 | `seo` | `writing.meta.title` | `AI Architecture Blog — Wilfred Morgan \| Enterprise AI, Agentic AI, RAG Pipelines` |
| 29 | `seo` | `writing.meta.description` | `Technical thought leadership on enterprise AI implementation — agentic AI deployment patterns, RAG pipeline...` |
| 20 | `schema` | `writing.breadcrumb[0].name` | `Home` |
| 21 | `schema` | `writing.breadcrumb[1].name` | `Writing` |
| 38 | `visible` | `writing.page.sectionLabel` | `Writing` |
| 42–44 | `visible` | `writing.page.h1SrOnly` | `AI Systems Architecture Blog — Agentic AI, RAG Pipelines, Multi-Agent Orchestration` |
| 49–51 | `visible` | `writing.page.displayHeading` | `Thought Leadership` |
| 52–56 | `visible` | `writing.page.subtitle` | `On enterprise AI implementation — agentic AI deployment, RAG pipelines, multi-agent orchestration, and wha...` |
| 98 | `visible` | `writing.page.readMoreLabel` | `READ ARTICLE` |

> Article list data (date, readTime, category, title, excerpt) is driven by **Content Collections** — already externalized. No extraction needed for dynamic article fields.

---

### `src/pages/writing/[slug].astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 74 | `visible` | `writing.article.backLabel` | `WRITING` |
| 78 | `visible` | `writing.article.sidebar.dateLabel` | `Date` |
| 82 | `visible` | `writing.article.sidebar.readTimeLabel` | `Read time` |
| 86 | `visible` | `writing.article.sidebar.categoryLabel` | `Category` |
| 90 | `visible` | `writing.article.sidebar.ctaLabel` | `Book a Call →` |
| 193 | `visible` | `writing.article.footer.byline` | `Wilfred Morgan` |
| 197 | `visible` | `writing.article.footer.role` | `AI Systems Architect · Agentic AI Implementation` |
| 200 | `visible` | `writing.article.footer.ctaLabel` | `Book a Strategy Call →` |
| 29 | `schema` | `shared.schema.authorName` | `Wilfred Morgan` *(static; used in Article schema)* |
| 31 | `schema` | `shared.schema.authorJobTitle` | `AI Systems Architect` *(static; used in Article schema)* |

> Dynamic title, description, date, excerpt, tags, content all come from **Content Collections** — already externalized. The `title` prop and `description` prop passed to `PageLayout` are dynamic from `article.data`.

---

### `src/pages/404.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 10 | `seo` | `error.meta.title` | `Page Not Found — Wilfred Morgan` |
| 11 | `seo` | `error.meta.description` | `This page doesn't exist. Navigate back to wilfredmorgan.com.` |
| 19 | `visible` | `error.page.sectionLabel` | `404` |
| 23 | `visible` | `error.page.errorCode` | `ERROR_404 · PAGE_NOT_FOUND` |
| 28–30 | `visible` | `error.page.heading` | `This page doesn't exist.` |
| 31–33 | `visible` | `error.page.body` | `Even autonomous systems have edge cases. Navigate back to something real.` |
| 35 | `visible` | `error.page.primaryCta` | `Back to Home →` |
| 36 | `visible` | `error.page.secondaryCta` | `View Architecture Work` |
| 41 | `data-array` | `error.quickLinks[0].label` | `Work` |
| 42 | `data-array` | `error.quickLinks[1].label` | `Writing` |
| 43 | `data-array` | `error.quickLinks[2].label` | `Contact` |

---

### `src/components/Hero.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 51 | `visible` | `hero.sectionLabel` | `AI Systems Architect · Agentic AI Implementation` |
| 55–57 | `visible` | `hero.h1SrOnly` | `Wilfred Morgan — AI Systems Architect specializing in Agentic AI Implementation & Generative AI Architec...` |
| 65 | `visible` | `hero.name.firstName` | `Wilfred` |
| 67 | `visible` | `hero.name.lastName` | `Morgan` |
| 76–80 | `visible` | `hero.positioning` | `AI Systems Architect specializing in agentic AI deployment, generative AI architecture, and multi-agent...` |
| 85 | `visible` | `hero.cta.primary` | `Book a Strategy Call` |
| 103 | `visible` | `hero.cta.secondary` | `View Architecture Work` |
| 114 | `data-array` | `hero.stats[0].value` | `20+` |
| 114 | `data-array` | `hero.stats[0].label` | `Years enterprise systems` |
| 115 | `data-array` | `hero.stats[1].value` | `L4–L5` |
| 115 | `data-array` | `hero.stats[1].label` | `Dark Factory maturity` |
| 116 | `data-array` | `hero.stats[2].value` | `90 days` |
| 116 | `data-array` | `hero.stats[2].label` | `Enterprise transformation` |
| 140 | `visible` | `hero.scrollIndicator` | `SCROLL` *(aria-hidden decorative — low priority)* |

> **Note:** Decorative line numbers `["01","02","03","04","05"]` at line 39 are aria-hidden and purely aesthetic — skip extraction.

---

### `src/components/AuthorityStatement.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 22 | `visible` | `authorityStatement.sectionLabel` | `What I Build` |
| 31–38 | `visible` | `authorityStatement.leadHeadline` | `Enterprise technology leaders hire me when they need transformation that actually ships — not a roadmap tha...` |
| 43–47 | `visible` | `authorityStatement.body.paragraph1` | `I design and deploy enterprise AI systems — multi-agent architectures and agentic AI pipelines that compres...` |
| 49–54 | `visible` | `authorityStatement.body.paragraph2` | `My current flagship — This production multi-agent operating system — is a live operational system running thirteen specialized AI...` |
| 56–59 | `visible` | `authorityStatement.body.paragraph3` | `If your organization is serious about AI transformation — not exploration, not pilot programs, not proof-of...` |
| 67 | `data-array` | `authorityStatement.capabilities[0].title` | `Dark Factory Design` |
| 68 | `data-array` | `authorityStatement.capabilities[0].desc` | `End-to-end autonomous pipeline architecture. Zero human operator touchpoints between spec and delivery.` |
| 69 | `data-array` | `authorityStatement.capabilities[0].icon` | `⬡` |
| 71 | `data-array` | `authorityStatement.capabilities[1].title` | `AI Transformation Advisory` |
| 72 | `data-array` | `authorityStatement.capabilities[1].desc` | `Selective strategy engagements for CTO, VP Engineering, and Head of AI at F500 and high-growth organizatio...` |
| 73 | `data-array` | `authorityStatement.capabilities[1].icon` | `◈` |
| 75 | `data-array` | `authorityStatement.capabilities[2].title` | `Systems Engineering` |
| 76 | `data-array` | `authorityStatement.capabilities[2].desc` | `20+ years enterprise-level. Azure OpenAI · Semantic Kernel · Python · LangFlow · LangChain. Hands on, not...` |
| 77 | `data-array` | `authorityStatement.capabilities[2].icon` | `⬢` |
| 79 | `data-array` | `authorityStatement.capabilities[3].title` | `Speaking & Panels` |
| 80 | `data-array` | `authorityStatement.capabilities[3].desc` | `Available for conferences, keynotes, and panels on autonomous systems, AI architecture, and the future of...` |
| 81 | `data-array` | `authorityStatement.capabilities[3].icon` | `◉` |

---

### `src/components/DarkFactoryProof.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 27 | `visible` | `darkFactoryProof.sectionLabel` | `Live System` |
| 37 | `visible` | `darkFactoryProof.operationalBadge` | `OPERATIONAL — DARK FACTORY v1.0` |
| 44 | `visible` | `darkFactoryProof.heading` | `Multi-Agent Operating System` |
| 46–53 | `visible` | `darkFactoryProof.description` | `A live, production-deployed multi-agent AI architecture. Thirteen specialized agents operating across five...` |
| 69 | `data-array` | `darkFactoryProof.domains[0].tier` | `T1` |
| 70 | `data-array` | `darkFactoryProof.domains[0].label` | `Executive Command` |
| 71 | `data-array` | `darkFactoryProof.domains[0].agents[0]` | `Principal Architect — Principal Architect & Systems Orchestrator` |
| 74 | `data-array` | `darkFactoryProof.domains[1].tier` | `T2` |
| 75 | `data-array` | `darkFactoryProof.domains[1].label` | `Strategic Intelligence` |
| 77 | `data-array` | `darkFactoryProof.domains[1].agents[0]` | `The Strategy Agent — career capital strategy & positioning` |
| 78 | `data-array` | `darkFactoryProof.domains[1].agents[1]` | `The Portfolio Agent — internal operations & internal operations strategy` |
| 79 | `data-array` | `darkFactoryProof.domains[1].agents[2]` | `The Governance Agent — IP, contracts, compliance` |
| 80 | `data-array` | `darkFactoryProof.domains[1].agents[3]` | `The Financial Agent — financial intelligence` |
| 83 | `data-array` | `darkFactoryProof.domains[2].tier` | `T3` |
| 84 | `data-array` | `darkFactoryProof.domains[2].label` | `Execution Layer` |
| 85 | `data-array` | `darkFactoryProof.domains[2].agents[0]` | `The Build Pipeline — digital build & infrastructure` |
| 86 | `data-array` | `darkFactoryProof.domains[2].agents[1]` | `The Content Pipeline — content & brand media` |
| 87 | `data-array` | `darkFactoryProof.domains[2].agents[2]` | `The Recruiting Pipeline — recruiting & team build` |
| 139 | `data-array` | `darkFactoryProof.metrics[0].value` | `13` |
| 139 | `data-array` | `darkFactoryProof.metrics[0].label` | `Specialized agents` |
| 140 | `data-array` | `darkFactoryProof.metrics[1].value` | `5` |
| 140 | `data-array` | `darkFactoryProof.metrics[1].label` | `Operational domains` |
| 141 | `data-array` | `darkFactoryProof.metrics[2].value` | `0` |
| 141 | `data-array` | `darkFactoryProof.metrics[2].label` | `Human operator touchpoints` |
| 159–165 | `visible` | `darkFactoryProof.workLinkLabel` | `View full architecture documentation` |

---

### `src/components/TechStackMarquee.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 24 | `visible` | `techStack.sectionLabel` | `Stack` |
| 32–61 | `data-array` | `techStack.marqueeItems` | `["Azure","Claude AI","Python","LangFlow","Semantic Kernel","Cursor","Astro","React","TypeScript","Tailwind CSS","Node.js","FastAPI","GitHub Actions","Netlify","Azure Static Web Apps"]` |

> ⚠️ **DISCREPANCY:** The marquee tech list is hardcoded inline (15 items × 2 for animation). It does **not** read from `SITE.TECH_STACK` in `src/consts/index.ts`. The two lists differ:
> - `TechStackMarquee.astro` includes: `Node.js`, `GitHub Actions`, `Netlify`, `Azure Static Web Apps`
> - `src/consts/index.ts` TECH_STACK includes: `Azure OpenAI`, `C# / .NET`, `RAG Pipelines`, `Microsoft Copilot Studio`, `LangChain`
> Resolution: Consolidate into a single `TECH_STACK` source of truth, then have the marquee component consume it.

---

### `src/components/CTASection.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 28 | `visible` | `cta.sectionLabel` | `Ready to Build` |
| 33–38 | `visible` | `cta.headline` | `If you're serious about AI transformation — let's talk architecture.` |
| 39–43 | `visible` | `cta.body` | `Strategy calls are reserved for CTO, VP Engineering, and Head of AI engagements at organizations ready to...` |
| 47 | `visible` | `cta.primaryButtonLabel` | `Book a Strategy Call` |
| 53 | `visible` | `cta.secondaryButtonLabel` | `View Architecture Work` |
| 67 | `visible` | `cta.card.heading` | `Strategy Engagement` |
| 70 | `visible` | `cta.card.pricing` | `By Inquiry` |
| 77 | `data-array` | `cta.card.features[0]` | `90-minute architecture deep-dive` |
| 78 | `data-array` | `cta.card.features[1]` | `Current state assessment` |
| 79 | `data-array` | `cta.card.features[2]` | `Dark Factory readiness scoring` |
| 80 | `data-array` | `cta.card.features[3]` | `Transformation roadmap (60–90 day)` |
| 81 | `data-array` | `cta.card.features[4]` | `Follow-on retainer available` |
| 93–97 | `visible` | `cta.card.qualifier` | `QUALIFIED: CTO · VP Engineering · Head of AI\nF500 · High-growth · Venture-backed` |

---

### `src/components/Nav.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 27 | `visible` | `nav.logoAriaLabel` | `Wilfred Morgan — Home` |
| 41 | `visible` | `nav.wordmark` | `Wilfred Morgan` |
| 68–69 | `visible` | `nav.desktopCtaLabel` | `Book a Call` |
| 77 | `visible` | `nav.mobileToggleAriaLabel` | `Toggle menu` |
| 108 | `visible` | `nav.mobileCtaLabel` | `Book a Call` |

> Nav link labels (`Work`, `Writing`, `About`, `Contact`) come from `SITE.navLinks` — **already externalized**.

---

### `src/components/Footer.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 28 | `visible` | `footer.wordmark` | `Wilfred Morgan` |
| 31–33 | `visible` | `footer.tagline` | `AI Systems Architect · Agentic AI Implementation` |
| 41 | `visible` | `footer.navLinks[0].label` | `AI Systems Case Studies` |
| 45 | `visible` | `footer.navLinks[1].label` | `AI Architecture Blog` |
| 50 | `visible` | `footer.navLinks[2].label` | `About Wilfred Morgan` |
| 55 | `visible` | `footer.navLinks[3].label` | `Book an AI Strategy Call` |
| 63 | `visible` | `footer.ctaLabel` | `Book a Call →` |
| 71 | `visible` | `footer.copyright` | `© {year} Wilfred Morgan. All rights reserved.` |
| 75 | `visible` | `footer.statusBadge` | `Dark Factory · Multi-Agent Operating System` |

> ⚠️ **Note:** Footer nav link labels are hardcoded and differ from `SITE.navLinks` labels (e.g., "Work" vs. "AI Systems Case Studies"). These footer labels are SEO-flavored variants — both sets need to be externalized separately, but the distinction should be preserved.

---

### `src/layouts/BaseLayout.astro`

| Line(s) | Category | Suggested Key | Content (truncated to 120 chars) |
|---|---|---|---|
| 66–89 | `schema` | `shared.schema.person.name` | `Wilfred Morgan` |
| 68 | `schema` | `shared.schema.person.jobTitle` | `AI Systems Architect` |
| 69 | `schema` | `shared.schema.person.description` | `AI Systems Architect and agentic AI implementation specialist with 20+ years of experience deploying pro...` |
| 70–89 | `schema` | `shared.schema.person.knowsAbout` | Array of 18 knowledge domain strings |
| 91–100 | `schema` | `shared.schema.person.hasCredential[0].name` | `Microsoft Certified: Azure Solutions Architect Expert (AZ-305)` |
| 98 | `schema` | `shared.schema.person.hasCredential[1].name` | `Microsoft LEAP Alumni` |
| 103–107 | `schema` | `shared.schema.person.hasOccupation.name` | `AI Systems Architect` |
| 106 | `schema` | `shared.schema.person.hasOccupation.skills` | `Agentic AI deployment, generative AI architecture, RAG pipeline design, multi-agent orchestration...` |
| 109 | `schema` | `shared.schema.person.sameAs[0]` | `https://www.linkedin.com/in/wilfredmorgan/` |
| 111–116 | `schema` | `shared.schema.person.contactPoint.email` | `info@wilfredmorgan.com` |
| 113 | `schema` | `shared.schema.person.contactPoint.contactType` | `Business Inquiries` |
| 123 | `schema` | `shared.schema.website.name` | `Wilfred Morgan — AI Systems Architect` |
| 125 | `schema` | `shared.schema.website.description` | `AI Systems Architecture consulting, agentic AI implementation, and thought leadership from Wilfred Morga...` |
| 137 | `schema` | `shared.schema.professionalService.name` | `Wilfred Morgan — Enterprise AI Consulting` |
| 139 | `schema` | `shared.schema.professionalService.description` | `AI Systems Architecture consulting specializing in agentic AI implementation, RAG pipeline design, AI m...` |
| 144–150 | `schema` | `shared.schema.professionalService.serviceTypes` | Array: `["AI Architecture Consulting","Agentic AI Implementation","RAG Pipeline Design","AI Maturity Assessment","Enterprise AI Governance"]` |
| 155–163 | `schema` | `shared.schema.professionalService.offer.name` | `AI Architecture Strategy Call` |
| 161–162 | `schema` | `shared.schema.professionalService.offer.description` | `90-minute engagement for CTO, VP Engineering, and Head of AI to assess AI maturity and define implementati...` |

---

### `src/layouts/PageLayout.astro`

No hardcoded display text. Pure layout composition — passes props to `BaseLayout`, renders `Nav`, `main`, `Footer`. **No extraction needed.**

---

## Already Externalized (No Action Needed)

| Source | What is Externalized |
|---|---|
| `src/consts/index.ts` — `SITE` object | `name`, `title`, `description`, `url`, `ogImage`, `navLinks` (4 items with labels + hrefs), `cta.primary` and `cta.secondary` labels |
| `src/consts/index.ts` — `TECH_STACK` array | 15 tech stack items with `label` and `category` — though **not consumed** by `TechStackMarquee.astro` (see discrepancy above) |
| `src/content/writing/` — Astro Content Collections | All article content: `title`, `date`, `readTime`, `category`, `excerpt`, `tags`, `draft` flag, and markdown body |
| `src/pages/writing/[slug].astro` — dynamic props | `title`, `description`, article metadata passed to `PageLayout` dynamically from Content Collections |
| `src/components/Nav.astro` — nav links | Consumes `SITE.navLinks` for all navigation link labels |

---

## Special Handling Flags

### 1. JSON-LD Schema Blocks (Large Structured Data)
`src/layouts/BaseLayout.astro` contains three inline JSON-LD schemas (lines 63–166):
- **Person schema** — 50+ lines with `knowsAbout` array (18 strings), `hasCredential` array (2 objects), `hasOccupation` object, `contactPoint`
- **WebSite schema**
- **ProfessionalService schema** — with `hasOfferCatalog` nesting

These contain significant text content and should be extracted to `shared.json` under a `schema` key. The schemas can remain in `BaseLayout.astro` but read from the data file.

### 2. Inline SVG with Meaningful Content
- `src/components/Nav.astro` and `src/components/Footer.astro`: Both contain an inline SVG of the WM Sovereign Mark. SVG has no text elements (`<text>` or `<title>`), only `<path>` geometry — no content extraction needed.
- Arrow and chevron SVGs throughout (Hero, CTASection, DarkFactoryProof, etc.) are purely decorative with no text elements.

### 3. TechStackMarquee Duplication Discrepancy ⚠️
`TechStackMarquee.astro` hardcodes its own list of tech items and does **not** consume `TECH_STACK` from `src/consts/index.ts`. The two lists have different contents:

| In `TechStackMarquee.astro` only | In `TECH_STACK` only |
|---|---|
| Node.js | Azure OpenAI |
| GitHub Actions | C# / .NET |
| Netlify | RAG Pipelines |
| Azure Static Web Apps | Microsoft Copilot Studio |
| *(Azure listed as just "Azure")* | LangChain |

**Recommended resolution:** Consolidate into one `TECH_STACK` source, then update `TechStackMarquee.astro` to consume it. This is a data-layer fix, not just extraction.

### 4. URLs That Are Content vs. Infrastructure

| URL | Type | Recommended handling |
|---|---|---|
| `https://calendly.com/wilfred-morgan/` | **Content** — user-facing scheduling link | Extract to `contact.options[0].href` or promote to `SITE.calendlyUrl` |
| `mailto:info@wilfredmorgan.com` | **Content** — user-facing contact email | Extract to `contact.options[1].href` or `SITE.contactEmail` |
| `https://www.linkedin.com/in/wilfredmorgan/` | **Content** — public social profile | Extract to `shared.schema.person.sameAs[0]` or `SITE.linkedIn` |
| `https://wilfredmorgan.com` | **Infrastructure** — canonical site URL | Already in `SITE.url` |
| `https://fonts.googleapis.com` | **Infrastructure** — font loading | Skip |

### 5. Conditional Content (Different States)
- `src/components/DarkFactoryProof.astro` (line 37): The `OPERATIONAL — DARK FACTORY v1.0` badge uses a pulsing green dot suggesting live/active state. If the operational status changes, this label would need updating — worth flagging as a dynamic-ish string.
- `src/pages/writing/index.astro`: Empty state (no articles) is not handled — there is no "no articles" message. Low priority but worth noting.

### 6. Footer Nav Labels Differ From Main Nav Labels
`Footer.astro` uses SEO-enriched labels ("AI Systems Case Studies", "AI Architecture Blog", "About Wilfred Morgan", "Book an AI Strategy Call") that are different from the `SITE.navLinks` labels ("Work", "Writing", "About", "Contact"). Both sets are intentional. Extraction should preserve both as distinct keys — `nav.links` vs `footer.navLinks`.

### 7. `prose-wm` Global CSS in `writing/[slug].astro`
Lines 132–185 contain a `<style is:global>` block defining typography for rendered markdown. These are CSS rules, not content strings — **no extraction needed.** However, font family references (`'Public Sans'`, `'JetBrains Mono'`) and color hex values are design tokens already managed by Tailwind config and CSS custom properties.

---

## Recommended JSON Data Structure

```json
// shared.json — Cross-site identity, nav, schema
{
  "site": {
    "name": "",
    "tagline": "",
    "contactEmail": "",
    "calendlyUrl": "",
    "linkedIn": ""
  },
  "nav": {
    "logoAriaLabel": "",
    "wordmark": "",
    "desktopCtaLabel": "",
    "mobileCtaLabel": "",
    "mobileToggleAriaLabel": "",
    "links": [
      { "label": "", "href": "" }
    ]
  },
  "footer": {
    "wordmark": "",
    "tagline": "",
    "ctaLabel": "",
    "copyright": "",
    "statusBadge": "",
    "navLinks": [
      { "label": "", "href": "" }
    ]
  },
  "schema": {
    "person": {
      "name": "",
      "jobTitle": "",
      "description": "",
      "knowsAbout": [],
      "credentials": [
        { "name": "", "category": "" }
      ],
      "occupation": {
        "name": "",
        "skills": ""
      },
      "sameAs": [],
      "contactPoint": {
        "email": "",
        "contactType": ""
      }
    },
    "website": {
      "name": "",
      "description": ""
    },
    "professionalService": {
      "name": "",
      "description": "",
      "serviceTypes": [],
      "offer": {
        "name": "",
        "description": ""
      }
    }
  },
  "techStack": [
    { "label": "", "category": "" }
  ]
}
```

```json
// homepage.json — index.astro + Hero + AuthorityStatement + DarkFactoryProof + TechStackMarquee + CTASection
{
  "meta": {
    "title": "",
    "description": ""
  },
  "faq": [
    { "question": "", "answer": "" }
  ],
  "hero": {
    "sectionLabel": "",
    "h1SrOnly": "",
    "name": {
      "firstName": "",
      "lastName": ""
    },
    "positioning": "",
    "cta": {
      "primary": "",
      "secondary": ""
    },
    "stats": [
      { "value": "", "label": "" }
    ],
    "scrollIndicator": ""
  },
  "authorityStatement": {
    "sectionLabel": "",
    "leadHeadline": "",
    "body": {
      "paragraph1": "",
      "paragraph2": "",
      "paragraph3": ""
    },
    "capabilities": [
      { "title": "", "desc": "", "icon": "" }
    ]
  },
  "darkFactoryProof": {
    "sectionLabel": "",
    "operationalBadge": "",
    "heading": "",
    "description": "",
    "domains": [
      {
        "tier": "",
        "label": "",
        "agents": []
      }
    ],
    "metrics": [
      { "value": "", "label": "" }
    ],
    "workLinkLabel": ""
  },
  "techStack": {
    "sectionLabel": ""
  },
  "cta": {
    "sectionLabel": "",
    "headline": "",
    "body": "",
    "primaryButtonLabel": "",
    "secondaryButtonLabel": "",
    "card": {
      "heading": "",
      "pricing": "",
      "features": [],
      "qualifier": ""
    }
  }
}
```

```json
// about.json — about/index.astro
{
  "meta": {
    "title": "",
    "description": ""
  },
  "faq": [
    { "question": "", "answer": "" }
  ],
  "page": {
    "sectionLabel": "",
    "h1SrOnly": "",
    "displayHeading": ""
  },
  "identityCard": [
    { "label": "", "value": "" }
  ],
  "bio": {
    "paragraph1": "",
    "paragraph2": "",
    "paragraph3": "",
    "paragraph4": ""
  },
  "speaking": {
    "heading": "",
    "intro": "",
    "ctaLabel": "",
    "talks": [
      { "topic": "", "desc": "" }
    ]
  }
}
```

```json
// work.json — work/index.astro
{
  "meta": {
    "title": "",
    "description": ""
  },
  "page": {
    "sectionLabel": "",
    "displayHeading": "",
    "subtitle": ""
  },
  "projects": [
    {
      "id": "",
      "title": "",
      "category": "",
      "status": "",
      "year": "",
      "summary": "",
      "metrics": [],
      "flagship": false
    }
  ]
}
```

```json
// contact.json — contact/index.astro
{
  "meta": {
    "title": "",
    "description": ""
  },
  "page": {
    "sectionLabel": "",
    "displayHeading": "",
    "subtitle": ""
  },
  "options": [
    {
      "type": "",
      "desc": "",
      "cta": "",
      "href": "",
      "external": false,
      "primary": false,
      "badge": ""
    }
  ],
  "qualifier": {
    "heading": "",
    "items": []
  }
}
```

```json
// writing.json — writing/index.astro + writing/[slug].astro
{
  "index": {
    "meta": {
      "title": "",
      "description": ""
    },
    "page": {
      "sectionLabel": "",
      "h1SrOnly": "",
      "displayHeading": "",
      "subtitle": "",
      "readMoreLabel": ""
    }
  },
  "article": {
    "backLabel": "",
    "sidebar": {
      "dateLabel": "",
      "readTimeLabel": "",
      "categoryLabel": "",
      "ctaLabel": ""
    },
    "footer": {
      "byline": "",
      "role": "",
      "ctaLabel": ""
    }
  }
}
```

```json
// error.json — 404.astro
{
  "meta": {
    "title": "",
    "description": ""
  },
  "page": {
    "sectionLabel": "",
    "errorCode": "",
    "heading": "",
    "body": "",
    "primaryCta": "",
    "secondaryCta": ""
  },
  "quickLinks": [
    { "label": "", "href": "" }
  ]
}
```

---

## Missing Files Report

All 17 files listed in the audit scope were found and read successfully. No missing files encountered.

---

*End of audit. Total hardcoded text strings inventoried: ~165 across 14 files.*
