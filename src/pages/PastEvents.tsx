import { CalendarBlank, Clock, MapPin } from "@phosphor-icons/react";
import { card, PageHead, Section } from "../components/ui";
import { event, pastEvents } from "../content/event";

export default function PastEvents() {
  const [latest, ...earlier] = pastEvents;
  return (
    <>
      <PageHead title="Past events" lead="Startup & Idea Fest has run every year since 2021." />

      <Section title="Last edition">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between rounded-xl bg-navy p-8 text-paper sm:p-10">
            <div>
              <p className="font-display text-7xl font-semibold tracking-tighter sm:text-8xl">{latest.year}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">{latest.title}</h2>
            </div>
            <ul className="mt-8 space-y-2 text-paper/85">
              <li className="flex items-center gap-3"><CalendarBlank className="size-5" />13-14 November 2025 ({latest.detail})</li>
              <li className="flex items-center gap-3"><Clock className="size-5" />10:00 AM to 5:00 PM</li>
              <li className="flex items-center gap-3"><MapPin className="size-5" />{latest.note}</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-line bg-navy">
            <div className="aspect-video w-full">
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
        </div>
      </Section>

      <Section title="Every edition since the start" alt>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {earlier.map((e) => (
            <li key={e.year} className={`${card} p-6`}>
              <p className="font-display text-5xl font-semibold tracking-tighter text-brand">{e.year}</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{e.title}</h3>
              {e.note && <p className="mt-2 text-sm text-ink-dim">{e.note}</p>}
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
