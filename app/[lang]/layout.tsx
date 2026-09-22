import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Readex_Pro } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/dictionary";
import { alternates, dir, hasLocale, locales, siteUrl } from "@/lib/i18n";
import "../globals.css";

const readex = Readex_Pro({
  subsets: ["latin", "arabic"],
  axes: ["HEXP"],
  variable: "--font-readex",
  display: "swap",
});

// Only /ar and /en exist; proxy.ts routes everything else to the localized 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: `%s | ${t.company.name}` },
    description: t.meta.description,
    alternates: alternates(lang),
    openGraph: {
      siteName: t.company.name,
      locale: lang === "ar" ? "ar_IQ" : "en_GB",
      images: ["/media/hens-field.jpg"],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} dir={dir(lang)} className={`${readex.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <Header lang={lang} t={t} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
