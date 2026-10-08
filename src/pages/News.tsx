import { Badge, card, PageHead, Section, type Tone } from "../components/ui";
import type { IconName } from "../components/icons";

const slots: { title: string; body: string; icon: IconName; tone: Tone }[] = [
  { title: "Press coverage", body: "Articles from TV, print, and digital media.", icon: "Newspaper", tone: "brand" },
  { title: "Photo gallery", body: "Pictures from the exhibition floor and workshops.", icon: "Camera", tone: "teal" },
  { title: "Videos", body: "Recaps, interviews, and demonstrations.", icon: "VideoCamera", tone: "flare" },
];

export default function News() {
  return (
    <>
      <PageHead title="News & media" lead="Coverage, photos, and announcements from Startup & Idea Fest." />
      <Section title="Coming soon">
        <div className="grid gap-5 md:grid-cols-3">
          {slots.map((s) => (
            <div key={s.title} className={`${card} p-6`}>
              <Badge icon={s.icon} tone={s.tone} size="lg" />
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink-dim">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
