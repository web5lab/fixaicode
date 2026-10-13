import Icon, { Logo } from "./Icon";
import { PostMcpByline } from "./PostMcpBadge";
import { CONTACT_EMAIL, FOUNDER_X_URL, PRODUCTS_URL } from "../data/brand";
const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <div className="brand-lockup">
            <a href="/" aria-label="fixaicode home">
              <Logo />
            </a>
            <PostMcpByline tone="auto" className="brand-family" />
          </div>
          <p>
            A little direction.
            <br />A much better frontend.
          </p>
        </div>
        <div className="footer-links">
          <span>THE FIELD GUIDE</span>
          <a href="/blog">All articles</a>
          <a href="/#method">The method</a>
          <a href="/#about">About fixaicode</a>
        </div>
        <div className="footer-links">
          <span>FROM THE MAKER</span>
          <a href={PRODUCTS_URL} target="_blank" rel="noreferrer">
            PostMCP AI <Icon name="diagonal" size={14} />
          </a>
          <a href="https://fixaicode.org">
            fixaicode.org <Icon name="diagonal" size={14} />
          </a>
          <a href={FOUNDER_X_URL} target="_blank" rel="noreferrer">
            Shiva on X <Icon name="diagonal" size={14} />
          </a>
        </div>
        <div className="footer-links footer-contact">
          <span>IDEAS & CORRECTIONS</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL} <Icon name="diagonal" size={14} />
          </a>
          <p>
            Have a blog idea or spotted
            <br />
            something we should fix?
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} fixaicode. All rights reserved.</span>
        <span>An independent publication by Shiva, founder of PostMCP AI.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
