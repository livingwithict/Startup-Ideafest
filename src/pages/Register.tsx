import { ArrowUpRight, CalendarBlank, MapPin } from "@phosphor-icons/react";
import { btnLight, PageHead, Section, Slots } from "../components/ui";
import { event } from "../content/event";

export default function Register() {
  return (
    <>
      <PageHead title="Register" lead="Entry is free. Register and learn more on the official portals." />

      <Section>
        <div className="rounded-xl bg-navy p-8 text-paper sm:p-14">
          <div className="max-w-[36rem]">
            <p className="font-display text-6xl font-semibold tracking-tighter sm:text-7xl">Free entry</p>
            <ul className="mt-6 space-y-2 text-lg text-paper/85">
              <li className="flex items-center gap-3"><CalendarBlank className="size-5" />{event.dates}</li>
              <li className="flex items-center gap-3"><MapPin className="size-5" />{event.venue}, {event.place}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={event.registerUrl} className={btnLight}>startupnepal.org <ArrowUpRight weight="bold" /></a>
              <a href="https://www.ictaward.org" className={btnLight}>ictaward.org <ArrowUpRight weight="bold" /></a>
            </div>
            <p className="mt-6 text-paper/80">
              The AI and Space Conference is free for STEAM camp participants and other interested people, subject to capacity.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Audience voting" lead="Vote for your favourites and follow the live tally." alt>
        <Slots icon="Trophy" count={4} note="The voting portal opens here during the fest." />
      </Section>

      <Section title="Who is taking part" lead="150+ exhibiting startups and products, and about 100 camp participants from 20 schools and colleges.">
        <Slots icon="UsersThree" count={4} note="Exhibitor and school lists will appear here once confirmed." />
      </Section>
    </>
  );
}
