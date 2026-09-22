"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Item = { href: string; label: string };

export function HeaderNav({
  lang,
  items,
  contact,
  labels,
}: {
  lang: Locale;
  items: Item[];
  contact: Item;
  labels: { switchLang: string; switchLangLabel: string; menu: string; close: string; main: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const other = lang === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  const isActive = (target: string) =>
    target === `/${lang}` ? pathname === target : pathname.startsWith(target);

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex" aria-label={labels.main}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className="rounded-full px-4 py-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink aria-[current=page]:bg-shell aria-[current=page]:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href={switchHref}
          hrefLang={other}
          lang={other}
          aria-label={labels.switchLangLabel}
          className="rounded-full px-3 py-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
        >
          {labels.switchLang}
        </Link>
        <Link
          href={contact.href}
          aria-current={isActive(contact.href) ? "page" : undefined}
          className="btn btn-primary hidden !py-2.5 sm:inline-flex"
        >
          {contact.label}
        </Link>
        <button
          ref={toggle}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative grid size-11 place-items-center rounded-full bg-shell lg:hidden"
        >
          <span className="sr-only">{open ? labels.close : labels.menu}</span>
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded bg-ink transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* The header's backdrop blur makes it the containing block for this fixed panel, so it needs an explicit height. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-18 z-30 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden"
      >
        <nav className="container-site flex flex-col py-6" aria-label={labels.main}>
          {[...items, contact].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="display border-b border-line py-5 text-3xl aria-[current=page]:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
