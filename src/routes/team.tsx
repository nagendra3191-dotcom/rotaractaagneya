import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MemberCard } from "@/components/site/MemberCard";
import { committee } from "@/data/committee";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Meet the 40+ Rotaractors of Bangalore Aagneya — our Core Committee, Directors & Chairs, and Proud Members for RY 2026–27." },
      { property: "og:title", content: "Our Team — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "The people of Aagneya, RID 3191 — RY 2026–27." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const core = committee.filter((m) => m.category === "core");
const directors = committee.filter((m) => m.category === "director");
const members = committee.filter((m) => m.category === "member");

function Section({ eyebrow, title, list }: { eyebrow: string; title: string; list: typeof committee }) {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl text-primary leading-tight">{title}</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {list.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Rotary Year 2026–27</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            The people of <em className="text-gradient-gold">Aagneya.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
            40+ Rotaractors — leaders, learners, and lifelong friends — carrying forward a
            legacy of service under RID 3191.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 divide-y divide-border">
        <Section eyebrow="Core Committee" title="Stewards of the year." list={core} />
        <Section eyebrow="Directors & Chairs" title="Leading every avenue." list={directors} />
        <Section eyebrow="Proud Members" title="The heart of our fellowship." list={members} />
      </div>

      <Footer />
    </div>
  );
}
