"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";

export default function NotFound() {
  const { lang: param } = useParams<{ lang?: string }>();
  const lang = param && hasLocale(param) ? param : "ar";
  const t = getDictionary(lang);

  return (
    <section className="container-site py-24 md:py-36">
      <p className="display text-8xl text-brand md:text-9xl">404</p>
      <h1 className="display mt-6 text-4xl md:text-5xl">{t.notFound.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">{t.notFound.body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={href(lang)} className="btn btn-primary">
          {t.notFound.home}
          <Arrow />
        </Link>
        <Link href={href(lang, "/products")} className="btn btn-quiet">
          {t.nav.products}
        </Link>
      </div>
    </section>
  );
}
