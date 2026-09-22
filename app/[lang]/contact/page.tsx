import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-header";
import { contact, getDictionary } from "@/lib/dictionary";
import { alternates, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.contactPage.title, description: t.contactPage.intro, alternates: alternates(lang, "/contact") };
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const c = t.contactPage;

  const channels = [
    { label: c.phone, value: contact.phone, href: contact.phoneHref, ltr: true },
    { label: c.email, value: contact.email, href: `mailto:${contact.email}`, ltr: true },
    { label: c.address, value: t.company.address, href: contact.mapsHref, ltr: false },
    { label: c.hours, value: t.company.hours, ltr: false },
  ];

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} />

      <section className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((ch) => {
          const body = (
            <>
              <p className="text-sm text-ink-soft">{ch.label}</p>
              <p className="mt-2 text-xl font-medium break-words">
                {ch.ltr ? <bdi dir="ltr">{ch.value}</bdi> : ch.value}
              </p>
            </>
          );
          return ch.href ? (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-panel bg-shell p-7 transition-colors hover:bg-line hover:text-brand"
            >
              {body}
            </a>
          ) : (
            <div key={ch.label} className="rounded-panel bg-shell p-7">
              {body}
            </div>
          );
        })}
      </section>

      <section className="mt-12 md:mt-16">
        <iframe
          title={c.mapTitle}
          src={contact.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[28rem] w-full border-0 grayscale-[0.4] md:h-[34rem]"
        />
        <div className="container-site mt-6">
          <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="btn btn-primary">
            {c.directions}
            <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
