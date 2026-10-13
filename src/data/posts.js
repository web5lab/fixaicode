export const posts = [
  {
    slug: 'how-to-fix-ai-frontend',
    title: 'How to Fix AI-Generated Frontend Code',
    subtitle:
      'AI never generates the best website on the first try. Here is the method that actually fixes it.',
    date: '2025-10-13',
    readTime: '6 min read',
    author: 'Shiva',
    authorRole: 'Founder, PostMCP AI',
    tag: 'AI Coding',
    hero: {
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      emoji: '🛠️',
    },
    content: [
      {
        type: 'p',
        text: 'If you have ever asked an AI to build you a website, you already know the feeling. You describe your dream landing page, hit enter, and what comes back is… fine. Generic hero section, default-looking buttons, a layout that feels like every other AI-generated page on the internet.',
      },
      {
        type: 'p',
        text: 'Here is the uncomfortable truth: AI never generates the best website in the beginning. Not because the models are bad — they are incredibly capable — but because they are guessing. They have no idea what "good" means to you, what your codebase looks like, or what level of visual polish you expect.',
      },
      {
        type: 'p',
        text: 'The fix is not a better model. The fix is a better method. After building dozens of AI-assisted frontends, here are the three things that consistently turn mediocre AI output into production-quality UI.',
      },
      {
        type: 'h2',
        text: '1. Give the AI context from the best UI websites',
      },
      {
        type: 'p',
        text: 'AI models respond dramatically better when you anchor them to a concrete visual reference. Instead of saying "make it look modern and clean" (which means nothing), point the AI at websites with world-class design and tell it exactly what to borrow.',
      },
      {
        type: 'callout',
        label: 'Weak prompt',
        tone: 'bad',
        text: '"Build me a landing page for my SaaS. Make it look modern and professional."',
      },
      {
        type: 'callout',
        label: 'Strong prompt',
        tone: 'good',
        text: '"Build a landing page styled like Linear\'s homepage: dark background, tight letter-spacing on headlines, subtle gradient glows, generous whitespace between sections. Use Apple-style typography hierarchy — one huge headline, muted gray subtext."',
      },
      {
        type: 'p',
        text: 'Great references to name-drop in your prompts: Apple (typography and spacing), Linear (dark themes and gradients), Stripe (layout and color discipline), Vercel (minimalism), and Airbnb (friendly, approachable UI). The AI has seen all of these sites during training — naming them activates that knowledge.',
      },
      {
        type: 'h2',
        text: '2. Tell the AI to add detailed images and visuals',
      },
      {
        type: 'p',
        text: 'The number one reason AI-generated pages look empty and lifeless: no imagery. AI defaults to text-only layouts because images are the hard part. You have to explicitly demand visual richness.',
      },
      {
        type: 'list',
        items: [
          'Ask for detailed image placeholders with exact dimensions and descriptions of what belongs there — "a 1200×800 dashboard screenshot with a dark sidebar" beats an empty gray box.',
          'Request illustrations, gradients, and decorative elements: glows, grid patterns, floating cards, device mockups.',
          'Tell it to add icons next to every feature — pages with icons instantly read as more designed.',
          'Ask for real visual hierarchy: hero image, alternating text/image sections, logos row, screenshots in the features section.',
        ],
      },
      {
        type: 'p',
        text: 'A page with strong imagery and average copy will always look better than a page with perfect copy and no visuals. Force the AI to design around images from the start.',
      },
      {
        type: 'h2',
        text: '3. Create the initial file structure manually',
      },
      {
        type: 'p',
        text: 'This is the one most people skip, and it matters the most. When the AI generates everything from scratch, it invents its own conventions — random folder names, inconsistent component patterns, styling approaches that fight each other. Then every follow-up prompt makes it worse, because the AI is building on a foundation it half-remembers.',
      },
      {
        type: 'p',
        text: 'Instead, spend ten minutes creating the skeleton yourself before the AI writes a single component:',
      },
      {
        type: 'code',
        lang: 'text',
        text: `src/
├── components/     # Nav.jsx, Footer.jsx, Button.jsx
├── pages/          # Home.jsx, Pricing.jsx
├── data/           # content lives here, not in components
├── hooks/          # useTheme.js, custom logic
└── index.css       # design tokens, one source of truth`,
      },
      {
        type: 'p',
        text: 'When the AI can see your structure, it follows your style. It puts new components where you would put them, names things the way you name them, and reuses your tokens instead of inventing new colors. You stop fighting the AI and start directing it.',
      },
      {
        type: 'list',
        items: [
          'Create empty folders and one or two example files in your style before prompting.',
          'Define your design tokens (colors, fonts, spacing) in one CSS file and tell the AI to only use those.',
          'Write one component by hand as the "reference pattern" — the AI will mirror it everywhere.',
        ],
      },
      {
        type: 'h2',
        text: 'The takeaway',
      },
      {
        type: 'p',
        text: 'AI is not a designer — it is an extremely fast builder that needs direction. Give it taste (reference the best UI websites), give it richness (demand detailed images), and give it structure (build the file skeleton yourself). Do those three things and the gap between "AI-generated" and "professionally built" almost disappears.',
      },
      {
        type: 'p',
        text: 'The first draft will still never be perfect. But with the right method, the second draft can be.',
      },
    ],
  },
]

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}
