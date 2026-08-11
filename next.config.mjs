/** @type {import('next').NextConfig} */

// The site is now served from the custom domain at the ROOT:
//   https://ai-creative-study.click/
// so bundled assets live at "/_next/..." with NO sub-path prefix. (When it was
// hosted on the GitHub project page https://a1ba-tross.github.io/Sci-fi-Film-Web/
// this needed BASE_PATH = "/Sci-fi-Film-Web"; the custom domain serves at root,
// so the prefix must be empty or every asset 404s and the page renders unstyled.)
const BASE_PATH = "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: BASE_PATH,
};

export default nextConfig;
