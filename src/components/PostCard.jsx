import Icon from './Icon'
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
export function PostMeta({ post }) {
  return <div className="post-meta"><span className="author-avatar">S</span><span>Shiva</span><span className="meta-dot">·</span><time dateTime={post.date}>{formatDate(post.date)}</time><span className="meta-dot">·</span><span>{post.readTime}</span></div>
}
export default function PostCard({ post, featured = false }) {
  return <article className={`post-card ${featured ? 'featured-card' : ''}`}>
    <a href={`/blog/${post.slug}`} className="post-card-image" tabIndex={-1} aria-hidden="true"><img src={post.hero.src} srcSet={post.hero.srcSet} sizes={featured ? '(max-width: 760px) 100vw, 650px' : '(max-width: 760px) 100vw, 580px'} alt={post.hero.alt} width="1536" height="1024" loading="lazy" /><span className="image-arrow"><Icon name="diagonal" /></span>{featured && <span className="featured-badge"><Icon name="sparkle" size={13} /> THE ESSENTIAL READ</span>}</a>
    <div className="post-card-copy"><div className="post-category"><span className="tiny-dot" />{post.tag}{featured && <span className="featured-label">START HERE</span>}</div><h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3><p>{post.subtitle}</p><PostMeta post={post} />{featured && <a href={`/blog/${post.slug}`} className="text-link">Read the guide <Icon name="arrow" size={17} /></a>}</div>
  </article>
}
