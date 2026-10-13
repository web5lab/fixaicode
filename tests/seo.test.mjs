// Run after `npm run build` — checks the static export in out/ for the
// SEO guarantees every article page must keep.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { posts } from "../data/posts.js";

function schemas(html) {
  return [
    ...html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/gs,
    ),
  ].map((match) => JSON.parse(match[1]));
}

for (const post of posts) {
  test(`article is readable without JavaScript and has its own metadata: ${post.slug}`, async () => {
    const html = await readFile(`out/blog/${post.slug}.html`, "utf8");
    assert.ok(html.includes(post.title));
    assert.ok(
      html.includes(
        `rel="canonical" href="https://fixaicode.org/blog/${post.slug}"`,
      ),
    );
    assert.ok(html.includes('property="og:type" content="article"'));
    assert.ok(html.includes('name="twitter:card"'));
    const blogPosting = schemas(html).find(
      (schema) => schema["@type"] === "BlogPosting",
    );
    assert.ok(blogPosting, "BlogPosting schema present");
    assert.equal(blogPosting.headline, post.title);
    assert.equal(
      blogPosting.url,
      `https://fixaicode.org/blog/${post.slug}`,
    );
    const breadcrumbs = schemas(html).find(
      (schema) => schema["@type"] === "BreadcrumbList",
    );
    assert.ok(breadcrumbs, "BreadcrumbList schema present");
  });
}

test("sitemap lists every page", async () => {
  const sitemap = await readFile("out/sitemap.xml", "utf8");
  assert.ok(sitemap.includes("<loc>https://fixaicode.org/</loc>"));
  assert.ok(sitemap.includes("<loc>https://fixaicode.org/blog</loc>"));
  for (const post of posts)
    assert.ok(
      sitemap.includes(`<loc>https://fixaicode.org/blog/${post.slug}</loc>`),
    );
});

test("robots.txt points at the sitemap", async () => {
  const robots = await readFile("out/robots.txt", "utf8");
  assert.ok(robots.includes("Allow: /"));
  assert.ok(robots.includes("Sitemap: https://fixaicode.org/sitemap.xml"));
});

test("RSS feed lists every article", async () => {
  const feed = await readFile("out/feed.xml", "utf8");
  for (const post of posts)
    assert.ok(feed.includes(`${post.slug}</link>`));
});

test("home page has WebSite schema and canonical", async () => {
  const html = await readFile("out/index.html", "utf8");
  assert.ok(html.includes('rel="canonical" href="https://fixaicode.org"'));
  assert.ok(
    schemas(html).some((schema) => schema["@type"] === "WebSite"),
    "WebSite schema present",
  );
});

test("404 page exists and is noindexed", async () => {
  const html = await readFile("out/404.html", "utf8");
  assert.ok(/noindex/.test(html));
});

test("static assets exported", async () => {
  await access("out/favicon.svg");
  await access("out/images/hero.webp");
  await access("out/fonts/geist-variable-latin.woff2");
  await access("out/manifest.webmanifest");
});
