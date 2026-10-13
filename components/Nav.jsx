"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { Logo } from "./Icon";
import { PostMcpByline } from "./PostMcpBadge";
import { useTheme } from "../hooks/useTheme";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const onBlog = pathname === "/blog" || pathname.startsWith("/blog/");
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
          <Link
            href="/"
            aria-label="fixaicode home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>
          <PostMcpByline tone="auto" className="brand-family" />
        </div>
        <div
          className={`nav-links ${open ? "is-open" : ""}`}
          id="navigation-links"
        >
          <Link
            href="/blog"
            aria-current={onBlog ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            The blog
          </Link>
          <Link href="/#method" onClick={() => setOpen(false)}>
            The method
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <Link
            className="button button-small nav-cta"
            href="/blog/how-to-fix-ai-frontend"
          >
            Start reading <Icon name="arrow" size={16} />
          </Link>
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
