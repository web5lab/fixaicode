import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { posts } from "../src/data/posts.js";

for (const post of posts) {
  test(`article is readable without JavaScript and has its own metadata: ${post.slug}`, async () => {
    const html = await readFile(`dist/blog/${post.slug}/index.html`, "utf8");
    assert.ok(html.includes(post.title));
    assert.ok(
      html.includes(
        post.content[0].text
          .replaceAll("&", "&amp;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#x27;"),
      ),
    );
    assert.ok(
      html.includes(
        `rel="canonical" href="https://fixaicode.org/blog/${post.slug}"`,
      ),
    );
    const schema = JSON.parse(
      html.match(
        /<script id="structured-data" type="application\/ld\+json">(.*?)<\/script>/s,
      )[1],
    );
    assert.equal(schema["@type"], "BlogPosting");
    assert.equal(schema.headline, post.title);
    assert.equal(schema.url, `https://fixaicode.org/blog/${post.slug}`);
    assert.equal(await readFile(`dist/blog/${post.slug}.html`, "utf8"), html);
    assert.match(html, /property="og:type"\s+content="article"/);
    assert.ok(
      html.includes(
        `content="${post.subtitle.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"`,
      ),
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    for (const match of html.matchAll(
      /(?:src|href)="(\/(?:images|fonts|assets)\/[^"?#]+)"/g,
    ))
      await access(`dist${match[1]}`);
  });
}

test("sitemap includes every published route", async () => {
  const xml = await readFile("dist/sitemap.xml", "utf8");
  assert.equal((xml.match(/<url>/g) || []).length, posts.length + 2);
  for (const post of posts)
    assert.ok(xml.includes(`https://fixaicode.org/blog/${post.slug}`));
  assert.ok(!xml.includes("/404"));
});

test("unknown pages have a real non-indexable fallback", async () => {
  const html = await readFile("dist/404.html", "utf8");
  assert.ok(html.includes('name="robots" content="noindex, follow"'));
  assert.ok(html.includes("This page hasn"));
});

test("home and journal contain readable content and all article links", async () => {
  for (const file of ["dist/index.html", "dist/blog/index.html"]) {
    const html = await readFile(file, "utf8");
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    for (const post of posts)
      assert.ok(html.includes(`href="/blog/${post.slug}"`));
  }
});

test("all illustrations have real responsive WebP assets", async () => {
  for (const name of [
    "hero",
    "frontend-craft",
    "prompt-direction",
    "design-system",
  ]) {
    for (const suffix of ["", "-768"]) {
      const file = await readFile(`public/images/${name}${suffix}.webp`);
      assert.equal(file.toString("utf8", 8, 12), "WEBP");
      assert.ok(
        file.byteLength < 400_000,
        "Images should stay within the page performance budget",
      );
    }
  }
});
