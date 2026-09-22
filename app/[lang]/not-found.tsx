"use client";

import { useParams } from "next/navigation";
import { NotFoundView } from "@/components/not-found-view";
import { defaultLocale, hasLocale } from "@/lib/i18n";

export default function NotFound() {
  const param = useParams<{ lang?: string }>()?.lang;
  return <NotFoundView lang={param && hasLocale(param) ? param : defaultLocale} />;
}
