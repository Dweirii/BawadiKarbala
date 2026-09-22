import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

// Paths that are real pages here (under a locale, or at the top level as a shortcut).
const pages = new Set(["about", "products", "careers", "contact"]);

const isLocale = (segment?: string): segment is Locale =>
  segment !== undefined && (locales as readonly string[]).includes(segment);

/** Arabic unless the browser ranks English above Arabic. */
function preferredLocale(request: NextRequest): Locale {
  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().toLowerCase().split(";q=");
      return { tag, q: q === undefined ? 1 : Number(q) };
    })
    .sort((a, b) => b.q - a.q);
  const match = ranked.find(({ tag }) => tag.startsWith("ar") || tag.startsWith("en"));
  return match?.tag.startsWith("en") ? "en" : defaultLocale;
}

// Built from scratch: NextURL keeps the original trailing slash when its pathname is reassigned.
const to = (request: NextRequest, pathname: string) => new URL(pathname + request.nextUrl.search, request.url);

/** Serve the localized 404 page at the requested URL, with a real 404 status. */
const missing = (request: NextRequest, lang: Locale) =>
  NextResponse.rewrite(to(request, `/${lang}/missing`), { status: 404 });

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const [first, second] = segments;
  const trimmed = `/${segments.join("/")}`;
  const isPage = segments.length <= 1 || (segments.length === 2 && pages.has(second));

  if (isLocale(first)) {
    if (!isPage) return missing(request, first);
    // Real pages get the trailing slash tidied up.
    if (pathname !== trimmed) return NextResponse.redirect(to(request, trimmed), 308);
    return;
  }

  if (!first || (segments.length === 1 && pages.has(first))) {
    return NextResponse.redirect(to(request, `/${preferredLocale(request)}${first ? trimmed : ""}`));
  }

  // Everything else (injected spam posts, old theme demo pages, wp-json…) is not ours.
  // It gets the Arabic 404 in place and is never redirected anywhere.
  return missing(request, defaultLocale);
}

export const config = {
  // Skip Next internals and our own static files. Old .php URLs still go through, so they get the styled 404.
  matcher: ["/((?!_next/|brand/|media/|icon\\.png|apple-icon\\.png|sitemap\\.xml|robots\\.txt).*)"],
};
