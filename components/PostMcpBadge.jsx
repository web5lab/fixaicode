// "by PostMCP AI" — the family mark every product carries. It links to the
// umbrella page listing all of them. Self-contained (own styles, inline SVG,
// no Tailwind or icon library) so the same file drops into every product;
// keep the copies identical — the source lives in post-mcp-ai's /products page.
//
//   <PostMcpByline />                   "by PostMCP AI" line set under a wordmark,
//                                       so it reads as part of the product's logo
//   <PostMcpBadge />                    standalone pill (text hides on phones)
//   <PostMcpLoginNote />                one quiet line under a sign-in card
//   <PostMcpSidebarCard />              card for the bottom of a dashboard sidebar
//
// tone: 'light' | 'dark' | 'auto' (auto follows a `.dark` class or data-theme="dark"
// on an ancestor, so it tracks the product's own theme toggle).

export const POSTMCP_PRODUCTS_URL = 'https://www.postmcpai.com/products';
const PRODUCT_COUNT = 18;

const CSS = `
.pmb,.pmb-by,.pmb-note,.pmb-card{font-family:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent}
.pmb-tile{display:grid;place-items:center;flex-shrink:0;width:20px;height:20px;border-radius:6px;background:#3d5aef}
.pmb-tile svg{display:block;width:70%;height:70%}
.pmb-arr{display:block;flex-shrink:0;width:10px;height:10px;opacity:.45}
.pmb{display:inline-flex;align-items:center;gap:7px;flex-shrink:0;height:28px;padding:0 11px 0 4px;border-radius:999px;border:1px solid rgba(18,19,22,.12);background:#fff;color:#121316;font-size:12px;font-weight:600;line-height:1;letter-spacing:.005em;white-space:nowrap;transition:border-color .2s,transform .2s}
.pmb:hover{border-color:#3d5aef;transform:translateY(-1px)}
.pmb[data-tone=dark],.dark .pmb[data-tone=auto],[data-theme=dark] .pmb[data-tone=auto]{background:#1d1f25;border-color:rgba(255,255,255,.14);color:#fff}
.pmb[data-tone=dark]:hover,.dark .pmb[data-tone=auto]:hover,[data-theme=dark] .pmb[data-tone=auto]:hover{border-color:#8ea2ff}
@media (max-width:640px){.pmb[data-compact=sm]{gap:0;padding-right:3px}.pmb[data-compact=sm] .pmb-txt,.pmb[data-compact=sm] .pmb-arr{display:none}}
.pmb-by{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:500;line-height:1;letter-spacing:.01em;white-space:nowrap;color:rgba(18,19,22,.5);transition:color .2s}
.pmb-by b{font-weight:700;color:rgba(18,19,22,.78);transition:color .2s}
.pmb-by .pmb-tile{width:12px;height:12px;border-radius:3.5px}
.pmb-by:hover,.pmb-by:hover b{color:#3d5aef}
.pmb-by[data-tone=dark],.dark .pmb-by[data-tone=auto],[data-theme=dark] .pmb-by[data-tone=auto]{color:rgba(255,255,255,.55)}
.pmb-by[data-tone=dark] b,.dark .pmb-by[data-tone=auto] b,[data-theme=dark] .pmb-by[data-tone=auto] b{color:rgba(255,255,255,.88)}
.pmb-by[data-tone=dark]:hover,.pmb-by[data-tone=dark]:hover b,.dark .pmb-by[data-tone=auto]:hover,.dark .pmb-by[data-tone=auto]:hover b,[data-theme=dark] .pmb-by[data-tone=auto]:hover,[data-theme=dark] .pmb-by[data-tone=auto]:hover b{color:#8ea2ff}
.pmb-note{display:inline-flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:6px;font-size:12.5px;line-height:1.4;color:rgba(18,19,22,.62)}
.pmb-note .pmb-tile{width:18px;height:18px;border-radius:5px;margin-right:2px}
.pmb-note b{color:#121316;font-weight:600}
.pmb-note u{text-decoration:none;color:#3d5aef;font-weight:600}
.pmb-note:hover u{text-decoration:underline}
.pmb-note[data-tone=dark],.dark .pmb-note[data-tone=auto],[data-theme=dark] .pmb-note[data-tone=auto]{color:rgba(255,255,255,.6)}
.pmb-note[data-tone=dark] b,.dark .pmb-note[data-tone=auto] b,[data-theme=dark] .pmb-note[data-tone=auto] b{color:#fff}
.pmb-note[data-tone=dark] u,.dark .pmb-note[data-tone=auto] u,[data-theme=dark] .pmb-note[data-tone=auto] u{color:#8ea2ff}
.pmb-card{display:flex;align-items:center;gap:10px;padding:10px;border-radius:12px;border:1px solid rgba(18,19,22,.1);background:#fff;color:#121316;transition:border-color .2s}
.pmb-card:hover{border-color:#3d5aef}
.pmb-card .pmb-tile{width:30px;height:30px;border-radius:9px}
.pmb-card-txt{display:flex;flex-direction:column;gap:2px;min-width:0;font-size:12.5px;font-weight:600;line-height:1.2}
.pmb-card-txt small{font-size:11.5px;font-weight:400;opacity:.65}
.pmb-card .pmb-arr{margin-left:auto}
.pmb-card[data-tone=dark],.dark .pmb-card[data-tone=auto],[data-theme=dark] .pmb-card[data-tone=auto]{background:#1d1f25;border-color:rgba(255,255,255,.1);color:#fff}
.pmb-card[data-tone=dark]:hover,.dark .pmb-card[data-tone=auto]:hover,[data-theme=dark] .pmb-card[data-tone=auto]:hover{border-color:#8ea2ff}
.pmb-card[data-collapsed=true]{justify-content:center;padding:6px;border-color:transparent;background:transparent}
.pmb-card[data-collapsed=true] .pmb-card-txt,.pmb-card[data-collapsed=true] .pmb-arr{display:none}
`;

