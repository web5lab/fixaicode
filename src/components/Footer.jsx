import Icon, { Logo } from './Icon'
export default function Footer() {
  return <footer className="site-footer container">
    <div className="footer-main">
      <div><a href="/" aria-label="fixaicode home"><Logo /></a><p>A little direction.<br />A much better frontend.</p></div>
      <div className="footer-links"><span>THE FIELD GUIDE</span><a href="/blog">All articles</a><a href="/#method">The method</a><a href="/#about">About fixaicode</a></div>
      <div className="footer-links"><span>FROM THE MAKER</span><a href="https://postmcp.ai" target="_blank" rel="noreferrer">PostMCP AI <Icon name="diagonal" size={14} /></a><a href="https://fixaicode.org">fixaicode.org <Icon name="diagonal" size={14} /></a></div>
      <div className="footer-note"><span className="tiny-dot" /> Built with AI.<br /><span>Refined with intention.</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} fixaicode. All rights reserved.</span><span>An independent publication by Shiva, founder of PostMCP AI.</span><a href="#main">Back to top ↑</a></div>
  </footer>
}
