import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart, Users, Award as AwardIcon, Globe2, Sparkles, GraduationCap, Megaphone } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rotaract Bangalore Aagneya" },
      { name: "description", content: "138+ projects across six service avenues in RY 2025–26 — community service, professional development, international, NextGen, club service, and public image." },
      { property: "og:title", content: "Projects — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Signature initiatives from Aagneya, RID 3191." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const avenues = [
  { icon: Users, name: "Club Service", count: 19, color: "from-sky/40 to-primary" },
  { icon: Heart, name: "Community Service", count: 57, color: "from-gold to-gold-soft" },
  { icon: AwardIcon, name: "Professional Development", count: 6, color: "from-primary to-navy-deep" },
  { icon: Globe2, name: "International Service", count: 15, color: "from-sky to-primary" },
  { icon: GraduationCap, name: "NextGen Service", count: 19, color: "from-gold-soft to-gold" },
  { icon: Megaphone, name: "Public Image & Relations", count: 22, color: "from-navy-deep to-primary" },
];

const signature = [
  { t: "Knowledge Kits", a: "Community Service", d: "Distributing curated educational kits to underserved students across Bengaluru schools." },
  { t: "Jala Dhara", a: "Community Service", d: "Bringing clean drinking water access to communities that need it most." },
  { t: "Saptarang", a: "Club Service", d: "A signature seven-day festival celebrating fellowship, culture, and service." },
  { t: "Print to Learn", a: "Community Service", d: "Printing and distributing textbooks to schools that lack learning materials." },
  { t: "Project TechSakshar", a: "NextGen Service", d: "Digital literacy for underserved youth — bridging the technology gap." },
  { t: "Nutri Smile", a: "Community Service", d: "Fighting childhood malnutrition through nutrition drives and awareness camps." },
  { t: "Stitch & Smile", a: "Professional Development", d: "Skill-building workshops in tailoring for women's economic empowerment." },
  { t: "Wheels of Hope", a: "Community Service", d: "Mobility aids for those in need — restoring dignity and independence." },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Rotary Year 2025–26</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            138 projects. <em className="text-gradient-gold">Six avenues.</em> One mission.
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
            From grassroots community service to global collaboration — every project a
            step toward a more equitable, connected, and empowered world.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Service Avenues</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Impact across every <em className="text-gradient-gold">avenue.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {avenues.map((a) => (
              <div key={a.name} className={`group rounded-2xl p-8 bg-gradient-to-br ${a.color} text-white shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500`}>
                <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <a.icon size={22} />
                </div>
                <div className="mt-6 font-display text-5xl">{a.count}</div>
                <div className="mt-2 text-sm text-white/85 uppercase tracking-[0.15em]">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Signature Initiatives</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Projects that <em className="text-gradient-gold">defined our year.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signature.map((p) => (
              <div key={p.t} className="group rounded-2xl bg-white p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                    <Sparkles size={18} className="text-navy-deep" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.a}</span>
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
