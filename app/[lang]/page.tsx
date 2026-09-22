import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { ProductionCycle } from "@/components/production-cycle";
import { SectionHeading } from "@/components/section-heading";
import { contact, getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      {/* Hero — the only entrance animation on the site */}
      <section className="container-site pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="display rise text-[2.6rem] sm:text-6xl lg:col-span-7 lg:text-[4.75rem]">
            {t.home.heroTitle}
          </h1>
          <div className="rise lg:col-span-5 lg:pb-2" style={{ animationDelay: "120ms" }}>
            <p className="text-lg leading-relaxed text-ink-soft">{t.home.heroBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={href(lang, "/products")} className="btn btn-primary">
                {t.home.heroCta}
                <Arrow />
              </Link>
              <Link href={href(lang, "/about")} className="btn btn-quiet">
                {t.home.heroSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div
          className="rise relative mt-10 aspect-[4/3] overflow-hidden rounded-panel bg-shell sm:aspect-[2/1] md:mt-14"
          style={{ animationDelay: "220ms" }}
        >
          <Image
            src="/media/hens-field.jpg"
            alt=""
            fill
            preload
            quality={90}
            sizes="(min-width: 1344px) 1264px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Capacity */}
        <h2 className="sr-only">{t.home.capacityTitle}</h2>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-14 lg:grid-cols-4">
          {t.capacity.map((item) => (
            <div key={item.label} className="flex flex-col border-t border-line pt-5">
              <dt className="order-2 mt-2 text-ink-soft">{item.label}</dt>
              <dd className="display order-1 text-5xl text-brand md:text-6xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Product lines */}
      <section className="container-site mt-28 md:mt-36">
        <SectionHeading title={t.home.linesTitle} body={t.home.linesBody} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href={href(lang, "/products#parent-stock")}
            className="group flex flex-col rounded-panel bg-shell p-7 md:p-10"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/media/parent-hen.png"
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-contain transition-transform duration-700 ease-out-soft group-hover:-translate-y-2"
              />
            </div>
            <h3 className="display mt-8 text-3xl">{t.lines.parent.name}</h3>
            <p className="mt-3 max-w-md text-ink-soft">{t.lines.parent.body}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-medium text-brand">
              {t.home.details}
              <Arrow />
            </span>
          </Link>

          <Link
            href={href(lang, "/products#chicken-meat")}
            className="group flex flex-col rounded-panel border border-line p-7 md:p-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-shell">
              <Image
                src="/media/whole-chicken.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="display mt-8 text-3xl">{t.lines.meat.name}</h3>
            <p className="mt-3 max-w-md text-ink-soft">{t.lines.meat.body}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-medium text-brand">
              {t.home.details}
              <Arrow />
            </span>
          </Link>
        </div>
      </section>

      <div className="mt-28 md:mt-36">
        <ProductionCycle cycle={t.cycle} />
      </div>

      {/* Etihad Group */}
      <section className="container-site mt-28 grid gap-10 md:mt-36 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="display text-4xl md:text-5xl">{t.home.etihadTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.home.etihadBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href(lang, "/about")} className="btn btn-primary">
              {t.home.etihadCta}
              <Arrow />
            </Link>
            <a href={contact.etihadHref} target="_blank" rel="noreferrer" className="btn btn-quiet">
              {t.about.etihadCta}
            </a>
          </div>
        </div>
        <div className="relative aspect-[730/420] overflow-hidden rounded-panel bg-shell lg:col-span-6 lg:col-start-7">
          <Image
            src="/media/hatching-eggs.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
