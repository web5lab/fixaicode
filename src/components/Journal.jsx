import { useState } from 'react'
import { posts } from '../data/posts'
import Icon from './Icon'
import PostCard from './PostCard'
const categories = ['All articles', ...new Set(posts.map(post => post.tag))]
export default function Journal({ full = false }) {
  const [category, setCategory] = useState('All articles')
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post => (category === 'All articles' || category === post.tag) && `${post.title} ${post.subtitle} ${post.tag}`.toLowerCase().includes(query.trim().toLowerCase()))
  const unfiltered = category === 'All articles' && !query.trim()
  return <section className={`journal-section container ${full ? 'journal-full' : ''}`} id="articles" aria-label={full ? 'Articles' : undefined} aria-labelledby={full ? undefined : 'journal-heading'}>
    {!full && <div className="section-heading"><div><span className="eyebrow">THE JOURNAL</span><h2 id="journal-heading">A better way to build.</h2></div><p>Practical ideas. Thoughtful details.<br />A little less “make it pop.”</p></div>}
    <div className="journal-toolbar"><div className="filter-chips" role="group" aria-label="Filter articles by topic">{categories.map(item => <button key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}{item === 'All articles' && <span>{posts.length.toString().padStart(2, '0')}</span>}</button>)}</div><label className="search-box"><Icon name="search" size={17} /><span className="sr-only">Search articles</span><input type="search" placeholder="Search articles..." value={query} onChange={event => setQuery(event.target.value)} />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={15} /></button>}</label></div>
    <span className="sr-only" role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'} found</span>
    {filtered.length ? <div className={`posts-grid ${unfiltered ? 'with-featured' : ''}`}>{filtered.map((post, index) => <PostCard post={post} featured={unfiltered && index === 0} key={post.slug} />)}</div> : <div className="empty-state"><Icon name="search" size={30} /><h3>No articles found</h3><p>Try a different phrase or browse all topics.</p><button className="button button-outline" onClick={() => { setCategory('All articles'); setQuery('') }}>Show all articles <Icon name="arrow" size={17} /></button></div>}
    {!full && <div className="journal-bottom"><span>Written from experience. Made to put into practice.</span><a href="/blog" className="text-link">Explore the journal <Icon name="arrow" size={17} /></a></div>}
  </section>
}
