import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-header";
import { contact, getDictionary } from "@/lib/dictionary";
import { alternates, hasLocale, href } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.about.title, description: t.about.intro, alternates: alternates(lang, "/about") };
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const a = t.about;

  return (
    <>
      <PageHeader title={a.title} intro={a.intro} />

      <section className="container-site">
        <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-shell sm:aspect-[21/9]">
          <Image
            src="/media/hens-field.jpg"
            alt=""
            fill
            preload
            sizes="(min-width: 1344px) 1264px, 100vw"
            className="object-cover object-[center_70%]"
          />
        </div>
      </section>

      {/* Story */}
      <section className="container-site mt-20 grid gap-8 md:mt-28 lg:grid-cols-12">
        <h2 className="display text-4xl md:text-5xl lg:col-span-5">{a.storyTitle}</h2>
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          {a.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Mission and vision */}
      <section className="container-site mt-20 grid gap-4 md:mt-28 lg:grid-cols-2">
        <div className="rounded-panel bg-shell p-8 md:p-12">
          <h2 className="display text-3xl md:text-4xl">{a.missionTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{a.mission}</p>
        </div>
        <div className="rounded-panel bg-brand-deep p-8 text-white md:p-12">
          <h2 className="display text-3xl md:text-4xl">{a.visionTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">{a.vision}</p>
        </div>
      </section>

      {/* Values */}
      <section className="container-site mt-20 grid gap-10 md:mt-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-4xl md:text-5xl">{a.valuesTitle}</h2>
          <p className="mt-4 text-lg text-ink-soft">{a.valuesBody}</p>
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
          {a.values.map((value) => (
            <div key={value.title} className="border-t border-line pt-5">
              <dt className="text-xl font-medium">{value.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">{value.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Technology and quality */}
      <section className="container-site mt-20 grid gap-10 md:mt-28 lg:grid-cols-12 lg:items-center">
        <div className="relative aspect-[636/367] overflow-hidden rounded-panel bg-shell lg:col-span-6">
          <Image
            src="/media/laying-hens.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="display text-4xl md:text-5xl">{a.qualityTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{a.quality}</p>
        </div>
      </section>

      {/* Etihad Group */}
      <section className="container-site mt-20 md:mt-28">
        <div className="grid gap-8 rounded-panel border border-line p-8 md:p-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="display text-3xl md:text-4xl">{a.etihadTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{a.etihad}</p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <a href={contact.etihadHref} target="_blank" rel="noreferrer" className="btn btn-primary">
              {a.etihadCta}
              <Arrow className="-rotate-45 rtl:rotate-45" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-site mt-12 flex flex-wrap gap-3">
        <Link href={href(lang, "/products")} className="btn btn-quiet">
          {t.home.heroCta}
          <Arrow />
        </Link>
        <Link href={href(lang, "/contact")} className="btn btn-quiet">
          {t.nav.contact}
        </Link>
      </section>
    </>
  );
}
