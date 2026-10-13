# fixaicode — Next.js

The fixaicode site migrated from Vite + React to the Next.js App Router,
exported as a fully static site (`output: "export"`).

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # static export into out/
npm test        # SEO checks against the out/ export (run build first)
```

Deploy the `out/` folder to any static host (Netlify, Vercel, Cloudflare
Pages, S3). Next writes `404.html`, which Netlify and most hosts pick up
automatically.

## Structure

- `app/` — routes: `/` (home), `/blog`, `/blog/[slug]`, plus generated
  `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, and `feed.xml` (RSS).
- `components/` — UI components. Interactive ones (`Nav`, `Journal`,
  `CopyButton`, `PostArticle`) are client components; the rest render on
  the server.
- `data/posts.js` — all articles as structured data. Add a post here and it
  automatically appears in the journal, sitemap, RSS feed, and static params.
- `app/globals.css` — the design system (Tailwind v4 + custom properties).

## SEO coverage

- Per-page `<title>`, meta description, and canonical URL via the Metadata API
  (`metadataBase` + `alternates`).
- Open Graph (`og:type article` with published/modified time, section, tags)
  and Twitter cards with per-post hero images.
- JSON-LD structured data: `WebSite` (home), `Blog` (journal),
  `BlogPosting` + `BreadcrumbList` (articles).
- `sitemap.xml` with `lastmod` from each post's `updated` date, `robots.txt`,
  RSS feed advertised via `<link rel="alternate">` on every page.
- Noindexed 404, web app manifest, theme-color for light/dark,
  preloaded self-hosted fonts, no-flash dark mode script, and legacy
  `#/post/<slug>` URLs redirected to `/blog/<slug>`.
