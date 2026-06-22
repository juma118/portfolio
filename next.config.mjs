/** @type {import('next').NextConfig} */

// Served from https://juma118.github.io/portfolio/ in production (GitHub Pages
// project site), so a basePath is required. Local dev stays at "/".
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
