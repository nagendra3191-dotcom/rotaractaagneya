import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clubLockup from "@/assets/brand/club-lockup.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/projects", label: "Projects" },
  { to: "/awards", label: "Awards" },
  { to: "/statistics", label: "Statistics" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/90 border-b border-white/10 py-3"
          : "bg-navy-deep/40 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0 min-w-0">
          <img
            src={clubLockup.url}
            alt="Rotaract Club of Bangalore Aagneya"
            className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain transition-transform group-hover:scale-105"
            style={{ filter: "brightness(1.1)" }}
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-base lg:text-lg text-white tracking-wide truncate">Rotaract Club of Bangalore Aagneya</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">R.I. District 3191 · RY 2026–27</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-white/85 hover:text-gold-soft transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-gold-soft" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
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
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-gold-soft text-base"
                activeProps={{ className: "text-gold-soft" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
