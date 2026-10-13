import Icon from "../components/Icon";
import Journal from "../components/Journal";
export default function Blog() {
  return (
    <main id="main">
      <header className="blog-header container">
        <span className="eyebrow">
          <Icon name="book" size={16} /> THE FIXAICODE JOURNAL
        </span>
        <h1>
          Good ideas.
          <br />
          <span>Better frontends.</span>
        </h1>
        <p>
          Field notes on design, AI coding, and getting the details right.
          <br className="desktop-only" /> Written to help you make something
          worth shipping.
        </p>
        <div className="blog-header-note">
          <span className="tiny-dot" /> INDEPENDENT THINKING. PRACTICAL ADVICE.
        </div>
      </header>
      <Journal full />
    </main>
  );
}
