import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
} from "../data/site";
import { FOUNDER_X_URL } from "../data/brand";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — fixaicode",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Shiva", url: FOUNDER_X_URL }],
  creator: "Shiva",
  publisher: SITE_NAME,
  keywords: [
    "AI code",
    "AI-generated frontend",
    "fix AI code",
    "AI coding",
    "frontend design",
    "prompt engineering",
    "web design",
    "vibe coding",
  ],
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1536,
        height: 1024,
        alt: "Sculptural orange code brackets and carefully arranged interface components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#161617" },
  ],
};

// Applies the saved theme before first paint (no flash) and rewrites
// legacy #/post/<slug> hash links to the /blog/<slug> routes.
const bootScript = `
try {
  if (localStorage.getItem("theme") === "dark")
    document.documentElement.classList.add("dark");
} catch {}
(function () {
  var legacy = window.location.hash.match(/^#\\/post\\/(.+)$/);
  if (legacy) window.location.replace("/blog/" + legacy[1]);
  else if (window.location.hash === "#/") window.location.replace("/");
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-variable-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-variable-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <div className="app-shell">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
