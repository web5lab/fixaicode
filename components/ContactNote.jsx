import { CONTACT_EMAIL } from "../data/brand";
import Icon from "./Icon";
export default function ContactNote({ articleTitle }) {
  const subject = articleTitle
    ? `Article suggestion or correction: ${articleTitle}`
    : "fixaicode: article suggestion or correction";
  return (
    <aside
      className="contact-note"
      aria-label="Article suggestions and corrections"
    >
      <div>
        <strong>Help make the journal better.</strong>
        <p>Suggest a topic, contribute a post, or flag a correction.</p>
      </div>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
      >
        {CONTACT_EMAIL}
        <Icon name="diagonal" size={15} />
      </a>
    </aside>
  );
}
