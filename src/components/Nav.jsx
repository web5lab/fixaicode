function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f5f7]/70 dark:bg-black/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5">
        <a href="#/" className="flex items-center gap-2 group">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-[11px] font-bold text-white">
            f
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            fixaicode
          </span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href="#/"
            className="text-[13px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] dark:text-[#f5f5f7]/80 dark:hover:text-white transition-colors"
          >
            Blog
          </a>
          <a
            href="https://postmcp.ai"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] dark:text-[#f5f5f7]/80 dark:hover:text-white transition-colors"
          >
            PostMCP AI
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#1d1d1f]/70 hover:bg-black/5 dark:text-[#f5f5f7]/70 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}
