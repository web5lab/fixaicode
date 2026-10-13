import { useState } from "react";
import Icon, { Logo } from "./Icon";
import { PostMcpByline } from "./PostMcpBadge";
export default function Nav({ theme, onToggleTheme, page }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav
        className="site-nav"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <div className="brand-lockup">
          <a
            href="/"
            aria-label="fixaicode home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>
          <PostMcpByline tone="auto" className="brand-family" />
        </div>
        <div
          className={`nav-links ${open ? "is-open" : ""}`}
          id="navigation-links"
        >
          <a
            href="/blog"
            aria-current={
              page === "blog" || page === "post" ? "page" : undefined
            }
            onClick={() => setOpen(false)}
          >
            The blog
          </a>
          <a href="/#method" onClick={() => setOpen(false)}>
            The method
          </a>
          <a href="/#about" onClick={() => setOpen(false)}>
            About
          </a>
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <a
            className="button button-small nav-cta"
            href="/blog/how-to-fix-ai-frontend"
          >
            Start reading <Icon name="arrow" size={16} />
          </a>
          <button
            className="icon-button menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="navigation-links"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
