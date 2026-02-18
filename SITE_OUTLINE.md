# Morlock Software — Site Outline

## Format
Single page. Static site, fast, works on mobile. No blog, no separate pages (for now).

## Structure

### 1. Hero
- **Positioning sentence**: Who I help + what problem I solve, one line.
  - Needs real thought. Something like: "I help small organisations build and maintain software they can rely on."
  - Should work for both warm visitors (confirms what they heard) and cold visitors (immediately tells them if they're in the right place)
- **One-line expansion**: A sentence or two grounding this — former Tech Lead at CEA, currently contracting with BlueDot Impact, available for new work.
- **Primary CTA**: "Book a call" (Calendly link) + "or email me" (email address)

### 2. "Is this you?" — situations where I'm useful
Written from the reader's perspective so they can self-identify. Adapted from the blurb:
- You're a small org or project without a dedicated engineer, and you need someone reliable to maintain things and handle ad-hoc feature requests
- You're building a new product and want someone who can scope features, talk to users, and make trade-offs — as well as do the engineering
- You're starting a technical project and want advice on how difficult it is, who you need to hire, or how to architect it
- Specific: You use Airtable, and want to do something with it that stretches the ability of no-code tools, such as using it as the backend for a website

### 3. Not the right fit
Brief, honest. Adapted from the blurb:
- Mobile apps
- Machine learning (training models)
- Pure design work

Purpose: saves everyone time, builds trust with the right people, helps with lead quality.

### 4. Proof — what I've done
NOT a formal portfolio. A paragraph or two describing the most relevant work, with a link to GitHub where people can verify.

Key things to mention:
- **BlueDot Impact** (contractor, past year): Built the Postgres database infrastructure the platform runs on. Migrated from Bubble to a custom course platform. ~10k MAUs. Most of the infrastructure and feature work on the codebase. Link to PRs: github.com/bluedotimpact/bluedot/pulls/Will-Howard
- **Centre for Effective Altruism** (Tech Lead, ~2 years): Cut cloud costs ~$60k/year. Built internal data infrastructure joining up disparate sources. Performance work (CDN caching, page loads under 2.4s). Features for the EA Forum and LessWrong. Link to PRs: github.com/ForumMagnum (or however the repo is structured)
- **Side project — Manifolio**: Prediction market bet-sizing tool. Shows range / quantitative thinking. Placed 3rd in an impact market competition.

Tone: factual, not boastful. "Here's what I've done, here's where you can look at the code."

[PLACEHOLDER: Testimonials section to add later as I collect them]

### 5. How it works
What to expect if you reach out. Reduces anxiety, especially for people who haven't hired a contractor before.
- **Discovery call** (free, 30 mins): We talk through what you need. I'll be honest about whether I can help and roughly what it would cost. No obligation.
- **Scoped project**: A defined piece of work with a clear deliverable. Good if you know what you need built.
- **Ongoing work**: Billed hourly on an ad-hoc basis. Good if you need someone to maintain things, build features over time, or be available for requests as they come up.

Note: No rate published yet. Will add a bracket once I've done some price discovery.

Risk reversal line: Something like "The first conversation is always just that — a conversation. If I don't think I'm the right fit, I'll tell you."

### 6. About
Short, first-person, human. Not a CV (that's linked separately).
- Who I am, where I'm based (London)
- Background: Physics degree from Oxford, ~5 years as a software engineer
- The robotics safety transition — mentioned honestly as context, not as the frame
- **Damaging admission**: I'm new to contracting. I've spent most of my career as a full-time engineer at companies — BlueDot is my first contracting engagement. But the work is the same. This gets ahead of the obvious question, builds trust with a rationalist audience, and reframes "new contractor" as "been busy getting results for people."
- A photo of me

### 7. Point of view (optional, consider adding)
Cohen's suggestion: one paragraph expressing an opinion about how software should be built, or what goes wrong at small orgs. Differentiates from commodity contractors. Gives referrers something to point to.

Possible angles:
- Something about simplicity and robustness over complexity
- Something about the failure mode of mission-driven orgs scaling engineering
- Something about when to build vs buy

This could be woven into the hero or the about section rather than being its own section.

### 8. Footer / CTA repeat
- Email: w.howard256@gmail.com
- Book a call: Calendly link
- CV: Google Drive link
- GitHub: github.com/Will-Howard

---

## Key copy to develop
1. The positioning sentence (highest leverage, spend the most time here)
2. The "is this you?" bullets (we have a good first draft from the blurb)
3. The proof paragraph(s)
4. The "how it works" descriptions
5. The about section

## Design principles
- Clean, minimal, professional without looking like you spent 3 months on it
- Fast loading, works on mobile
- Should feel like a person made it, not a brochure
- British/understated tone throughout

## Tech (TBD)
- Static site generator (Astro, Hugo, plain HTML, whatever is fastest to ship)
- Hosted on one of the three domains (morlock.software as primary)
- Other domains redirect to primary
