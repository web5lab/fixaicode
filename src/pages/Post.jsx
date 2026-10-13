import { useEffect, useRef, useState } from 'react'
import { getPost, posts } from '../data/posts'
import Icon from '../components/Icon'
import CopyButton from '../components/CopyButton'
import PostCard, { PostMeta } from '../components/PostCard'

function headingId(text) { return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-') }
function Block({ block }) {
  switch (block.type) {
    case 'h2': return <h2 id={headingId(block.text)}>{block.text}</h2>
    case 'p': return <p>{block.text}</p>
    case 'list': return <ul>{block.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    case 'code': return <div className="code-block"><div className="code-header"><span>{block.lang || 'text'}</span><CopyButton text={block.text} label="Copy code" /></div><pre><code>{block.text}</code></pre></div>
    case 'callout': return <aside className={`article-callout ${block.tone === 'good' ? 'callout-good' : 'callout-note'}`}><span className="callout-label"><Icon name={block.tone === 'good' ? 'check' : 'compass'} size={16} />{block.label}</span><p>{block.text}</p></aside>
    case 'image': return <figure className="inline-figure"><img src={block.src} alt={block.alt} width="1536" height="1024" loading="lazy" /><figcaption>{block.caption}</figcaption></figure>
    default: return null
  }
}
export function NotFound() {
  return <main id="main" className="not-found container"><span className="eyebrow">A SMALL DETOUR</span><h1>This page hasn’t<br />been built.</h1><p>Find your next idea in the journal.</p><a href="/blog" className="button">Back to the articles <Icon name="arrow" size={18} /></a></main>
}
export default function Post({ slug }) {
  const post = getPost(slug)
  const articleRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    if (!post || !articleRef.current) return
    const article = articleRef.current
    let queued = false
    function measure() {
      const start = article.offsetTop - 150
      const length = article.offsetHeight - window.innerHeight + 150
      setProgress(Math.max(0, Math.min(100, ((window.scrollY - start) / Math.max(1, length)) * 100)))
      const headings = [...article.querySelectorAll('h2[id]')]
      const current = headings.filter(heading => heading.getBoundingClientRect().top < 200).at(-1)
      setActiveSection(current?.id || headings[0]?.id || '')
      queued = false
    }
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(measure) } }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [post])
  if (!post) return <NotFound />
  const sections = post.content.filter(block => block.type === 'h2')
  return <main id="main" className="post-page">
    <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
    <header className="article-header container"><a className="back-link" href="/blog"><Icon name="back" size={16} />Back to the journal</a><div className="post-category"><span className="tiny-dot" />{post.tag}<span className="meta-dot">/</span>THE FIXAICODE FIELD GUIDE</div><h1>{post.title}</h1><p className="article-deck">{post.subtitle}</p><div className="article-byline"><PostMeta post={post} /><CopyButton text={`https://fixaicode.org/blog/${post.slug}`} label="Copy article link" /></div></header>
    <figure className="article-cover container"><img src={post.hero.src} srcSet={post.hero.srcSet} sizes="(max-width: 1200px) 100vw, 1180px" alt={post.hero.alt} width="1536" height="1024" fetchPriority="high" /><figcaption>THE FIXAICODE JOURNAL <span>Ideas to put into practice.</span></figcaption></figure>
    <div className="article-layout container">
      <aside className="article-sidebar"><nav aria-label="Table of contents"><span className="eyebrow">IN THIS ARTICLE</span>{sections.map((section, index) => <a key={section.text} href={`#${headingId(section.text)}`} className={activeSection === headingId(section.text) ? 'active' : ''} aria-current={activeSection === headingId(section.text) ? 'location' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{section.text.replace(/^\d+\.\s*/, '')}</a>)}</nav><div className="sidebar-note"><Icon name="sparkle" size={20} /><p>Small improvements.<br />Better things shipped.</p><span>FIXAICODE.ORG</span></div></aside>
      <article className="article-body" ref={articleRef}><div className="article-summary"><span className="eyebrow">THE SHORT VERSION</span><p>{post.takeaway}</p></div>{post.content.map((block, index) => <Block block={block} key={index} />)}<div className="article-end"><Icon name="code" size={23} /><span>Now, make something worth shipping.</span></div><div className="author-card"><span className="author-avatar">S</span><div><span className="eyebrow">WRITTEN BY</span><h3>{post.author}</h3><p>{post.authorRole}. Sharing practical ways to build more thoughtful products with AI.</p><a href="/#about" className="text-link">More about fixaicode <Icon name="arrow" size={16} /></a></div></div></article>
    </div>
    <section className="related-section container"><div className="section-heading"><div><span className="eyebrow">KEEP THE IDEAS GOING</span><h2>Your next good read.</h2></div><a href="/blog" className="text-link">All articles <Icon name="arrow" size={17} /></a></div><div className="posts-grid">{posts.filter(item => item.slug !== slug).slice(0, 2).map(item => <PostCard post={item} key={item.slug} />)}</div></section>
  </main>
}
