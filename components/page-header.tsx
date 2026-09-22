import type { ReactNode } from "react";

export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="container-site pt-12 pb-10 md:pt-20 md:pb-14">
      <h1 className="display text-5xl md:text-7xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg text-ink-soft md:text-xl">{intro}</p>}
      {children}
    </section>
  );
}
