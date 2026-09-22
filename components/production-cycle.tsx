import type { Dictionary } from "@/lib/dictionary";

/**
 * The production chain as a real ordered sequence: numbered markers joined by a line,
 * running across on large screens and down the start edge on small ones.
 */
export function ProductionCycle({ cycle }: { cycle: Dictionary["cycle"] }) {
  return (
    <section className="on-dark bg-brand-deep text-white">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="display text-4xl md:text-5xl lg:col-span-6">{cycle.title}</h2>
          <p className="max-w-xl text-lg text-white/70 lg:col-span-5 lg:col-start-8">{cycle.body}</p>
        </div>

        <ol className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-5 lg:gap-6">
          {cycle.steps.map((step, i) => (
            <li key={step.title} className="relative ps-16 lg:ps-0 lg:pt-20">
              {i < cycle.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute start-[1.375rem] top-14 -bottom-8 w-px bg-sun/40 lg:start-14 lg:top-[1.375rem] lg:bottom-auto lg:h-px lg:w-[calc(100%-2.5rem)]"
                />
              )}
              <span
                aria-hidden
                className="absolute start-0 top-0 grid size-11 place-items-center rounded-full bg-sun text-sm font-semibold text-brand-deep tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium">{step.title}</h3>
              {step.figure && (
                <p className="mt-3">
                  <span className="display block text-[1.75rem] text-sun tabular-nums xl:text-3xl">
                    {step.figure.value}
                  </span>
                  <span className="mt-1 block text-sm text-white/70">{step.figure.label}</span>
                </p>
              )}
              <p className="mt-3 leading-relaxed text-white/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
