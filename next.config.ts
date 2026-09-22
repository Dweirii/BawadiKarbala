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
  // Trailing slashes are handled in proxy.ts, so old spam URLs (which all end in "/") are never redirected.
  skipTrailingSlashRedirect: true,
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return Object.entries(legacyPages).flatMap(([slug, path]) =>
      ["", "/"].flatMap((slash) => [
        { source: `/${slug}${slash}`, destination: `/ar${path}`, permanent: true },
        // /en/contact is also a new URL, so only its trailing-slash form needs a redirect.
        ...(slug === "contact" && !slash
          ? []
          : [{ source: `/en/${slug}${slash}`, destination: `/en${path}`, permanent: true }]),
      ]),
    );
  },
};

export default nextConfig;
