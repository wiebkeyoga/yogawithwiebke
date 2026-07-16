# Yoga with Wiebke — Project Roadmap & Ideas

A redesign of [yogawithwiebke.com](https://yogawithwiebke.com/) for my aunt Wiebke.
Goal: keep her existing content and gentle "vibe", modernise the design, and host
on **Firebase**.

> **Decision (Wiebke, June 2026): keep it a static site.** No interactive
> feedback submission (she'll curate written feedback herself, sentences not
> stars) and no signup counters. She'd like to try making content edits herself;
> Dirk may help with hosting. Static = plain HTML/CSS/JS, works on any host.

> We're building this **step by step** so decisions can be made along the way.
> This file is the running list of agreed scope + future ideas. Nothing here is
> committed until we pick it up as a step.

---

## Brand / vibe (to preserve)
- **Tone:** calm, reflective, seasonal, inclusive, friendly.
- **Tagline:** "Exploring Movement and Breath".
- **Palette (from her own photos):** sage/olive green, warm sand & stone, muted
  sky blue, soft cream. Pastel, natural, serene.
- **Imagery:** her coastal sunset photo, floating-candle-on-stone, nature/seasonal.
- **Typography feel:** soft, airy, generous whitespace, readable.

## Existing pages (content already extracted into `old-site/`)
- Home / Welcome — hero + intro
- About me (qualifications list)
- Teaching Objectives
- 1:1 Teaching (£40/hr)
- Online and In-Person Classes (seasonal intro + class overview)
- Class detail pages: Monday (online, £7), Tuesday (beginners course, £72),
  Wednesday (in-person home studio, £12 drop-in)
- Going Deeper (quarterly £25 workshops)
- Contact (email: wiebkeyoga@gmail.com)

---

## Phase 0 — Foundations
- [ ] Decide tech stack (static + Firebase, or a framework). *In discussion.*
- [ ] Set up Firebase project (Hosting + Firestore).
- [ ] Establish design system (colours, fonts, components) from her vibe.

## Phase 1 — Static rebuild (content parity, fresh look)
- [x] Rebuild all existing pages as a single scrolling homepage, reusing her
      words and images. **All page content migrated** (About + full
      qualifications, Objectives, full seasonal essay, Monday/Tuesday/Wednesday
      class details, Going Deeper incl. Ranju Roy/Dave Charlton + book, 1:1, Contact).
- [x] Responsive / mobile-first.
- [x] Basic SEO + favicon + her own photos optimised (resized from 3–5 MB originals).
- [x] Term-dates schedule transcribed from her image into a real HTML table.
- [ ] Deploy to Firebase Hosting.

**Content note — one image deliberately omitted:** the mountain watercolour on her
old Contact page is credited to *heartfulness magazine* (third party). Left out to
avoid a copyright issue — replace with one of her own photos if she wants an image there.

## Phase 2+ — Dynamic features (future, prioritised together)
These were brainstormed up front — **not all needed yet**, listed so we don't
lose them. We'll pull them in one at a time.

### ~~User reviews / testimonials~~ → static "Kind words" section (decided June 2026)
- Wiebke doesn't want interactive submission — she'll collect feedback herself
  and we publish it as static text (sentence form, no star ratings).
- [x] Placeholder "Kind words" section added to the draft — Wiebke to supply
      the real quotes.
- ~~Store in Firestore; moderation; reCAPTCHA~~ — not needed.

### Contact / booking form
- Form so people can enquire or request a class booking without opening email.
- Sends Wiebke an email notification (Firebase + email extension or function).
- Could pre-select which class/day they're interested in.

### Class schedule (dynamic)
- Editable schedule of classes & dates (replaces the static "Yoga Dates" image).
- Wiebke can update times, dates, availability ("course full") herself.
- ~~Could show term dates, costs, "spaces left"~~ — **no signup counts**
  (decided June 2026); plain term dates + costs only.

### Admin / edit access
- Simple login for Wiebke to: approve reviews, edit schedule, edit page text.
- Firebase Auth (single admin user to start).

## Nice-to-have / parking lot
- [ ] Newsletter / seasonal mailing list signup.
- [ ] Online payment for courses/drop-ins (Stripe).
- [ ] Blog / seasonal reflections (she already writes beautifully).
- [ ] Photo gallery.
- [ ] Multi-language (she's German — possible DE/EN toggle).
- [ ] Calendar integration / .ics for class dates.
- [ ] Analytics (privacy-friendly).

---

## Open questions for Wiebke / decisions to make
- [ ] Confirm we can reuse all current photos (she owns them?). The contact page
      credits one image to *heartfulness magazine* — check licensing before reuse.
- [ ] Domain: keep `yogawithwiebke.com` and point it at Firebase?
- [ ] Does she want to self-manage content, or is occasional dev help fine?
- [ ] Which dynamic feature matters most to her first?

## Notes
- Original site mirrored into `old-site/` (WordPress.com export via wget) as the
  content/reference source. Do not deploy that folder.
