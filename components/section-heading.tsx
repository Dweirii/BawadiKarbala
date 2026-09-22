import type { ReactNode } from "react";

export function SectionHeading({
  title,
  body,
  action,
}: {
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="display text-4xl md:text-5xl">{title}</h2>
        {body && <p className="mt-4 text-lg text-ink-soft">{body}</p>}
      </div>
      {action}
    </div>
  );
}
