import { ArrowUpRight, EnvelopeSimple, Globe, MapPin, Phone } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { btnLight, card, PageHead, Section, tint, type Tone } from "../components/ui";
import { contact, event } from "../content/event";

const link = "flex items-center justify-between gap-2 py-1 font-medium text-ink hover:text-brand";

function Card({ icon, tone, title, children }: { icon: ReactNode; tone: Tone; title: string; children: ReactNode }) {
  return (
    <div className={`${card} p-6`}>
      <span className={`grid size-11 place-items-center rounded-lg ${tint[tone]}`}>{icon}</span>
      <h2 className="mt-5 font-display text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-ink-dim">{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHead title="Contact" lead="Questions about exhibiting, partnering, or attending? Reach the ICT Foundation Nepal, Living with ICT, and SQUAD team." />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card tone="brand" title="Office" icon={<MapPin className="size-5" />}>
            <address className="not-italic">{contact.org}<br />{contact.address}</address>
          </Card>
          <Card tone="teal" title="Email" icon={<EnvelopeSimple className="size-5" />}>
            {contact.emails.map((e) => <a key={e} href={`mailto:${e}`} className={link}>{e}</a>)}
          </Card>
          <Card tone="brand" title="Phone" icon={<Phone className="size-5" />}>
            {contact.phones.map((p) => <a key={p} href={`tel:${p.replace(/[^+\d]/g, "")}`} className={link}>{p}</a>)}
          </Card>
          <Card tone="teal" title="Web" icon={<Globe className="size-5" />}>
            {contact.webs.map((w) => <a key={w} href={`https://${w}`} className={link}>{w}<ArrowUpRight className="size-4" /></a>)}
          </Card>
        </div>
      </Section>

      <Section alt>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl bg-navy p-8 text-paper sm:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{event.venue}</h2>
            <p className="mt-1 text-lg text-paper/80">{event.place}</p>
            <p className="mt-4 text-paper/80">{event.dates} ({event.datesBs})</p>
          </div>
          <a href={event.mapUrl} className={btnLight}>Open in Maps <ArrowUpRight weight="bold" /></a>
        </div>
      </Section>
    </>
  );
}
