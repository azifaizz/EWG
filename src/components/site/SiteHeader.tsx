import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_GROUPS } from "@/lib/site";
import { Logo } from "./Logo";

const linkCls = "text-sm font-medium text-ink-foreground/85 hover:text-gold transition-colors";

function Dropdown({ id }: { id: keyof typeof NAV_GROUPS }) {
  const g = NAV_GROUPS[id];
  return (
    <div className="group relative">
      <button className={`${linkCls} flex items-center gap-1 py-6`} aria-haspopup="true">
        {g.label} <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-gold/20 bg-popover p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {g.items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-lg px-4 py-2.5 text-sm text-popover-foreground/85 hover:bg-ink-soft hover:text-gold"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const close = () => {
    setOpen(false);
    setSection(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="py-3.5 sm:py-4" onClick={close}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className={linkCls}
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-gold" }}
          >
            Home
          </Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-gold" }}>
            About
          </Link>
          <Dropdown id="services" />
          <Dropdown id="partners" />
          <Dropdown id="resources" />
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-gold" }}>
            Contact
          </Link>
        </nav>
        <Link to="/callback" className="btn-gold hidden lg:inline-flex">
          Get Started
        </Link>
        <button
          className="grid size-11 place-items-center rounded-lg text-ink-foreground hover:text-gold transition-colors lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gold/15 bg-ink px-4 sm:px-6 pb-6 lg:hidden">
          {(
            [
              ["Home", "/"],
              ["About", "/about"],
            ] as const
          ).map(([l, to]) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className="block border-b border-ink-foreground/10 py-4 text-ink-foreground"
            >
              {l}
            </Link>
          ))}
          {(Object.keys(NAV_GROUPS) as (keyof typeof NAV_GROUPS)[]).map((k) => (
            <div key={k} className="border-b border-ink-foreground/10">
              <button
                onClick={() => setSection(section === k ? null : k)}
                className="flex w-full items-center justify-between py-4 text-ink-foreground"
              >
                {NAV_GROUPS[k].label}
                <ChevronDown
                  className={`size-4 text-gold transition-transform ${section === k ? "rotate-180" : ""}`}
                />
              </button>
              {section === k && (
                <div className="pb-3 pl-3">
                  {NAV_GROUPS[k].items.map((it) => (
                    <Link
                      key={it.to}
                      to={it.to}
                      onClick={close}
                      className="block py-2 text-sm text-ink-muted hover:text-gold"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={close}
            className="block border-b border-ink-foreground/10 py-4 text-ink-foreground"
          >
            Contact
          </Link>
          <Link to="/callback" onClick={close} className="btn-gold mt-6 w-full">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
