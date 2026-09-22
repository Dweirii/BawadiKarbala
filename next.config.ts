import type { NextConfig } from "next";

// The old WordPress pages, mapped to their new homes. Arabic lived at the root, English under /en.
// News (/new-pages-ii) never had real articles, so it points to the home page.
const legacyPages: Record<string, string> = {
  "why-us": "/about",
  landing: "/products",
  "new-pages-ii": "",
  contact: "/contact",
  faq: "/careers",
};

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return Object.entries(legacyPages).flatMap(([slug, path]) => [
      { source: `/${slug}`, destination: `/ar${path}`, permanent: true },
      ...(slug === "contact" ? [] : [{ source: `/en/${slug}`, destination: `/en${path}`, permanent: true }]),
    ]);
  },
};

export default nextConfig;
