import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clubLogo from "@/assets/brand/club-logo.jpg.asset.json";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/people", label: "Members" },
  { href: "/#awards", label: "Awards" },
  { href: "/#impact", label: "Impact" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/85 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-gold/60 shadow-gold-glow transition-transform group-hover:scale-105">
            <img src={clubLogo.url} alt="Rotaract Bangalore Aagneya" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-white tracking-wide">Aagneya</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Rotaract · RID 3191</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/85 hover:text-gold-soft transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#join"
            className="inline-flex items-center rounded-full bg-gold-gradient px-5 py-2 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition"
          >
            Join Us
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 px-6 py-6">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-gold-soft text-base"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-navy-deep"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
