/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — every page is prerendered to HTML at build time,
  // so the site deploys to any static host (Netlify, Vercel, S3, nginx).
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
