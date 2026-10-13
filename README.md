# fixaicode

An independent journal about improving AI-generated frontends, prepared for **https://fixaicode.org**. Built with React 19 and Vite.

## Develop

```sh
npm install
npm run dev
```

The default is light mode. Readers can switch themes; their choice is remembered locally. No account or service is required.

## Production

```sh
npm run lint
npm run build
npm test
npm run preview
```

Deploy the generated `dist/` directory to a static host. The build renders the homepage, journal, and every article into HTML, with unique titles, descriptions, canonical URLs, Open Graph tags, and structured data. It also generates a sitemap and a 404 page. Each article is available as both a directory index and an HTML file for hosts that resolve clean URLs differently. Configure your host to serve existing files and the generated `404.html` for unknown paths; a Netlify-compatible `_redirects` file is included.

The domain is configured in metadata. This repository change does not configure DNS or publish the website.

## Content and design

- `src/data/posts.js`: article content, topics, publication dates, images; reading times are calculated from content.
- `src/data/site.js`: site URL and metadata.
- `src/index.css`: shared color, type, layout, responsive, and dark-mode styles.
- `src/components/Journal.jsx`: accessible topic filters and text search.
- `src/pages/Post.jsx`: table of contents, reading progress, code copying, author details, and related articles.

The existing `/#/post/slug` links continue to resolve to clean `/blog/slug` URLs.

## Original artwork

Four original images were generated with the built-in imagegen tool. The final 1536px and 768px WebP versions live in `public/images/`; every delivered file is under 80 KB. Exact prompts are recorded in `public/images/GENERATION.md`. The images and self-hosted fonts require no external network calls at runtime. Font licenses are included in `public/fonts/`.

`npm run images:prepare` is an optional source-image conversion command. It uses the local original paths in `scripts/generated-images.json`; update those paths if moving the original PNGs to another machine. Normal development and production builds use the checked-in WebP assets and do not require the originals.

## Verification

`npm test` checks the generated article HTML, metadata, sitemap, 404 behavior, article links, and responsive image files. Build first. Interactive checks also cover search, topic filters, mobile navigation, theme persistence, table-of-contents links, and copy controls.
