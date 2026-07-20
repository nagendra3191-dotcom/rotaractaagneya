import { Link, useRouterState } from "@tanstack/react-router";
import { Droplet } from "lucide-react";

export function BloodDonationFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/blood-donation") return null;
  return (
    <Link
      to="/blood-donation"
      aria-label="Blood Donation"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-900/40 pl-4 pr-5 py-4 transition-all hover:-translate-y-1 border-2 border-white/20"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60 animate-ping" />
        <Droplet size={18} className="relative fill-white" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold tracking-wide">Donate Blood</span>
    </Link>
  );
}
