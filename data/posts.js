function cover(name, alt) {
  return {
    src: `/images/${name}.webp`,
    srcSet: `/images/${name}-768.webp 768w, /images/${name}.webp 1536w`,
    alt,
  };
}
const author = { author: "Shiva", authorRole: "Founder, PostMCP AI" };
export const posts = [
  {
    ...author,
    slug: "how-to-fix-ai-frontend",
    title: "How to fix AI-generated frontend code",
    subtitle:
      "The first draft is rarely the best draft. A practical method for turning a generic AI frontend into something worth shipping.",
    date: "2025-10-13",
    updated: "2026-10-13",
    tag: "AI coding",
    hero: cover(
      "frontend-craft",
      "An exploded website layout made from ivory and orange interface components",
    ),
    takeaway:
      "Give the model a specific visual direction, a small design system, and a clear way to check its work. Then refine one section at a time.",
    content: [
      {
        type: "p",
        text: "You ask an AI to build a website. A few minutes later, you have a working page: a headline, some cards, a call to action. Everything is technically there, but it still feels like a first draft. The spacing is uneven. The copy could belong to any product. The page has no clear point of view.",
      },
      {
        type: "p",
        text: "That is a useful place to start. You have something concrete to inspect, and improving something concrete is much easier than debating an empty canvas. The next step is to replace vague requests for polish with a series of specific decisions.",
      },
      { type: "h2", text: "1. Give the AI a direction it can follow" },
      {
        type: "p",
        text: "“Make it modern” leaves almost every design decision open. Start with the audience, the purpose of the page, and a reference you can actually show the assistant. A screenshot or an accessible page is more useful than assuming the model knows a brand’s current website.",
      },
      {
        type: "p",
        text: "Describe the qualities you want to learn from the reference: the size of the headline, the restraint in the color palette, the rhythm between sections. Keep your own content and identity. A reference should help you communicate decisions, not turn your product into a copy of somebody else’s.",
      },
      {
        type: "callout",
        tone: "note",
        label: "Too much left to interpretation",
        text: "“Make this landing page look modern and professional. Add some nice animations.”",
      },
      {
        type: "callout",
        tone: "good",
        label: "A more useful brief",
        text: "“This page helps independent developers improve AI-generated frontends. Use one strong headline, a warm white canvas, charcoal text, and orange for emphasis. Keep the reading area narrow. Use the attached reference for its spacing and type hierarchy. Preserve the current navigation and article links.”",
      },
      { type: "h2", text: "2. Build a small, consistent foundation" },
      {
        type: "p",
        text: "Before asking for another section, inspect what already exists. If there is a button component, reuse it. If the project defines colors and spacing, work with those tokens. A visual redesign becomes harder to maintain when every component invents a slightly different shade or corner radius.",
      },
      {
        type: "p",
        text: "For a new project, create a modest structure that separates shared components, page layouts, and content. You do not need an elaborate architecture. You need a place for the next piece of work to belong.",
      },
      {
        type: "code",
        lang: "Project structure",
        text: "src/\n├── components/   # Shared navigation, buttons, article cards\n├── pages/        # Page layouts\n├── data/         # Article content and site information\n├── hooks/        # Reusable behavior\n└── index.css     # Type, color, spacing, and layout rules",
      },
      {
        type: "list",
        items: [
          "Choose one display typeface and a readable body face. Define sizes for headings, body copy, and labels.",
          "Set a small spacing scale. Reuse the same gaps for related elements across the site.",
          "Keep a clear distinction between a primary action, a secondary action, and a plain text link.",
          "Ask the assistant to refine one representative section first. Review it before extending the pattern.",
        ],
      },
      { type: "h2", text: "3. Give every visual a job" },
      {
        type: "p",
        text: "Images help when they explain the product, establish a point of view, or give readers a useful visual landmark. They do not need to appear beside every sentence. Start with the most important image and decide what it should communicate before generating or sourcing it.",
      },
      {
        type: "p",
        text: "For an editorial site, a coherent family of article covers can make the journal feel intentional. For a product, a real screenshot may explain more than a decorative illustration. Keep the surrounding layout quiet enough that the image can do its job.",
      },
      {
        type: "list",
        items: [
          "Write an image brief with a subject, composition, materials, and a palette that belongs to the site.",
          "Use descriptive alt text for meaningful images. Use an empty alt attribute for purely decorative images.",
          "Export appropriately sized images and provide smaller variants for narrower screens.",
          "Reserve the image’s dimensions in the layout so content does not jump while it loads.",
        ],
      },
      { type: "h2", text: "4. Review the experience, not just the screenshot" },
      {
        type: "p",
        text: "A polished desktop screenshot can hide a surprising number of problems. Resize the page. Navigate with a keyboard. Search for something that does not exist. Open a long article, follow a link, and use the browser’s back button. These ordinary actions expose the gaps that a visual pass misses.",
      },
      {
        type: "p",
        text: "Give feedback at the level of the problem you can observe. “The paragraph is difficult to scan at this width” is more useful than “the typography feels off.” Ask for one change, inspect the result, and keep the parts that already work.",
      },
      {
        type: "callout",
        tone: "good",
        label: "A useful final pass",
        text: "“Check this page at narrow mobile and desktop widths. Verify focus visibility, text contrast, image loading, and every visible action. Fix overflow and broken states without changing the established visual direction.”",
      },
      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        text: "A better frontend comes from a better sequence of decisions. Set the direction, establish the foundation, choose purposeful visuals, and test the experience. AI can help with every step, but the quality of the result still depends on what you ask it to notice.",
      },
      {
        type: "p",
        text: "You do not need to get everything right in the first prompt. You need to make the next draft more deliberate than the last one.",
      },
    ],
  },
  {
    ...author,
    slug: "better-prompts-better-frontends",
    title: "Better prompts start with better direction",
    subtitle:
      "Replace “make it look better” with a brief your AI coding assistant can actually build from.",
    date: "2026-10-13",
    tag: "Prompting",
    hero: cover(
      "prompt-direction",
      "A charcoal terminal with an orange cursor and sculptural conversation tiles",
    ),
    takeaway:
      "Describe the reader, the task, the visual rules, and the constraints. Ask for a small, reviewable change, then give feedback about what you can observe.",
    content: [
      {
        type: "p",
        text: "A long prompt is not automatically a good brief. You can spend a paragraph asking for an elegant, premium, beautiful website and still leave the assistant guessing about every important decision.",
      },
      {
        type: "p",
        text: "Useful direction connects the design to a specific person doing a specific thing. Once that is clear, the visual decisions have something to answer to. A documentation page should make information easy to find. A landing page should explain the offer. An article should make you want to keep reading.",
      },
      { type: "h2", text: "Start with the job of the page" },
      {
        type: "p",
        text: "Write a sentence that describes who the page is for and what they should be able to do. Avoid beginning with an inventory of sections. A hero, three feature cards, and a testimonial row describe a layout, but they do not explain why that layout should exist.",
      },
      {
        type: "callout",
        tone: "good",
        label: "A useful starting sentence",
        text: "“This page helps a developer decide which frontend guide to read next. Make the article topic, summary, and reading time easy to compare.”",
      },
      {
        type: "p",
        text: "Now the assistant can make choices in service of that task. It might emphasize categories, give descriptions more room, or simplify the navigation. You have a reason to accept or reject each change.",
      },
      { type: "h2", text: "Turn taste into observable rules" },
      {
        type: "p",
        text: "Words like premium or clean can be a starting point, but they need translation. Specify the qualities you can see: fewer accent colors, a larger gap between sections, a narrower line length, a stronger distinction between titles and labels.",
      },
      {
        type: "list",
        items: [
          "Typography: describe the hierarchy, weight, line length, and density you want.",
          "Color: name the main background, text color, and role of the accent.",
          "Layout: explain what should dominate and which elements should feel secondary.",
          "Imagery: describe what the visual should communicate and where it should fit.",
        ],
      },
      {
        type: "p",
        text: "A reference image is helpful when paired with these notes. Without the notes, the assistant may copy the wrong thing. Say whether you care about the composition, the materials, the spacing, or the way a particular interaction works.",
      },
      { type: "h2", text: "Make the constraints explicit" },
      {
        type: "p",
        text: "Tell the assistant which parts of the project already work. Name the framework, the existing components, the routes that must keep working, and any content that must remain accurate. If there is an established design system, point to the source of truth.",
      },
      {
        type: "code",
        lang: "Example brief",
        text: "Audience: independent developers building with AI.\nGoal: help readers choose a practical frontend guide.\n\nKeep:\n- Existing article URLs and content\n- Keyboard navigation and theme switching\n- Shared components and design tokens\n\nImprove:\n- Title and summary hierarchy\n- Cover imagery and spacing\n- Mobile card layouts and empty search states\n\nFirst show one revised article card.\nExplain the choices before applying them site-wide.",
      },
      {
        type: "p",
        text: "Constraints are not just limitations. They reduce the number of irrelevant choices and help the model spend its effort on the part you actually want to improve.",
      },
      { type: "h2", text: "Give feedback in small, useful passes" },
      {
        type: "p",
        text: "Review one representative section before asking for a whole redesign. This lets you catch a wrong direction while the change is still easy to understand. If the card is too dense, solve that problem before multiplying it across the page.",
      },
      {
        type: "callout",
        tone: "note",
        label: "Instead of “this still feels wrong”",
        text: "“The category label competes with the title. Make it quieter, keep the title’s current size, and add more space between the summary and author details.”",
      },
      {
        type: "p",
        text: "Be equally specific about what should stay. If the spacing is right but the image is wrong, say so. Otherwise a broad request for another attempt can undo the best parts of the previous one.",
      },
      { type: "h2", text: "Finish with evidence" },
      {
        type: "p",
        text: "Ask the assistant to demonstrate the result: show desktop and mobile layouts, navigate the main flow, and test the states it changed. “Done” should mean the behavior was checked, not just that the files were saved.",
      },
      {
        type: "p",
        text: "The best prompt is not a secret formula. It is a clear brief followed by thoughtful feedback. Make the work easier to understand, and you make it easier to improve.",
      },
    ],
  },
  {
    ...author,
    slug: "small-design-system-big-difference",
    title: "Better AI frontends are built one review at a time.",
    subtitle:
      "Turn a messy first draft into a website with a clear flow, organized code, and a design system you can keep improving.",
    date: "2026-10-13",
    tag: "Frontend design",
    hero: cover(
      "design-system",
      "Stacked ceramic design panels with consistent controls and an orange accent ring",
    ),
    takeaway:
      "Give the AI a clear page flow and simple code boundaries. Review the website yourself, send back specific feedback, and check each refinement. Software is meant to be fixed and improved.",
    content: [
      {
        type: "p",
        text: "An AI can give you a website before you have decided how the website should work. The page renders, the buttons have color, and the sections look complete. But the visitor’s journey may be unclear, the content may repeat itself, and the code may put the entire application into one growing file.",
      },
      {
        type: "p",
        text: "Treat that first generation as something to review. Open the site, follow the flow yourself, look at the structure behind it, and tell the AI exactly what needs another pass. A useful workflow is to generate, inspect, refine, and verify. Repeat it while there are concrete problems worth solving.",
      },
      { type: "h2", text: "Give the first draft a clear flow" },
      {
        type: "p",
        text: "A prompt such as “build a beautiful website” leaves the assistant to invent the audience, the section order, and the purpose of each button. You can end up with several attractive sections that never answer the visitor’s next question. Adding more sections will not resolve an unclear purpose.",
      },
      {
        type: "p",
        text: "Before generating a page, write down who it serves and the one main thing that person should be able to do. For a developer tool, the flow might be: understand the problem, see an example of the result, learn how setup works, and try the tool. Each section should help the visitor take the next step.",
      },
      {
        type: "list",
        items: [
          "Start with the visitor’s question. What is this, who is it for, and why should they keep reading?",
          "Use real content to connect the sections. An example or short demonstration should explain the promise in the headline.",
          "Give the main action a clear destination. Decide what happens after “Get started” before styling the button.",
          "Include the rest of the journey: navigation, mobile menus, form feedback, loading states, and a way to recover from an error where those features exist.",
        ],
      },
      {
        type: "callout",
        tone: "good",
        label: "Plan the flow before generating the page",
        text: "“This site helps developers create website images. Lead with the result, show a real example, explain setup, and end with a clear next step. Outline the visitor journey and the states each interaction needs before writing the page.”",
      },
      { type: "h2", text: "Untangle the code before adding more" },
      {
        type: "p",
        text: "One common first-draft problem is a single file containing navigation, page sections, article data, form state, and a long list of styling decisions. When the next request arrives, more code gets added to that same file. A small visual change can then require navigating several unrelated responsibilities.",
      },
      {
        type: "p",
        text: "A single file can be perfectly reasonable for a tiny prototype. The warning sign is how hard it becomes to make a change safely: repeated markup drifts apart, unrelated state gets tangled together, or you cannot tell where one feature ends. Split code around meaningful responsibilities when those problems appear.",
      },
      {
        type: "code",
        lang: "One possible structure for a small React site",
        text: "src/\n├── App.jsx                  # Compose routes and the shared shell\n├── pages/\n│   ├── Home.jsx             # Home page flow\n│   └── Article.jsx          # Article layout\n├── components/\n│   ├── SiteHeader.jsx       # Navigation and mobile menu\n│   └── ArticleCard.jsx      # Repeated article preview\n├── data/\n│   └── articles.js          # Content, separate from its layout\n└── styles/\n    ├── tokens.css           # Shared visual decisions\n    └── site.css             # Layout and component styles",
      },
      {
        type: "p",
        text: "Adapt this outline to your framework and the project’s existing conventions. Keep state near the feature that owns it, extract components that have a clear job, and give repeated content one source of truth. Creating a separate file for every few lines can make a small site harder to follow too.",
      },
      {
        type: "callout",
        tone: "note",
        label: "A focused refactoring request",
        text: "“Inspect the current page and identify mixed responsibilities. Separate the shared navigation, article layout, and article data using the project’s conventions. Preserve the visible design, URLs, and interactions, then verify that they still work.”",
      },
      {
        type: "image",
        ...cover(
          "review-refine",
          "A crowded code panel beside organized website components, with an orange magnifying glass and a looping ribbon representing review and refinement",
        ),
        caption:
          "A first draft becomes useful through review: inspect the page, clarify the structure, and feed the next improvement back to the AI.",
      },
      { type: "h2", text: "Give the AI a small design system" },
      {
        type: "p",
        text: "A frontend can look inconsistent without any individual component looking obviously broken. One button is slightly taller. One card has a softer radius. Every section has its own interpretation of muted gray. A small shared system gives you and the assistant a set of decisions to reuse as the site grows.",
      },
      { type: "h3", text: "Name colors by what they do" },
      {
        type: "p",
        text: "A palette becomes more useful when its names describe roles. Background, surface, text, muted text, border, and accent are enough to begin. Components can refer to those roles without knowing the exact shade underneath.",
      },
      {
        type: "code",
        lang: "CSS",
        text: ":root {\n  --canvas: #fbfbfa;\n  --surface: #ffffff;\n  --ink: #181819;\n  --muted: #6b6b70;\n  --line: #e6e6e2;\n  --accent: #c94011;\n}\n\n.article-card {\n  background: var(--surface);\n  color: var(--ink);\n  border: 1px solid var(--line);\n}",
      },
      {
        type: "p",
        text: "Roles also make theme changes easier to reason about. A dark theme can change the value of surface and text in one place. Check the resulting combinations rather than assuming a palette that works in one theme will work in another.",
      },
      { type: "h3", text: "Give typography a clear hierarchy" },
      {
        type: "p",
        text: "You do not need many sizes. You need a clear relationship between the page title, section heading, card title, body copy, and supporting label. Decide which role should attract attention and give the others room to support it.",
      },
      {
        type: "list",
        items: [
          "Keep body text comfortable to read at the actual content width, not just in a type specimen.",
          "Use labels sparingly. Small uppercase text works best for short pieces of supporting information.",
          "Let headings shrink at narrow widths while keeping the body copy readable.",
          "Check long titles and realistic content. Short placeholder text hides layout problems.",
        ],
      },
      {
        type: "p",
        text: "Typography is also spacing. The gap after a heading tells the reader which paragraph belongs to it. The gap before the next heading signals a new thought. Treat these relationships as part of the system.",
      },
      { type: "h3", text: "Choose a spacing rhythm" },
      {
        type: "p",
        text: "Pick a short sequence of spacing values and use it consistently. A scale such as 4, 8, 12, 16, 24, 32, 48, and 64 pixels is a reasonable starting point. It is a tool for consistency, not a rule that must defeat your judgment.",
      },
      {
        type: "p",
        text: "Related elements should sit closer together than unrelated elements. A title and summary need a smaller gap than two separate cards. A new section needs enough space to feel distinct. These simple relationships often improve a page more than adding another decorative element.",
      },
      {
        type: "callout",
        tone: "good",
        label: "A useful instruction for your assistant",
        text: "“Use the existing spacing tokens. If a new value seems necessary, explain which relationship the current scale cannot express before adding it.”",
      },
      { type: "h3", text: "Reuse behavior as well as appearance" },
      {
        type: "p",
        text: "A shared button should carry more than a background color. It should have a visible focus state, a comfortable target size, and consistent disabled behavior when needed. A shared article card should handle a long title and a missing description without breaking the layout.",
      },
      {
        type: "p",
        text: "Start with the pieces that actually repeat. Navigation, buttons, article cards, and text links are common candidates. Resist creating a large abstraction for a component that only appears once and has no stable pattern yet.",
      },
      { type: "h3", text: "Keep the system small enough to use" },
      {
        type: "p",
        text: "A system is only useful if it helps the next change. Put the tokens somewhere obvious, keep a representative component easy to find, and tell the assistant to inspect both before editing.",
      },
      {
        type: "p",
        text: "Start small and repeat deliberately. Add a new token or component when an actual pattern needs it. The system should make the next improvement easier to understand and apply.",
      },
      { type: "h2", text: "Review the website yourself" },
      {
        type: "p",
        text: "After the AI finishes a pass, open the actual website. A successful build tells you that the project can be built; it does not tell you whether the page makes sense to a visitor. Screenshots help with layout, but you also need to click, type, scroll, and follow the main journey.",
      },
      {
        type: "p",
        text: "Read the page from the top without filling in missing explanations from your own knowledge of the product. Is the purpose clear? Does each section answer the question raised by the previous one? Does the main action lead somewhere useful? Write down where you hesitate.",
      },
      {
        type: "list",
        items: [
          "Check desktop and a narrow mobile view. Look for clipped headings, crowded buttons, unexpected horizontal scrolling, and images that hide important content.",
          "Follow the main action from beginning to end. Open navigation, visit a detail page, use browser back, and reload a deep link where relevant.",
          "Try realistic content and awkward states: a long title, an empty search, an invalid form value, or a failed request if the feature supports it.",
          "Use the keyboard. Make sure you can reach controls, see focus, open and close the menu, and understand what each control does.",
          "Review the code changes as well. Look for duplicate components, new hard-coded styles, and unrelated edits that make the next change harder.",
        ],
      },
      {
        type: "p",
        text: "Keep a short issue list with the page, screen size, action, and observed result. A screenshot of the problem makes visual feedback easier to follow. Fix a broken journey or unreadable content before spending another pass on subtle shadows.",
      },
      { type: "h2", text: "Send specific feedback back to the AI" },
      {
        type: "p",
        text: "“Make it better” asks the assistant to guess again. A useful refinement request names the problem, explains what should happen, and says which working parts to preserve. Keep each pass focused enough that you can tell whether it improved the result.",
      },
      {
        type: "code",
        lang: "Copyable refinement prompt",
        wrap: true,
        text: "Page: /blog\nScreen: 390px wide\n\nObserved:\nThe article title is clipped, and opening the menu covers\nthe close button. See the attached screenshot.\n\nExpected:\nThe full title wraps within the card. The open menu has\na visible close control that also works with the keyboard.\n\nPreserve:\nKeep the current colors, article order, and desktop layout.\n\nScope:\nFix these two issues using the existing components and tokens.\n\nVerify:\nRecheck the affected mobile view, desktop layout, and keyboard\nflow. Show the result and say what still needs review.",
      },
      {
        type: "p",
        text: "Attach evidence from the site you actually reviewed. Include the steps that reproduce a behavior problem; point to the exact section for a design problem. If you already like the typography or spacing, say so. That gives the assistant useful boundaries for the next edit.",
      },
      {
        type: "p",
        text: "Separate a structural cleanup from a visual redesign when that makes the result easier to assess. For example, first ask the AI to extract repeated article cards while preserving their behavior. Then request the spacing adjustment. You can review the purpose and outcome of each change.",
      },
      { type: "h2", text: "Fix, verify, and keep improving" },
      {
        type: "p",
        text: "When the assistant reports a fix, repeat the steps that exposed the problem. Check a nearby state too: a mobile menu change should still leave desktop navigation working, and a shared card change should work with another article’s longer title. Run the project’s relevant checks alongside this manual review.",
      },
      {
        type: "p",
        text: "Keep changes small enough to understand and save a working version before the next substantial pass. If a refinement causes a regression, you need to know what changed and be able to undo it. Feed the new observation back into the same review loop.",
      },
      {
        type: "callout",
        tone: "good",
        label: "Generate → inspect → refine → verify",
        text: "Software is meant to be fixed and improved. The first generation starts the process. Your review gives the next generation a clear purpose.",
      },
      {
        type: "p",
        text: "Give each pass a finish line. The main journey should work, the changed states should be checked, and the code should be understandable enough for the next change. Ship that improvement, learn from real use, and let the next concrete problem guide the next pass.",
      },
      { type: "h2", text: "Bonus: tools for your next frontend" },
      {
        type: "p",
        text: "These three tools from the PostMCP AI family can help you take a design system into a finished page. Bring your palette, type, and spacing rules into the brief so each new layout and visual feels like part of the same site.",
      },
      {
        type: "tools",
        tools: [
          {
            name: "Redesignr",
            category: "Explore a new direction",
            icon: "grid",
            url: "https://redesignr.ai/",
            domain: "redesignr.ai",
            description:
              "Turn a website URL, screenshot, or brief into a fresh layout direction. Refine it with AI or visual editing, then export the frontend code as a starting point for your build.",
          },
          {
            name: "Character Animation AI",
            category: "Give your site some personality",
            icon: "sparkle",
            url: "https://characteranimationai.com/",
            domain: "characteranimationai.com",
            description:
              "Create a character from a prompt or your own image, then explore new motions and moods. Try a welcoming mascot or a small celebration that fits your product’s personality.",
          },
          {
            name: "Image MCP Server",
            category: "Create the visuals in your editor",
            icon: "image",
            url: "https://imagemcpserver.com/",
            domain: "imagemcpserver.com",
            description:
              "Generate and edit website images through your coding assistant. Create hero artwork and blog covers, remove backgrounds, and compress assets before adding them to your frontend.",
          },
        ],
      },
    ],
  },
].map((post) => ({
  ...post,
  readTime: `${Math.max(
    1,
    Math.ceil(
      post.content.reduce((count, block) => {
        const text =
          block.text ||
          block.items?.join(" ") ||
          block.tools
            ?.map((tool) => `${tool.name} ${tool.category} ${tool.description}`)
            .join(" ") ||
          "";
        return count + (text.match(/\S+/g)?.length || 0);
      }, 0) / 200,
    ),
  )} min read`,
}));
export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
