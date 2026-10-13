const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-[#86868b]">
          © {currentYear} fixaicode — a blog by{' '}
          <a
            href="https://postmcp.ai"
            target="_blank"
            rel="noreferrer"
            className="text-[#0071e3] hover:underline"
          >
            PostMCP AI
          </a>
        </p>
        <p className="text-[12px] text-[#86868b]">
          Built by Shiva, Founder of PostMCP AI
        </p>
      </div>
    </footer>
  )
}
