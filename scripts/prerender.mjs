import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const { posts } = await server.ssrLoadModule("/src/data/posts.js");
  const { getPageMetadata } = await server.ssrLoadModule("/src/data/site.js");
  const { resolveRoute } = await server.ssrLoadModule("/src/hooks/useRoute.js");
  const template = await readFile("dist/index.html", "utf8");
  const paths = [
    "/",
    "/blog",
    ...posts.map((post) => `/blog/${post.slug}`),
    "/404",
  ];
  for (const path of paths) {
    const metadata = getPageMetadata(resolveRoute(path));
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root" data-route="${path}">${renderToString(createElement(App, { initialPath: path }))}</div>`,
    );
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${escape(metadata.title)}</title>`,
    );
    const values = {
      description: metadata.description,
      robots: metadata.noindex ? "noindex, follow" : "index, follow",
      "og:title": metadata.title,
      "og:description": metadata.description,
      "og:type": metadata.type,
      "og:url": metadata.url,
      "og:image": metadata.image,
    };
    for (const [key, value] of Object.entries(values))
      html = html.replace(
        new RegExp(
          `(<meta\\s+(?:name|property)="${key}"\\s+content=")[^"]*("\\s*/?>)`,
        ),
        (_, before, after) => before + escape(value) + after,
      );
    html = html.replace(
      /(<link rel="canonical" href=")[^"]*("\s*\/?>)/,
      (_, before, after) => before + escape(metadata.url) + after,
    );
    html = html.replace(
      /(<script id="structured-data" type="application\/ld\+json">).*?(<\/script>)/s,
      (_, before, after) =>
        before +
        JSON.stringify(metadata.schema).replaceAll("<", "\\u003c") +
        after,
    );
    const destination =
      path === "/404"
        ? resolve("dist/404.html")
        : resolve("dist", `.${path}`, "index.html");
    await mkdir(resolve(destination, ".."), { recursive: true });
    await writeFile(destination, html);
    // Support clean URLs on hosts that resolve .html files before directory indexes.
    if (path !== "/" && path !== "/404") {
      await writeFile(resolve("dist", `.${path}.html`), html);
    }
    console.log(`Prerendered ${path}`);
  }
  const sitemap = paths
    .filter((path) => path !== "/404")
    .map(
      (path) =>
        `<url><loc>https://fixaicode.org${path === "/" ? "/" : path}</loc></url>`,
    )
    .join("");
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>\n`,
  );
} finally {
  await server.close();
}
