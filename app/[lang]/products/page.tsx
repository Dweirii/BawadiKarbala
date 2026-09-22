import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-header";
import { getDictionary, type Dictionary } from "@/lib/dictionary";
import { alternates, hasLocale, href } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.products.title, description: t.products.intro, alternates: alternates(lang, "/products") };
}

function Facts({ facts }: { facts: Dictionary["products"]["parent"]["facts"] }) {
  return (
    <dl className="mt-8">
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-col border-t border-line py-4 last:border-b">
          <dt className="order-2 text-ink-soft">{fact.label}</dt>
          <dd className="order-1 text-xl font-medium text-brand">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function Products({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const p = t.products;

  return (
    <>
      <PageHeader title={p.title} intro={p.intro}>
        <nav className="mt-8 flex flex-wrap gap-3" aria-label={p.title}>
          <a href="#parent-stock" className="btn btn-quiet">
            {t.lines.parent.name}
          </a>
          <a href="#chicken-meat" className="btn btn-quiet">
            {t.lines.meat.name}
          </a>
        </nav>
      </PageHeader>

      {/* Parent-stock chickens */}
      <section id="parent-stock" className="container-site grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="relative aspect-square overflow-hidden rounded-panel bg-shell">
            <Image
              src="/media/parent-hen.png"
              alt=""
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain p-10 md:p-16"
            />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          <h2 className="display text-4xl md:text-5xl">{t.lines.parent.name}</h2>
          <p className="mt-6 text-xl leading-relaxed">{p.parent.lead}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.parent.body}</p>
          <Facts facts={p.parent.facts} />
        </div>
      </section>

      <section className="container-site mt-4 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[730/420] overflow-hidden rounded-panel bg-shell">
          <Image src="/media/hatching-eggs.jpg" alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="relative aspect-[730/420] overflow-hidden rounded-panel bg-shell">
          <Image src="/media/laying-hens.jpg" alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Chicken meat */}
      <section id="chicken-meat" className="container-site mt-24 grid gap-10 md:mt-32 lg:grid-cols-12">
        <div className="grid grid-cols-2 gap-4 lg:order-2 lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-shell">
            <Image
              src="/media/broiler.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-contain p-6 md:p-10"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-shell">
            <Image
              src="/media/whole-chicken.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:order-1 lg:col-span-5 lg:self-center">
          <h2 className="display text-4xl md:text-5xl">{t.lines.meat.name}</h2>
          <p className="mt-6 text-xl leading-relaxed">{p.meat.lead}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.meat.body}</p>
          <Facts facts={p.meat.facts} />
        </div>
      </section>

      <section className="container-site mt-16 md:mt-20">
        <Link href={href(lang, "/contact")} className="btn btn-primary">
          {p.inquire}
          <Arrow />
        </Link>
      </section>
    </>
  );
}
