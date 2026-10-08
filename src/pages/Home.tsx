import { ArrowRight, CalendarBlank, Clock, MapPin, Ticket } from "@phosphor-icons/react";
import HeroArt from "../components/HeroArt";
import { Icon } from "../components/icons";
import { Badge, btnGhost, btnLight, btnPrimary, card, cycle, Logo, Reveal, Section, StatRow } from "../components/ui";
import {
  conferenceTopics, event, exhibitorGroups, highlights, organizers, partners, segments, stats, workshops,
} from "../content/event";
import { Link } from "../router";

export default function Home() {
  return (
    <>
      <section className="grid-bg border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[600px] lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Where <span className="text-brand">ideas</span> meet technology.
            </h1>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg text-ink-dim sm:text-xl">{event.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register" className={btnPrimary}>Register now <ArrowRight weight="bold" /></Link>
              <Link href="/about" className={btnGhost}>Explore the fest</Link>
            </div>
            <dl className="mt-10 grid max-w-xl gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <CalendarBlank className="mt-0.5 size-5 shrink-0 text-brand" />
                <div><dt className="sr-only">Dates</dt><dd className="font-display font-semibold">{event.dates}<br /><span className="text-sm font-normal text-ink-dim">{event.datesBs}</span></dd></div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <div><dt className="sr-only">Venue</dt><dd className="font-display font-semibold">{event.venue}<br /><span className="text-sm font-normal text-ink-dim">{event.place}</span></dd></div>
              </div>
            </dl>
          </div>
          <div className="mx-auto hidden aspect-square w-full max-w-[480px] lg:block"><HeroArt /></div>
        </div>
      </section>

      <section className="bg-bg py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6"><StatRow items={stats} /></div>
      </section>

      {/* the page's one marquee */}
      <div className="marquee overflow-hidden bg-bg pb-14" aria-label="Event highlights">
        <ul className="marquee-track flex w-max gap-3">
          {[...highlights, ...highlights].map((h, i) => (
            <li key={i} aria-hidden={i >= highlights.length} className="flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2.5 text-sm font-medium text-ink">
              <Icon name={h.icon} className="size-4 text-brand" />
              {h.label}
            </li>
          ))}
        </ul>
      </div>

      <Section title="Three experiences, one venue" alt>
        <div className="grid gap-5 md:grid-cols-3">
          {segments.map((s) => (
            <div key={s.title} className={`${card} p-8`}>
              <span className="grid size-12 place-items-center rounded-lg bg-brand-50 text-brand">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-ink-dim">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Highlights of Startup & Idea Fest 2025">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-line bg-navy shadow-lg shadow-navy/10">
          <div className="aspect-video">
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${event.youtubeId}`}
              title="Startup & Idea Fest 2025 highlights"
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <div className="grid overflow-hidden rounded-xl bg-navy text-paper lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 sm:p-12">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">AI and Space Conference</h2>
                <p className="mt-4 max-w-[40ch] text-lg text-paper/80">Hear from experts and discuss where AI and space technology are heading.</p>
                <ul className="mt-8 flex flex-wrap gap-2 text-sm font-medium">
                  <li className="flex items-center gap-2 rounded-lg bg-paper/10 px-3.5 py-2"><Clock /> About 2 hours</li>
                  <li className="flex items-center gap-2 rounded-lg bg-paper/10 px-3.5 py-2"><CalendarBlank /> One day</li>
                  <li className="flex items-center gap-2 rounded-lg bg-paper/10 px-3.5 py-2"><Ticket /> Free entry</li>
                </ul>
              </div>
              <ol className="divide-y divide-paper/10 border-t border-paper/10 lg:border-l lg:border-t-0">
                {conferenceTopics.map((t) => (
                  <li key={t.text} className="flex items-center gap-4 px-6 py-4 sm:px-8">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-paper/10"><Icon name={t.icon} className="size-5" /></span>
                    <span className="font-medium">{t.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        title="STEAM, Astronomy and Aerospace Camp"
        lead="About 100 students from 20 schools and colleges learn by doing: they design, build, operate, and demonstrate real projects."
      >
        <div className="grid gap-5 md:grid-cols-6">
          {workshops.map((w, i) => (
            <div key={w.title} className={`${card} p-6 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}>
              <div className="flex items-start justify-between">
                <Badge icon={w.icon} tone={cycle[i]} />
                <span className="font-mono text-sm text-ink-dim">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{w.title} Workshop</h3>
              <p className="mt-2 text-ink-dim">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Who is exhibiting" lead="Award semi-finalists, community partners, and industry stalls." alt>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exhibitorGroups.map((g, i) => (
            <Link key={g.title} href="/exhibitors" className={`${card} group flex items-center gap-4 p-5 transition-colors hover:border-brand`}>
              <Badge icon={g.icon} tone={cycle[i % cycle.length]} />
              <span className="font-display font-semibold leading-snug">{g.title}</span>
              <ArrowRight className="ml-auto size-5 shrink-0 text-ink-dim transition-transform group-hover:translate-x-1 group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Organizers and partners">
        <div className="space-y-12 text-center">
          <div>
            <p className="mb-4 text-sm font-medium text-ink-dim">Jointly organized by</p>
            <div className="flex flex-wrap justify-center gap-4">
              {organizers.map((o) => <Logo key={o.name} {...o} />)}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-12">
            {partners.slice(0, 3).map((p) => (
              <div key={p.role}>
                <p className="mb-4 text-sm font-medium text-ink-dim">{p.role}</p>
                <div className="flex justify-center">{p.items.map((it) => <Logo key={it.name} {...it} />)}</div>
              </div>
            ))}
          </div>
          {partners[3] && (
            <div>
              <p className="mb-4 text-sm font-medium text-ink-dim">{partners[3].role}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {partners[3].items.map((it) => <Logo key={it.name} {...it} />)}
              </div>
            </div>
          )}
        </div>
      </Section>

      <section className="bg-bg px-4 pb-16 sm:px-6 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-navy text-paper">
          <div className="absolute right-12 top-1/2 hidden size-80 -translate-y-1/2 lg:block" aria-hidden><HeroArt onDark /></div>
          <div className="relative p-8 sm:p-14 lg:max-w-[62%]">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ideas meet technology. Students meet innovation. Innovation meets opportunity.
            </h2>
            <p className="mt-4 text-lg text-paper/80">{event.dates} at {event.venue}. Free entry.</p>
            <Link href="/register" className={`${btnLight} mt-8`}>Register now <ArrowRight weight="bold" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