// React 19 hoists and de-duplicates this by href; React 18 renders it inline.
function Styles() {
  return <style href="postmcp-badge" precedence="default">{CSS}</style>;
}

function Mark() {
  return (
    <svg viewBox="86 86 340 340" aria-hidden="true">
      <g fill="none" stroke="#fff" strokeOpacity=".72" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
        <path d="M196 256 H252 a28 28 0 0 0 28 -28 V156 a28 28 0 0 1 28 -28 H320" />
        <path d="M196 256 H320" />
        <path d="M196 256 H252 a28 28 0 0 1 28 28 V356 a28 28 0 0 0 28 28 H320" />
      </g>
      <rect x="106" y="206" width="100" height="100" rx="30" fill="#fff" />
      <circle cx="364" cy="128" r="42" fill="#2ee0d2" />
      <circle cx="364" cy="256" r="42" fill="#fff" />
      <circle cx="364" cy="384" r="42" fill="#fff" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="pmb-arr" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** @typedef {'light' | 'dark' | 'auto'} PostMcpTone */
/** @typedef {{ tone?: PostMcpTone, className?: string, style?: import('react').CSSProperties }} PostMcpProps */

const linkProps = { href: POSTMCP_PRODUCTS_URL, target: '_blank', rel: 'noopener' };

/** @param {PostMcpProps} props */
export function PostMcpByline({ tone = 'light', className = '', style }) {
  return (
    <a {...linkProps} className={`pmb-by ${className}`} style={style} data-tone={tone} aria-label="by PostMCP AI — see all products">
      <Styles />
      by <span className="pmb-tile"><Mark /></span><b>PostMCP AI</b>
    </a>
  );
}

/** @param {PostMcpProps & { compactOnMobile?: boolean }} props */
export function PostMcpBadge({ tone = 'light', compactOnMobile = true, className = '', style }) {
  return (
    <a
      {...linkProps}
      className={`pmb ${className}`}
      style={style}
      data-tone={tone}
      data-compact={compactOnMobile ? 'sm' : undefined}
      aria-label="by PostMCP AI — see all products"
    >
      <Styles />
      <span className="pmb-tile"><Mark /></span>
      <span className="pmb-txt">by PostMCP AI</span>
      <Arrow />
    </a>
  );
}

/** @param {PostMcpProps} props */
export function PostMcpLoginNote({ tone = 'light', className = '', style }) {
  return (
    <a {...linkProps} className={`pmb-note ${className}`} style={style} data-tone={tone}>
      <Styles />
      <span className="pmb-tile"><Mark /></span>
      <span>A <b>PostMCP AI</b> product ·</span>
      <u>See all {PRODUCT_COUNT}</u>
    </a>
  );
}

/** @param {PostMcpProps & { collapsed?: boolean }} props */
export function PostMcpSidebarCard({ tone = 'light', collapsed = false, className = '', style }) {
  return (
    <a
      {...linkProps}
      className={`pmb-card ${className}`}
      style={style}
      data-tone={tone}
      data-collapsed={collapsed ? 'true' : undefined}
      aria-label="by PostMCP AI — explore our other products"
      title={collapsed ? 'by PostMCP AI' : undefined}
    >
      <Styles />
      <span className="pmb-tile"><Mark /></span>
      <span className="pmb-card-txt">
        by PostMCP AI
        <small>Explore {PRODUCT_COUNT - 1} more products</small>
      </span>
      <Arrow />
    </a>
  );
}

export default PostMcpBadge;
