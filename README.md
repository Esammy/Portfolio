# Samuel Egwu — Portfolio

Personal portfolio site. Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4. Statically rendered — no database, no API keys, no server work at request time.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Content

All copy and data live in [`src/content/site.ts`](src/content/site.ts) — profile, contact links, projects and case studies, experience, stack. Components read from it; changing what the site says should not require touching a component.

Two values to set before going live:

- `site.url` — the production domain. Drives canonical URLs, the sitemap and the social card.
- `contact.resume` — set to `/assets/samuel-egwu-cv.pdf` once the file is in `public/assets/`.

Any contact field left as an empty string is omitted from the page.

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, ambient background layers
    page.tsx              section composition, Person JSON-LD
    globals.css           design tokens, base styles, animations
    opengraph-image.tsx   social card, generated at build time
    icon.svg, robots.ts, sitemap.ts
  components/
    SiteHeader.tsx        sticky nav, scroll state, active section, mobile sheet
    Hero.tsx              headline, stats, portrait, terminal card
    Ticker.tsx            capability marquee
    Work.tsx              project grid and case-study dialog
    LoopDiagram.tsx       evaluate / observe / operate loop (inline SVG)
    Systems.tsx  Principles.tsx  About.tsx  Stack.tsx  Contact.tsx
    Experience.tsx        role timeline, education, speaking, mentoring
    Portrait.tsx          photo with monogram fallback
    RevealObserver.tsx    one IntersectionObserver for all scroll reveals
    SectionHeading.tsx    shared section header
  content/
    site.ts
```

## Assets

`public/assets/samuel.jpg` (1024², 142 kB) drives the hero and about sections. `samuel-og.jpg` is a pre-graded duotone used only by the social card, since Satori does not support CSS filters. After replacing the portrait, regenerate it:

```bash
node -e "require('sharp')('public/assets/samuel.jpg').resize(430,630,{fit:'cover',position:'top'}).modulate({saturation:0.42,brightness:0.86}).tint('#a8d8c0').jpeg({quality:82,mozjpeg:true}).toFile('public/assets/samuel-og.jpg')"
```

Setting `portrait` to `null` in `site.ts` falls both sections back to a monogram panel.

## Implementation notes

- Every route prerenders at build time. ~115 kB first-load JS.
- No animation library — scroll reveals are CSS transitions driven by a single `IntersectionObserver`, with a `<noscript>` fallback to the finished state.
- Case studies use a native `<dialog>`, so focus trapping and Escape-to-close come from the platform.
- All motion is disabled under `prefers-reduced-motion`.
- The palette is CSS custom properties in the `@theme` block of [`globals.css`](src/app/globals.css). Changing `--color-mint` shifts the accent across the whole site, including the generated social card.
