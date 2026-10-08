/* eslint-disable react-refresh/only-export-components -- shared style tokens live beside the components that use them */
import { ImageSquare } from "@phosphor-icons/react";
import { useEffect, useRef, type ReactNode } from "react";
import { Icon, type IconName } from "./icons";
import HeroArt from "./HeroArt";

/*
 * Shape rule: buttons and badges are rounded-lg, cards and panels are rounded-xl.
 * Colour rule: brand blue leads, teal supports, flare is a rare third. Cards are white with a hairline border.
 */
export type Tone = "brand" | "teal" | "flare";

export const tint: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand",
  teal: "bg-teal-50 text-teal",
  flare: "bg-flare-50 text-flare",
};
export const cycle: Tone[] = ["brand", "teal", "brand", "flare"];

export const card = "rounded-xl border border-line bg-paper";
export const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-brand-600";
export const btnGhost =
  "inline-flex items-center gap-2 rounded-lg border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-paper";
export const btnLight =
  "inline-flex items-center gap-2 rounded-lg bg-paper px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-brand-50";

/** Short fade-and-rise when scrolled into view (IntersectionObserver, no scroll listener). */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.setAttribute("data-in", "");
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Badge({ icon, tone = "brand", size = "md" }: { icon: IconName; tone?: Tone; size?: "md" | "lg" }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-lg ${size === "lg" ? "size-14" : "size-11"} ${tint[tone]}`}>
      <Icon name={icon} className={size === "lg" ? "size-7" : "size-5"} weight="regular" />
    </span>
  );
}

/** Subtle accent rule under section titles. */
export function Flourish() {
  return <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-brand/60" aria-hidden />;
}

/** Page band. `alt` swaps to the tinted surface so bands alternate. */
export function Section({ id, title, lead, children, alt }: { id?: string; title?: string; lead?: ReactNode; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={alt ? "border-y border-line bg-surface" : "bg-bg"}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        {(title || lead) && (
          <Reveal className="mb-10 text-center">
            {title && (
              <h2 className="text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">{title}</h2>
            )}
            {title && <Flourish />}
            {lead && <p className={`mt-3 max-w-[64ch] text-pretty text-lg leading-relaxed text-ink-dim mx-auto`}>{lead}</p>}
          </Reveal>
        )}
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

export function PageHead({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="grid-bg relative overflow-hidden border-b border-line bg-paper">
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:py-20">
        <div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-[56ch] text-pretty text-lg text-ink-dim">{lead}</p>
        </div>
        <div className="hidden h-56 lg:block" aria-hidden><HeroArt /></div>
      </div>
    </section>
  );
}

/** Big-number row, divided by hairlines. */
export function StatRow({ items }: { items: readonly { value: string; label: string }[] }) {
  return (
    <dl className={`${card} grid grid-cols-2 lg:grid-cols-4`}>
      {items.map((s, i) => (
        <div key={s.label} className={`p-6 sm:p-8 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
          <dd className="font-display text-4xl font-semibold tracking-tight text-brand sm:text-5xl">{s.value}</dd>
          <dt className="mt-1 text-sm text-ink-dim">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/** Empty state for content the organizers haven't supplied yet: a grid of dashed slots. */
export function Slots({ icon, count = 8, note }: { icon: IconName; count?: number; note: string }) {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="grid aspect-[3/2] w-40 shrink-0 sm:w-44 place-items-center rounded-xl border border-dashed border-ink-dim/40 bg-paper text-ink-dim/40">
            <Icon name={icon} className="size-8" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-ink-dim">{note}</p>
    </div>
  );
}

/** Partner logo slot: fixed 3:2 box showing the logo, or an empty image placeholder until one is supplied. */
export function Logo({ name, logo }: { name: string; mark?: string; logo?: string }) {
  return (
    <div className={`${card} relative grid aspect-[3/2] w-40 shrink-0 sm:w-44 place-items-center overflow-hidden p-4`} role="img" aria-label={name}>
      {logo ? (
        <img src={logo} alt="" className="absolute inset-4 size-[calc(100%-2rem)] object-contain" />
      ) : (
        <ImageSquare className="size-8 text-ink-dim/40" weight="light" />
      )}
    </div>
  );
}
