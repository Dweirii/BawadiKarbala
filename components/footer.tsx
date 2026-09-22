import Image from "next/image";
import Link from "next/link";
import { contact, type Dictionary } from "@/lib/dictionary";
import { href, type Locale } from "@/lib/i18n";
import { navItems } from "./nav-links";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="on-dark mt-24 bg-ink text-white/70 md:mt-32">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-block rounded-card bg-white p-3">
            <Image src="/brand/logo.png" alt={t.company.name} width={1000} height={771} className="h-16 w-auto" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">{t.company.tagline}</p>
          <a
            href={contact.etihadHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            {t.footer.group}
          </a>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-white">{t.footer.explore}</h2>
          <ul className="mt-4 space-y-2.5">
            {[...navItems(t.nav), { path: "/contact", label: t.nav.contact }].map((item) => (
              <li key={item.path}>
                <Link href={href(lang, item.path)} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-medium text-white">{t.footer.reach}</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={contact.phoneHref} dir="ltr" className="transition-colors hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} dir="ltr" className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>{t.company.address}</li>
            <li>{t.company.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.company.legal}
          </p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
