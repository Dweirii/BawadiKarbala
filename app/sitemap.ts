import type { MetadataRoute } from "next";
import { href, locales, siteUrl } from "@/lib/i18n";

const paths = ["", "/about", "/products", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}${href(lang, path)}`,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${href(l, path)}`])) },
    })),
  );
}
