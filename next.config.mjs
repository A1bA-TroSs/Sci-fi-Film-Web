/** @type {import('next').NextConfig} */

// The site is deployed to a GitHub **project page**:
//   https://a1ba-tross.github.io/Sci-fi-Film-Web/
// so all bundled assets (/_next/...) must live under that "/Sci-fi-Film-Web"
// sub-path, or the CSS/JS 404 and the page renders unstyled.
//
// In development (npm run dev) we use no basePath so http://localhost:3000 works
// normally. Only the production export gets the sub-path.
//
// WHEN YOU MOVE TO THE CUSTOM DOMAIN (ai-creative-study.click, which serves at
// the root): change the line below to `const BASE_PATH = "";` and re-add
// public/CNAME. That's the only change needed.
const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Sci-fi-Film-Web" : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: BASE_PATH,
};

export default nextConfig;
