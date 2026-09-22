import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

// Top-level paths that are real pages here, so /about on its own still finds /ar/about.
const pages = new Set(["about", "products", "careers", "contact"]);

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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [first] = pathname.split("/").filter(Boolean);

  if (first && (locales as readonly string[]).includes(first)) return;

  if (!first || pages.has(first)) {
    request.nextUrl.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Everything else (injected spam posts, old theme demo pages, wp-json…) is not ours.
  // Render the Arabic 404 in place instead of redirecting it anywhere.
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  // Skip Next internals and our own static files. Old .php URLs still go through, so they get the styled 404.
  matcher: ["/((?!_next/|brand/|media/|icon\\.png|apple-icon\\.png|sitemap\\.xml|robots\\.txt).*)"],
};
