import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post, { NotFound } from './pages/Post'
import { useTheme } from './hooks/useTheme'
import { useRoute } from './hooks/useRoute'
import { getPageMetadata } from './data/site'

function App({ initialPath = '/' }) {
  const { theme, toggle } = useTheme()
  const route = useRoute(initialPath)
  const metadata = getPageMetadata(route)
  useEffect(() => {
    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', metadata.url)
    for (const [key, value] of Object.entries({ 'og:title': metadata.title, 'og:description': metadata.description, 'og:url': metadata.url, 'og:image': metadata.image, 'og:type': metadata.type })) document.querySelector(`meta[property="${key}"]`)?.setAttribute('content', value)
    document.querySelector('meta[name="robots"]')?.setAttribute('content', metadata.noindex ? 'noindex, follow' : 'index, follow')
    const structuredData = document.getElementById('structured-data')
    if (structuredData) structuredData.textContent = JSON.stringify(metadata.schema)
  }, [metadata.title, metadata.description, metadata.url, metadata.image, metadata.type, metadata.noindex, metadata.schema])
  return <div className="app-shell"><a href="#main" className="skip-link">Skip to content</a><Nav theme={theme} onToggleTheme={toggle} page={route.page} />{route.page === 'post' ? <Post slug={route.slug} key={route.slug} /> : route.page === 'blog' ? <Blog /> : route.page === 'home' ? <Home /> : <NotFound />}<Footer /></div>
}
export default App
