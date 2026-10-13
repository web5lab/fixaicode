import { notFound } from "next/navigation";
import PostArticle from "../../../components/PostArticle";
import JsonLd from "../../../components/JsonLd";
import { getPost, posts } from "../../../data/posts";
import {
  postSchema,
  breadcrumbSchema,
  pageAlternates,
} from "../../../data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.subtitle,
    alternates: pageAlternates(url),
    openGraph: {
      type: "article",
      title: `${post.title} — fixaicode`,
      description: post.subtitle,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      section: post.tag,
      authors: [post.author],
      tags: [post.tag],
      images: [
        {
          url: post.hero.src,
          width: 1536,
          height: 1024,
          alt: post.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — fixaicode`,
      description: post.subtitle,
      images: [post.hero.src],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd schema={postSchema(post)} />
      <JsonLd schema={breadcrumbSchema(post)} />
      <PostArticle slug={post.slug} />
    </>
  );
}
