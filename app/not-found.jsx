import Link from "next/link";
import Icon from "../components/Icon";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">A SMALL DETOUR</span>
      <h1>
        This page hasn’t
        <br />
        been built.
      </h1>
      <p>Find your next idea in the journal.</p>
      <Link href="/blog" className="button">
        Back to the articles <Icon name="arrow" size={18} />
      </Link>
    </main>
  );
}
