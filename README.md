# Samuel Egwu — Portfolio

A single-page portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**. Statically rendered, no database, no API keys — it deploys to a free tier and stays there.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

---

## Everything you need to edit lives in one file

**[`src/content/site.ts`](src/content/site.ts)** is the single source of truth. Copy, projects, case studies, metrics, stack, contact links — all of it. You should not need to touch a component to change what the site says.

### Before you deploy

1. **Your domain** — set `site.url` so canonical URLs, the sitemap and the social card point at the real address. Until then it reads `https://samuelegwu.vercel.app`.

2. **Your CV** — drop the PDF at `public/assets/samuel-egwu-cv.pdf` and set:

   ```ts
   resume: "/assets/samuel-egwu-cv.pdf",
   ```

   That adds a Résumé button to the hero and a download row to the contact panel.

3. **A photo (optional)** — drop it at `public/assets/samuel.jpg` and set `portrait`:

   ```ts
   export const portrait = {
     src: "/assets/samuel.jpg",
     alt: "Samuel Egwu, AI/ML Engineer",
   };
   ```

   Leave it `null` and the hero and about sections render a monogram panel instead. Both look deliberate; nothing breaks either way.

4. **Your phone number** — it is currently public in `contact.phone`. Set it to `""` to hide the row if you would rather not field recruiter calls.

Contact links (email, LinkedIn, GitHub) are already filled in from your CV. Any field set to `""` is hidden from the page — no placeholder ever ships.

---

## Deploying free

**Vercel is the right call here** — it is built by the Next.js team, so App Router, image optimisation and the generated social card all work with zero configuration. The Hobby tier is free and permanent for a personal site like this.

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

Or, without the CLI: push this repo to GitHub → [vercel.com/new](https://vercel.com/new) → import the repo → **Deploy**. Vercel detects Next.js on its own; there is nothing to configure. Every later `git push` redeploys automatically.

### Alternatives, and why Vercel still wins

| Host | Free tier | Verdict |
| --- | --- | --- |
| **Vercel** | 100 GB bandwidth/mo, custom domain, auto HTTPS | **Recommended.** First-party Next.js support, no config. |
| **Netlify** | 100 GB/mo | Works well via `@netlify/plugin-nextjs`, but it's an adapter rather than native support. |
| **Cloudflare Pages** | Unlimited bandwidth | Fastest network and the most generous free tier, but Next.js needs the OpenNext adapter and the edge runtime has rough edges. |
| **GitHub Pages** | Unlimited (static only) | Only viable if you switch to `output: "export"`, which costs you the generated OG image. Not worth it. |

A custom domain is free to attach on any of them — you only pay the registrar for the domain itself (~$10–15/yr).

---

## Project layout

```
src/
  app/
    layout.tsx            fonts, metadata, ambient background layers
    page.tsx              section composition + Person JSON-LD
    globals.css           design tokens, base styles, animations
    opengraph-image.tsx   social card, generated at build time
    icon.svg              favicon
    robots.ts, sitemap.ts
  components/
    SiteHeader.tsx        sticky nav, scroll state, active section, mobile sheet
    Experience.tsx        role timeline + education, speaking and mentoring
    Hero.tsx              headline, stats, portrait, terminal card
    Ticker.tsx            capability marquee
    Work.tsx              project grid + case-study dialog
    LoopDiagram.tsx       the evaluate/observe/operate loop (inline SVG)
    Systems.tsx  Principles.tsx  About.tsx  Stack.tsx  Contact.tsx
    Portrait.tsx          photo with monogram fallback
    RevealObserver.tsx    one IntersectionObserver for all scroll reveals
    SectionHeading.tsx    shared section header
  content/
    site.ts               ← all copy and data
```

## Notes on the build

- **Static.** Every route prerenders at build time; there is no server work at request time.
- **~115 kB first load JS.** No animation library — reveals are CSS transitions driven by a single `IntersectionObserver`.
- **Accessible by default.** Case studies use a native `<dialog>` (real focus trap, Escape to close), there's a skip link, the nav exposes `aria-current`, and everything decorative is `aria-hidden`.
- **Degrades without JS.** Scroll reveals fall back to their finished state via a `<noscript>` style, so the full page is readable with scripting off — which is also how crawlers see it.
- **Respects `prefers-reduced-motion`.** All animation is disabled when the visitor asks for that.

## Changing the look

The palette and type scale are CSS custom properties in the `@theme` block at the top of [`src/app/globals.css`](src/app/globals.css). Change `--color-mint` and the accent shifts across the entire site — buttons, kickers, diagram, social card border, focus rings.
