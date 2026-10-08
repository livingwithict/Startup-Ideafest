import { useEffect, useState, type AnchorHTMLAttributes } from "react";

const subscribe = () => window.dispatchEvent(new Event("navigate"));

// eslint-disable-next-line react-refresh/only-export-components -- tiny router, one file
export function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener("popstate", sync);
    window.addEventListener("navigate", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("navigate", sync);
    };
  }, []);
  return path.replace(/\/+$/, "") || "/";
}

export function Link({ href, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        history.pushState(null, "", href);
        subscribe();
        window.scrollTo(0, 0);
      }}
      {...rest}
    />
  );
}
