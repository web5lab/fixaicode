import { getPost } from '../data/posts'

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-12 mb-4 text-[28px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="mb-5 text-[17px] leading-[1.75] text-[#3a3a3c] dark:text-[#d1d1d6]">
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[17px] leading-[1.7] text-[#3a3a3c] dark:text-[#d1d1d6]"
            >
              <span className="mt-[2px] text-[#0071e3]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre className="mb-6 overflow-x-auto rounded-2xl bg-[#1d1d1f] dark:bg-[#1c1c1e] dark:ring-1 dark:ring-white/10 p-6 text-[13.5px] leading-relaxed text-[#f5f5f7]">
          <code className="font-mono">{block.text}</code>
        </pre>
      )
    case 'callout': {
      const good = block.tone === 'good'
      return (
        <div
          className={`mb-5 rounded-2xl p-5 ring-1 ${
            good
              ? 'bg-green-50 ring-green-200 dark:bg-green-500/10 dark:ring-green-500/25'
              : 'bg-red-50 ring-red-200 dark:bg-red-500/10 dark:ring-red-500/25'
          }`}
        >
          <p
            className={`mb-1.5 text-[12px] font-semibold uppercase tracking-wide ${
              good
                ? 'text-green-700 dark:text-green-400'
                : 'text-red-700 dark:text-red-400'
            }`}
          >
            {good ? '✓ ' : '✕ '}
            {block.label}
          </p>
          <p className="text-[15.5px] leading-relaxed text-[#3a3a3c] dark:text-[#d1d1d6]">
            {block.text}
          </p>
        </div>
      )
    }
    default:
      return null
  }
}

export default function Post({ slug }) {
  const post = getPost(slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-32 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Post not found
        </h1>
        <a
          href="#/"
          className="mt-4 inline-block text-[15px] text-[#0071e3] hover:underline"
        >
          ← Back to the blog
        </a>
      </main>
    )
  }

  return (
    <main className="animate-fade-up">
      <div
        className={`relative h-72 sm:h-96 bg-gradient-to-br ${post.hero.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <span className="text-8xl drop-shadow-xl">{post.hero.emoji}</span>
      </div>

      <article className="mx-auto max-w-2xl px-5 pb-24">
        <header className="pt-14 pb-10 border-b border-black/5 dark:border-white/10 mb-10">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#0071e3]">
            {post.tag}
          </p>
          <h1 className="mt-3 text-4xl sm:text-[44px] font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            {post.title}
          </h1>
          <p className="mt-4 text-[19px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            {post.subtitle}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-[15px] font-semibold text-white">
              {post.author[0]}
            </span>
            <div>
              <p className="text-[14px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                {post.author}{' '}
                <span className="font-normal text-[#86868b]">
                  · {post.authorRole}
                </span>
              </p>
              <p className="text-[12px] text-[#86868b]">
                {formatDate(post.date)} · {post.readTime}
              </p>
            </div>
          </div>
        </header>

        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <div className="mt-14 rounded-3xl bg-white dark:bg-[#1c1c1e] dark:ring-1 dark:ring-white/10 p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none">
          <p className="text-[20px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Enjoyed this post?
          </p>
          <p className="mt-2 text-[15px] text-[#6e6e73] dark:text-[#a1a1a6]">
            More practical AI coding methods are coming to fixaicode.
          </p>
          <a
            href="#/"
            className="mt-5 inline-block rounded-full bg-[#0071e3] px-6 py-2.5 text-[15px] font-medium text-white hover:bg-[#0077ed] transition-colors"
          >
            Read more posts
          </a>
        </div>
      </article>
    </main>
  )
}
