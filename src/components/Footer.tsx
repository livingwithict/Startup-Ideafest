import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { contact, event, lwict, nav } from "../content/event";
import { Link } from "../router";

const h = "font-display text-sm font-semibold uppercase tracking-wide text-paper";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
        <div>
          <img src="/logo/LWICT.png" alt="Living with ICT" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-paper/75">{lwict}</p>
        </div>

        <div>
          <h2 className={h}>Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            {[...nav, { href: "/register", label: "Register" }].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-paper hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={h}>Get in touch</h2>
          <address className="mt-3 space-y-4 text-sm not-italic text-paper/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-paper" /><span>{contact.org}<br />{contact.address}</span></p>
            <p className="flex gap-3">
              <EnvelopeSimple className="mt-0.5 size-5 shrink-0 text-paper" />
              <span>{contact.emails.map((e) => <a key={e} href={`mailto:${e}`} className="block hover:text-paper hover:underline">{e}</a>)}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-paper" />
              <span>
                {[0, 2].map((i) => (
                  <span key={i} className="block">
                    {contact.phones.slice(i, i + 2).map((p, j) => (
                      <span key={p}>
                        {j > 0 && <span className="mx-2 text-paper/40">|</span>}
                        <a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-paper hover:underline">{p}</a>
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </p>
          </address>
        </div>
      </div>

      <p className="border-t border-paper/15 px-4 py-5 text-center text-xs text-paper/75 sm:px-6">&copy; {event.name}</p>
    </footer>
  );
}
