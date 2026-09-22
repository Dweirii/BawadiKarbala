export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export const siteUrl = "https://bawadikarbala.iq";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dir = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

/** Prefix an internal path with the locale, e.g. href("ar", "/about") -> "/ar/about". */
export const href = (lang: Locale, path = "") => `/${lang}${path === "/" ? "" : path}`;

/** Canonical and hreflang links for a page that exists in both languages. */
export const alternates = (lang: Locale, path = "") => ({
  canonical: href(lang, path),
  languages: {
    ...Object.fromEntries(locales.map((l) => [l, href(l, path)])),
    "x-default": href(defaultLocale, path),
  },
});
