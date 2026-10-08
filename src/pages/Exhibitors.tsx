import { Badge, card, cycle, Flourish, PageHead, Section, Slots } from "../components/ui";
import { exhibitorGroups, showcase } from "../content/event";

export default function Exhibitors() {
  return (
    <>
      <PageHead
        title="Exhibitors"
        lead="150+ startups and innovative products, industry stalls, and aerospace showcases across both days."
      />

      <Section title="On the floor" lead="Advanced technology and aerospace products to explore up close.">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {showcase.map((s, i) => (
            <li key={s.label} className={`${card} flex flex-col items-start gap-4 p-5`}>
              <Badge icon={s.icon} tone={cycle[i % cycle.length]} />
              <span className="font-display font-semibold">{s.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {exhibitorGroups.map((g, i) => (
        <Section key={g.title} alt={i % 2 === 0}>
          <div className="mb-8 flex flex-col items-center text-center">
            <Badge icon={g.icon} tone={cycle[i % cycle.length]} size="lg" />
            <h2 className="mt-4 text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl">{g.title}</h2>
            <Flourish />
          </div>
          <Slots icon={g.icon} count={4} note="Logos will appear here once the list is confirmed." />
        </Section>
      ))}

      <Section title="Participating schools and colleges" lead="About 100 students from 20 schools and colleges join the STEAM, Astronomy and Aerospace Camp.">
        <Slots icon="GraduationCap" count={8} note="The participating institutions will be listed here once confirmed." />
      </Section>
    </>
  );
}
