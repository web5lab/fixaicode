import { posts } from '../data/posts'

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function PostCard({ post, index }) {
  return (
    <a
      href={`#/post/${post.slug}`}
      className={`group block rounded-3xl bg-white dark:bg-[#1c1c1e] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-none dark:ring-1 dark:ring-white/10 dark:hover:ring-white/20 transition-all duration-500 hover:-translate-y-1 animate-fade-up delay-${(index + 1) * 100}`}
    >
      <div
        className={`relative h-52 bg-gradient-to-br ${post.hero.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
          {post.hero.emoji}
        </span>
      </div>
      <div className="p-7">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[#0071e3]">
          {post.tag}
        </p>
        <h2 className="mt-2 text-[22px] font-semibold leading-snug tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          {post.title}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
          {post.subtitle}
        </p>
        <div className="mt-5 flex items-center gap-2 text-[12px] text-[#86868b]">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5">
      <section className="pt-20 pb-16 text-center">
        <p className="animate-fade-up text-[13px] font-semibold uppercase tracking-widest text-[#0071e3]">
          A blog by PostMCP AI
        </p>
        <h1 className="animate-fade-up delay-100 mx-auto mt-4 max-w-3xl text-5xl sm:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Fix your
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            {' '}
            AI code.
          </span>
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-xl text-[19px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
          Practical methods for turning AI-generated frontends into
          production-quality websites. Written by Shiva, founder of PostMCP AI.
        </p>
      </section>

      <section className="pb-24 grid gap-8 sm:grid-cols-2">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </section>
    </main>
  )
}
