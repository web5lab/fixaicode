import Icon from "../../components/Icon";
import Journal from "../../components/Journal";
import JsonLd from "../../components/JsonLd";
import { posts } from "../../data/posts";
import { blogSchema, pageAlternates } from "../../data/site";

export const metadata = {
  title: "The journal",
  description:
    "Field notes on design, AI coding, and getting the details right. Practical guides to turn AI-generated frontends into something worth shipping.",
  alternates: pageAlternates("/blog"),
  openGraph: {
    title: "The journal — fixaicode",
    description:
      "Field notes on design, AI coding, and getting the details right. Practical guides to turn AI-generated frontends into something worth shipping.",
    url: "/blog",
  },
};

export default function Blog() {
  return (
    <main id="main">
      <JsonLd schema={blogSchema(posts)} />
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
