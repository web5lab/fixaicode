import { useEffect, useState } from 'react'
export function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => { setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light') }, [])
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try { localStorage.setItem('theme', next) } catch { /* Theme still works without storage. */ }
  }
  return { theme, toggle }
}
