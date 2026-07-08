/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// Vercel serves the app at the domain root, so the GitHub Pages
// repo basePath must not be applied there (Vercel sets VERCEL=1).
const isVercel = !!process.env.VERCEL;
const basePath = isProd && !isVercel ? "/portfolio" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
