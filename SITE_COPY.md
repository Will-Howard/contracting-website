# Morlock Software — Site Copy (Draft 4)

Notes on layout are in [square brackets].


---

## Hero

[Large heading, centered or left-aligned. CTA buttons directly below. This is the first thing anyone sees — should take up most of the viewport on desktop.]

# Software engineering for small teams

[Photo: small circular headshot to the right of or below the heading. Makes it personal immediately — the visitor is often confirming "this is the person someone told me about." On mobile, photo above the text.]

I'm Will Howard, a software engineer based in London. I build software for small organisations and startups — and my goal is always to build the simplest thing that solves the problem, so you can maintain it without me.

[Two buttons side by side, email first:]
- Email me → w.howard256@gmail.com
- Book a call → (Calendly link)


---

## I might be able to help if...

[Grid or stacked cards on mobile. Each item is a short paragraph, not just a bullet. Light background or cards to visually separate from hero.]

**You don't have an engineer**
You're a small org or project without a dedicated technical person. Things keep coming up — a feature request, something broke, a vendor integration — and you need someone to handle it.

**You're building something new**
You want to build a web app or platform and need someone who can own the whole thing: scoping, architecture, talking to users, shipping, and iterating. Not just writing code to a spec.

**You want advice**
You're starting a technical project and want a second opinion on how hard it is, what stack to use, whether to build or buy, or who you need to hire.

**You use Airtable and it's starting to creak**
You've built something on Airtable that's outgrowing what no-code tools can handle — maybe you want it to power a website, or you need it to talk to other systems. I built BlueDot Impact's platform on top of Airtable, including a sync service to Postgres so the website could handle real traffic.

[Inline CTA after the cards:]
Any of that sound familiar? Drop me an email at w.howard256@gmail.com or [book a call](calendly link).


---

## Probably not the right fit for

[Smaller text, maybe a single line with items separated by dots or pipes. Visually de-emphasised compared to the section above.]

Mobile apps  ·  Machine learning / training models  ·  I can design things in a pinch but I'm not aiming to be a design studio


---

## What I've done

[No formal portfolio grid. Just prose with links. Maybe a subtle left border or accent to set it apart.]

**BlueDot Impact** — contractor, past year
BlueDot runs courses on AI safety and is one of the key pipelines for people transitioning into AI safety. When I joined, the platform was running on Bubble and reading directly from Airtable as its database — which meant the site was slow, unreliable, and every new feature required working around Airtable's limitations rather than just writing normal database queries. I built a sync service that replicates their data to Postgres, and helped migrate the platform off Bubble onto their own website. It now serves around 10,000 monthly active users.

More broadly, I've been doing much of the infrastructure and feature work on the codebase over the past year. If you want to see what my work looks like, here are a few pull requests:
- [The database sync service](https://github.com/bluedotimpact/bluedot/pull/872) — the Airtable-to-Postgres replication I mentioned above, about 15,000 lines across 110 files
- [Admin user impersonation](https://github.com/bluedotimpact/bluedot/pull/1719) — staff previously couldn't see the platform from a user's perspective, which made it slow to debug issues. This lets any admin view the site as any user
- [Facilitators view participant responses](https://github.com/bluedotimpact/bluedot/pull/2001) — course facilitators needed to see what participants had written in exercises, which meant reworking how those components display depending on who's viewing them

**Centre for Effective Altruism** — Tech Lead, ~2 years
I was Tech Lead on the EA Forum (and the shared codebase with LessWrong). Cut cloud costs by about $60k/year by right-sizing our Kubernetes cluster and cleaning up how we used cloud resources. Built out internal data infrastructure, joining up analytics, CRM, and programme data so the growth team could actually see what was going on across different programmes. Performance work included setting up CDN caching and optimising how pages load — got page loads under 2.4 seconds, down from around 4.

<!-- PLACEHOLDER: Testimonials to add here as I collect them -->


---

## About me

[No separate photo here since it's in the hero. Just text.]

I studied physics at Oxford, then spent about five years as a software engineer before going independent. I'm contracting while I transition into robotics safety research — currently available for new work alongside BlueDot.

On the side, I built [Manifolio](https://github.com/Will-Howard/manifolio), a tool for calculating Kelly-optimal bet sizes on prediction markets, which received a grant from [Scott Alexander](https://www.astralcodexten.com/p/impact-market-mini-grants-results).


---

## Get in touch

[Final CTA section. Centered, slightly larger text. Email first.]

If you've got a project in mind, or even just a vague sense that you need some technical help, I'd be happy to talk it through. The first conversation is always free and there's no commitment — I'll tell you honestly whether I think I can help, and if I can't I'll try to point you in the right direction. If I think you don't need to hire an engineer at all and should just use a spreadsheet, I'll tell you that too.

Work typically takes one of two shapes: a scoped project with a clear deliverable, or ongoing hourly work where I pick up tasks as they come up. Happy to discuss rate on a call.

- Email me → w.howard256@gmail.com
- Book a call → (Calendly link)


---

## Footer

[Minimal. Not a big footer with columns — just a single line or two.]

Morlock Software · Will Howard
[CV](link) · [GitHub](https://github.com/Will-Howard) · [LinkedIn](https://linkedin.com/in/will-howard-011650a9)


---

# Layout notes

## Navigation

[Sticky minimal nav bar at top. Just:]
- "Morlock Software" (left, links to top of page)
- Anchor links: Work · About · Get in touch (right)
- On mobile: hamburger or just skip the nav entirely — the page is short enough to scroll.

## Page flow and visual rhythm

The page alternates between "content" sections and "emphasis" sections:

1. **Hero** — white/light background, large text, photo, CTA buttons
2. **"I might be able to help if..."** — slightly different background (light grey or subtle cards) to visually separate. Inline CTA at the bottom.
3. **"Not the right fit"** — same background as hero, small text, acts as a visual breath
4. **"What I've done"** — back to the offset background, this is the meatiest section
5. **"About me"** — white/light background, personal
6. **"Get in touch"** — offset background, centered, prominent CTA
7. **Footer** — minimal, dark or same as page

**Overall feel:** Clean, lots of whitespace, one column. Think personal site that happens to offer services, not a marketing landing page. No stock photos, no gradients, no "trusted by" logos bar.

**Typography:** One serif or clean sans-serif font. Body text should be comfortable to read — 18-20px, ~60-70 characters per line.

**Colour:** Minimal. One accent colour for links and buttons, otherwise black/white/grey. The name "Morlock" has a slightly industrial/underground connotation — could lean into that with a dark mode option or a darker palette, but don't overthink it.

**Mobile:** Everything stacks. The hero CTA buttons should be full-width on mobile. The "not the right fit" line wraps naturally.

**Key references for visual style:**
- jonathanstark.com — bold positioning statement, minimal navigation, direct
- philipmorganconsulting.com — clean single-page, lots of prose, personal voice
- The kind of personal site a thoughtful engineer would build for themselves — not a template, not overdesigned
