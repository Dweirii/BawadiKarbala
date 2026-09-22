import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundView } from "@/components/not-found-view";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale } from "@/lib/i18n";

// proxy.ts rewrites every unknown URL here with a 404 status. A plain notFound() can't be
// server-rendered when the root layout sits under [lang], so this page stands in for it.
export async function generateMetadata({ params }: PageProps<"/[lang]/missing">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: getDictionary(lang).notFound.title, robots: { index: false }, alternates: null };
}

export default async function Missing({ params }: PageProps<"/[lang]/missing">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <NotFoundView lang={lang} />;
}
