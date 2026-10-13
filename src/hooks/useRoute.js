import { useEffect, useState } from 'react'
export function resolveRoute(path) {
  const normalized = path.replace(/\/$/, '') || '/'
  if (normalized === '/') return { page: 'home' }
  if (normalized === '/blog') return { page: 'blog' }
  if (normalized.startsWith('/blog/')) return { page: 'post', slug: normalized.slice(6) }
  return { page: 'not-found' }
}
export function useRoute(initialPath = '/') {
  const [path, setPath] = useState(() => typeof window === 'undefined' ? initialPath : window.location.pathname)
  useEffect(() => {
    const legacy = window.location.hash.match(/^#\/post\/(.+)$/)
    if (legacy || window.location.hash === '#/') {
      const destination = legacy ? `/blog/${legacy[1]}` : '/'
      window.history.replaceState(null, '', destination)
      setPath(destination)
    }
    const update = () => {
      setPath(window.location.pathname)
      if (window.location.hash) {
        requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView())
      } else window.scrollTo({ top: 0, behavior: 'instant' })
    }
    const onClick = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target || anchor.hasAttribute('download')) return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin || (!['/', '/blog'].includes(url.pathname) && !url.pathname.startsWith('/blog/'))) return
      if (url.pathname === window.location.pathname && url.hash) return
      event.preventDefault()
      window.history.pushState(null, '', url.pathname + url.hash)
      update()
    }
    window.addEventListener('popstate', update)
    document.addEventListener('click', onClick)
    return () => { window.removeEventListener('popstate', update); document.removeEventListener('click', onClick) }
  }, [])
  return resolveRoute(path)
}
