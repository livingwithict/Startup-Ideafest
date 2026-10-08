import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

/** Floating back-to-top button. A sentinel at the top of the page tells us when it has scrolled out of view. */
export default function ScrollTop() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" aria-hidden />
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
        className={`fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-lg bg-brand text-paper shadow-lg shadow-navy/25 transition-all hover:bg-brand-600 sm:bottom-8 sm:right-8 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        <ArrowUp className="size-5" weight="bold" />
      </button>
    </>
  );
}
