import { getPost } from './posts'
export const SITE_URL = 'https://fixaicode.org'
export function getPageMetadata(route) {
  const post = route.page === 'post' ? getPost(route.slug) : null
  const notFound = route.page === 'not-found' || route.page === 'post' && !post
  const title = post ? `${post.title} — fixaicode` : notFound ? 'Page not found — fixaicode' : route.page === 'blog' ? 'The journal — fixaicode' : 'fixaicode — AI writes the code. You make it worth shipping.'
  const description = post?.subtitle || 'Practical guides to better AI-generated frontends. Explore design, prompting, and the details that make your code worth shipping. By Shiva, founder of PostMCP AI.'
  const url = `${SITE_URL}${post ? `/blog/${post.slug}` : route.page === 'blog' ? '/blog' : '/'}`
  const image = `${SITE_URL}${post?.hero.src || '/images/hero.webp'}`
  const schema = post ? { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description, datePublished: post.date, dateModified: post.updated || post.date, image, url, mainEntityOfPage: url, author: { '@type': 'Person', name: post.author, url: `${SITE_URL}/#about` }, publisher: { '@type': 'Organization', name: 'fixaicode', url: SITE_URL } } : { '@context': 'https://schema.org', '@type': 'WebSite', name: 'fixaicode', url: SITE_URL, description }
  return { title, description, url, image, schema, type: post ? 'article' : 'website', noindex: notFound }
}
