/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site in ./out (index.html + assets) for GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
