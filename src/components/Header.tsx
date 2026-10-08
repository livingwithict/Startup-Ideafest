import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { event, nav } from "../content/event";
import { Link, usePath } from "../router";
import { btnPrimary } from "./ui";

export default function Header() {
  const path = usePath();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkCls = (href: string) =>
    `rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:text-brand ${path === href ? "bg-surface text-brand" : "text-ink-dim"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" onClick={close} className="shrink-0">
          <img src="/logo/Startup-and-Idea-Fest-Logo.png" alt={event.name} className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)} aria-current={path === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/register" className={`${btnPrimary} ml-3 !py-2.5`}>Register now</Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <List className="size-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-line bg-paper px-4 pb-5 pt-3 lg:hidden">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className={`py-3 ${linkCls(l.href)}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/register" onClick={close} className={`${btnPrimary} mt-2 justify-center`}>Register now</Link>
        </nav>
      )}
    </header>
  );
}
