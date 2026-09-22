# Bawadi Karbala

Website for Bawadi Karbala for Agricultural and Animal Production (شركة بوادي كربلاء للإنتاج الزراعي والحيواني), an Etihad Group poultry company in Karbala. Sister site of [Sama Karbala](https://github.com/Dweirii/samakarbala).

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build && pnpm start
```

## Structure

- `app/[lang]/…`: pages, statically generated for `ar` (default, RTL) and `en`.
- `lib/dictionary.ts`: all copy and UI strings in both languages, plus contact details.
- `lib/i18n.ts`: locales and path helpers.
- `proxy.ts`: sends `/` to `/ar` (or `/en` when the browser prefers English). Unknown top-level URLs, such as spam from the old WordPress site, render the Arabic 404 in place and are never redirected.
- `next.config.ts`: redirects from the old WordPress URLs (`/why-us`, `/landing`, `/new-pages-ii`, `/contact`, `/faq` and their `/en/…` versions).
- `app/globals.css`: design tokens (`paper`, `shell`, `line`, `ink`, `ink-soft`, `brand`, `brand-deep`, `sun`), taken from the logo.
- `public/brand`, `public/media`: logo and photos from the old site.

There is no News section. The old news page contained only placeholder cards with no articles. To add it back, follow the `lib/posts.ts` pattern in the Sama Karbala repo.
