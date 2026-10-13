import { FOUNDER_X_URL } from "./brand";

export const SITE_URL = "https://fixaicode.org";
export const SITE_NAME = "fixaicode";
export const SITE_TITLE =
  "fixaicode — AI writes the code. You make it worth shipping.";
export const SITE_DESCRIPTION =
  "Practical guides to better AI-generated frontends. Explore design, prompting, and the details that make your code worth shipping. By Shiva, founder of PostMCP AI.";
export const TWITTER_HANDLE = "@helloshiva0801";
export const DEFAULT_OG_IMAGE = "/images/hero.webp";

// Next.js replaces (not deep-merges) `alternates` when a page overrides it,
// so every page's canonical must carry the RSS alternate along.
export function pageAlternates(canonical) {
  return {
    canonical,
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  };
}

export const AUTHOR = {
  "@type": "Person",
  name: "Shiva",
  sameAs: [FOUNDER_X_URL],
  url: `${SITE_URL}/#about`,
};

export const PUBLISHER = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.svg`,
  },
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: PUBLISHER,
  };
}

export function blogSchema(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `The ${SITE_NAME} journal`,
    url: `${SITE_URL}/blog`,
    description: SITE_DESCRIPTION,
    publisher: PUBLISHER,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      image: `${SITE_URL}${post.hero.src}`,
      author: AUTHOR,
    })),
  };
}

export function postSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: `${SITE_URL}${post.hero.src}`,
    url,
    mainEntityOfPage: url,
    keywords: post.tag,
    inLanguage: "en",
    author: AUTHOR,
    publisher: PUBLISHER,
  };
}

export function breadcrumbSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "The journal",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
}
