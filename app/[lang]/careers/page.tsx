import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-header";
import { contact, getDictionary } from "@/lib/dictionary";
import { alternates, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/careers">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.careers.title, description: t.careers.intro, alternates: alternates(lang, "/careers") };
}

export default async function Careers({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const c = t.careers;

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} />

      <section className="container-site">
        <div className="flex flex-col gap-6 rounded-panel bg-brand-deep p-8 text-white on-dark sm:flex-row sm:items-center sm:justify-between md:p-12">
          <a
            href={`mailto:${contact.careersEmail}`}
            dir="ltr"
            className="display text-3xl underline decoration-white/25 underline-offset-8 transition-colors hover:decoration-sun rtl:text-right md:text-5xl"
          >
            {contact.careersEmail}
          </a>
          <a href={`mailto:${contact.careersEmail}`} className="btn shrink-0 self-start bg-sun text-brand-deep hover:bg-white sm:self-auto">
            {c.send}
            <Arrow />
          </a>
        </div>
      </section>

      <section className="container-site mt-20 grid gap-10 md:mt-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-3xl md:text-4xl">{c.areasTitle}</h2>
          <p className="mt-4 text-lg text-ink-soft">{c.areasBody}</p>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {c.areas.map((area) => (
            <li key={area} className="border-t border-line py-5 text-xl font-medium">
              {area}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
