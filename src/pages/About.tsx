import { Icon } from "../components/icons";
import { Badge, card, cycle, Logo, PageHead, Reveal, Section, StatRow } from "../components/ui";
import {
  conferenceTopics, event, eventHighlights, highlights, impact, lwict, objectives, organizers, workshops,
} from "../content/event";

export default function About() {
  return (
    <>
      <PageHead
        title="About the fest"
        lead="Nepal's biggest startup and innovation exhibition, and the pre-event to ICT Award 2026."
      />

      <Section title="A two-day national stage">
        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <div className={`${card} p-8 sm:p-10`}>
            <p className="text-lg leading-relaxed text-ink-dim">
              The festival unites startups, innovators, investors, students, and change-makers from all seven provinces.
              Explore ideas, witness cutting-edge innovations, and connect with the leaders shaping Nepal's startup ecosystem.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-dim">
              By combining startups, AI, space technology, STEAM education, astronomy, aerospace, robotics, and hands-on
              project development, it inspires young people to become creators, innovators, and problem-solvers.
            </p>
          </div>
          <div className="rounded-xl bg-navy p-8 text-paper sm:p-10">
            <p className="text-sm font-medium text-paper/70">When and where</p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-tight">{event.dates}</p>
            <p className="text-paper/80">{event.datesBs}</p>
            <p className="mt-6 font-display text-xl font-semibold">{event.venue}</p>
            <p className="text-paper/80">{event.place}</p>
          </div>
        </div>
      </Section>

      <section className="bg-brand text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <h2 className="text-sm font-medium text-paper/75">Our vision</h2>
            <p className="mt-4 max-w-[28ch] text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Ideas meet technology. Students meet innovation. Innovation meets opportunity.
            </p>
            <p className="mt-6 max-w-[58ch] text-lg text-paper/80">
              A common platform where participants can learn, build, demonstrate, connect, and imagine the future.
            </p>
          </Reveal>
        </div>
      </section>

      <Section title="What we want to achieve" alt>
        <div className="grid gap-5 md:grid-cols-6">
          {objectives.map((o, i) => (
            <div key={o.title} className={`${card} p-6 ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
              <Badge icon={o.icon} tone={cycle[i]} />
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{o.title}</h3>
              <p className="mt-2 text-ink-dim">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What happens at the fest">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eventHighlights.map((h, i) => (
            <div key={h.text} className={`${card} flex items-center gap-4 p-5`}>
              <Badge icon={h.icon} tone={cycle[i % cycle.length]} />
              <p className="font-medium leading-snug">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Conference and camp"
        lead="Two major segments: the Startup Exhibition, then the AI and Space Conference together with the STEAM, Astronomy and Aerospace Camp. On-the-spot games and technology activities run throughout."
        alt
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl bg-navy p-8 text-paper">
            <h3 className="font-display text-2xl font-semibold tracking-tight">AI and Space Conference</h3>
            <p className="mt-2 text-paper/80">One day, about two hours. Free for camp participants and other interested people, subject to capacity.</p>
            <ul className="mt-6 divide-y divide-paper/10 border-y border-paper/10">
              {conferenceTopics.map((t) => (
                <li key={t.text} className="flex items-center gap-3 py-3 text-sm">
                  <Icon name={t.icon} className="size-5 shrink-0 text-paper/80" />
                  {t.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${card} p-8`}>
            <h3 className="font-display text-2xl font-semibold tracking-tight">STEAM, Astronomy and Aerospace Camp</h3>
            <p className="mt-2 text-ink-dim">About 100 participants from 20 schools and colleges. Learning by doing: design, build, experiment, operate, demonstrate.</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {workshops.map((w) => (
                <li key={w.title} className="flex items-center gap-3 py-3 text-sm">
                  <Icon name={w.icon} className="size-5 shrink-0 text-brand" />
                  {w.title} Workshop
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Everything on the floor">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <li key={h.label} className={`${card} flex flex-col items-start gap-4 p-5`}>
              <Badge icon={h.icon} tone={cycle[i % cycle.length]} />
              <span className="font-display text-sm font-semibold leading-snug">{h.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Impact so far"
        lead="Startups that took part have gone on to win ICT Awards, attract funding, and scale nationwide. The fest has shaped policy discussions on digital entrepreneurship and inspired schools and colleges to launch incubation programs."
        alt
      >
        <StatRow items={impact} />
      </Section>

      <Section title="The organizers">
        <div className="grid gap-5 lg:grid-cols-3">
          {organizers.map((o, i) => (
            <div key={o.name} className={`${card} flex flex-col gap-5 p-6`}>
              <Logo {...o} />
              <h3 className="font-display text-lg font-semibold">{o.name}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">
                {i === 0 ? lwict : i === 1 ? "Co-organizer of Startup & Idea Fest and the ICT Award." : "Co-organizer. TSCM Aerospace leads the aerospace camp and showcase."}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
