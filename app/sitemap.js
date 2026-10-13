import { posts } from "../data/posts";
import { SITE_URL } from "../data/site";

export const dynamic = "force-static";

export default function sitemap() {
  const latest = posts
    .map((post) => post.updated || post.date)
    .sort()
    .at(-1);
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated || post.date,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
