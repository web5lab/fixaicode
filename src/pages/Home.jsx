import Icon from '../components/Icon'
import Journal from '../components/Journal'
import CopyButton from '../components/CopyButton'
const starterPrompt = `Refine this frontend while preserving its functionality.

1. Inspect the existing components and design tokens.
2. Propose a clear type scale, spacing system, and color palette.
3. Improve one representative section before applying the direction everywhere.
4. Use purposeful imagery and clear, specific copy.
5. Verify keyboard access, mobile layouts, empty states, and every visible action.

Explain the changes and show the result at desktop and mobile widths.`
function Method() {
  return <section className="method-section" id="method"><div className="container">
    <div className="section-heading"><div><span className="eyebrow">LESS GUESSING. MORE CRAFT.</span><h2>A first draft is a start.<br />Here’s what comes next.</h2></div><a className="text-link" href="/blog/how-to-fix-ai-frontend">The complete method <Icon name="arrow" size={17} /></a></div>
    <div className="method-grid">{[
      { number: '01', icon: 'compass', title: 'Give it direction.', text: 'Show what good looks like. Choose a reference and explain the details that matter.' },
      { number: '02', icon: 'grid', title: 'Build the foundation.', text: 'Set your type, spacing, and colors. Give the next component a system to follow.' },
      { number: '03', icon: 'sparkle', title: 'Refine the details.', text: 'Add purposeful visuals. Check every state. Read it, click it, and try it on your phone.' },
    ].map(step => <div className="method-card" key={step.number}><div className="method-card-top"><span className="method-icon"><Icon name={step.icon} size={23} /></span><span>{step.number}</span></div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
    <details className="prompt-details"><summary><span><Icon name="code" size={18} />A better starting point for your next prompt</span><span className="prompt-open">Open prompt <span>+</span></span></summary><div className="prompt-body"><div><span className="eyebrow">MAKE IT YOUR OWN</span><CopyButton text={starterPrompt} label="Copy prompt" /></div><pre>{starterPrompt}</pre><p>Add your own reference, audience, and project constraints before using it.</p></div></details>
  </div></section>
}
export default function Home() {
  return <main id="main">
    <section className="hero container">
      <div className="hero-copy"><a href="/blog" className="hero-kicker"><span className="tiny-dot" /> A FIELD GUIDE FOR THE AI BUILDER <Icon name="arrow" size={14} /></a><h1>AI writes the code.<br />You make it<br /><span>worth shipping.</span></h1><p>Turn your first AI draft into a frontend you’re proud of. Practical guides on better design, better prompts, and the details that make the difference.</p><div className="hero-actions"><a href="/blog/how-to-fix-ai-frontend" className="button">Make your next draft better <Icon name="arrow" size={18} /></a><a href="/blog" className="text-link">Explore the blog <Icon name="diagonal" size={16} /></a></div><div className="hero-byline"><span className="author-avatar">S</span><div><strong>From the desk of Shiva</strong><span>Builder & founder of PostMCP AI</span></div><span className="byline-divider" /><span className="hero-note">Less boilerplate.<br />More intention.</span></div></div>
      <div className="hero-visual"><div className="art-orbit" /><img src="/images/hero.webp" srcSet="/images/hero-768.webp 768w, /images/hero.webp 1536w" sizes="(max-width: 760px) 100vw, 660px" alt="Sculptural orange code brackets and carefully arranged interface components" width="1536" height="1024" fetchPriority="high" /><span className="art-note art-note-top"><Icon name="code" size={15} /> A little human direction.</span><span className="art-note art-note-bottom"><span className="check-disc"><Icon name="check" size={12} /></span> A much better result.</span><span className="art-caption">BUILT WITH AI. REFINED BY YOU.</span></div>
    </section>
    <div className="principles-strip container"><span>GOOD FRONTENDS DON’T HAPPEN BY ACCIDENT.</span><div><span><Icon name="compass" size={18} />Clear direction</span><span><Icon name="grid" size={18} />Thoughtful systems</span><span><Icon name="sparkle" size={18} />Details that matter</span></div></div>
    <Journal />
    <Method />
    <section className="about-section container" id="about"><div className="about-mark"><Icon name="code" size={58} /><span>the human<br />in the loop.</span></div><div className="about-copy"><span className="eyebrow">A NOTE FROM THE MAKER</span><h2>For people who care<br />about what they ship.</h2><p>I’m Shiva, the founder of PostMCP AI. I started fixaicode to share the practical side of building with AI: the references, small decisions, and rounds of refinement that turn a promising draft into a considered product.</p><p>No magic prompts. Just a better way to work.</p><a className="text-link" href="https://postmcp.ai" target="_blank" rel="noreferrer">See what I’m building <Icon name="diagonal" size={17} /></a></div></section>
    <section className="closing-cta container"><span className="eyebrow"><Icon name="sparkle" size={14} /> THE NEXT DRAFT IS YOURS</span><h2>Good code is just<br />the beginning.</h2><p>Bring a little more intention to your next build.</p><a href="/blog/how-to-fix-ai-frontend" className="button">Start with the essential guide <Icon name="arrow" size={18} /></a><span className="cta-bracket bracket-left" aria-hidden="true">‹</span><span className="cta-bracket bracket-right" aria-hidden="true">›</span></section>
  </main>
}
