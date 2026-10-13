import { useEffect, useState } from 'react'

export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  // "#/post/some-slug" -> { page: 'post', slug: 'some-slug' }
  const parts = hash.replace(/^#\/?/, '').split('/')
  if (parts[0] === 'post' && parts[1]) {
    return { page: 'post', slug: parts[1] }
  }
  return { page: 'home' }
}
