import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart, Users, Award as AwardIcon, Globe2, Sparkles, GraduationCap, Megaphone } from "lucide-react";
import p1 from "@/assets/projects/proj-1.png.asset.json";
import p2 from "@/assets/projects/proj-2.png.asset.json";
import p3 from "@/assets/projects/proj-3.png.asset.json";
import p4 from "@/assets/projects/proj-4.png.asset.json";
import p5 from "@/assets/projects/proj-5.png.asset.json";
import p6 from "@/assets/projects/proj-6.png.asset.json";
import p7 from "@/assets/projects/proj-7.png.asset.json";
import p8 from "@/assets/projects/proj-8.png.asset.json";
import p9 from "@/assets/projects/proj-9.png.asset.json";
import p10 from "@/assets/projects/proj-10.png.asset.json";
import p11 from "@/assets/projects/proj-11.png.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rotaract Bangalore Aagneya" },
      { name: "description", content: "138+ projects across six service avenues — signature initiatives from Rotaract Bangalore Aagneya, RID 3191." },
      { property: "og:title", content: "Projects — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Signature initiatives from Aagneya, RID 3191." },
      { property: "og:image", content: p1.url },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const avenues = [
  { icon: Users, name: "Club Service", count: 19, color: "from-sky-500/40 to-primary" },
  { icon: Heart, name: "Community Service", count: 57, color: "from-gold to-gold-soft" },
  { icon: AwardIcon, name: "Professional Development", count: 6, color: "from-primary to-navy-deep" },
  { icon: Globe2, name: "International Service", count: 15, color: "from-sky-500 to-primary" },
  { icon: GraduationCap, name: "NextGen Service", count: 19, color: "from-gold-soft to-gold" },
  { icon: Megaphone, name: "Public Image & Relations", count: 22, color: "from-navy-deep to-primary" },
];

const projects = [
  { img: p1, t: "Knowledge Kits", a: "Community Service", d: "Distributing curated educational kits to underserved students across Bengaluru schools." },
  { img: p2, t: "Jala Dhara", a: "Community Service", d: "Bringing clean drinking water access to communities that need it most." },
  { img: p3, t: "Saptarang", a: "Club Service", d: "A signature seven-day festival celebrating fellowship, culture, and service." },
  { img: p4, t: "Print to Learn", a: "Community Service", d: "Printing and distributing textbooks to schools that lack learning materials." },
  { img: p5, t: "Project TechSakshar", a: "NextGen Service", d: "Digital literacy for underserved youth — bridging the technology gap." },
  { img: p6, t: "Nutri Smile", a: "Community Service", d: "Fighting childhood malnutrition through nutrition drives and awareness camps." },
  { img: p7, t: "Stitch & Smile", a: "Professional Development", d: "Skill-building workshops in tailoring for women's economic empowerment." },
  { img: p8, t: "Wheels of Hope", a: "Community Service", d: "Mobility aids for those in need — restoring dignity and independence." },
  { img: p9, t: "Green Aagneya", a: "Community Service", d: "Tree plantation and environmental drives across Bengaluru green belts." },
  { img: p10, t: "Blood For Life", a: "Community Service", d: "Blood donation camps in partnership with leading Bengaluru hospitals." },
  { img: p11, t: "Interact Ignite", a: "NextGen Service", d: "Mentorship and leadership programmes with our sponsored Interact clubs." },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Rotary Year 2025–26 · Zone Rafale</div>
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
            {projects.map((p) => (
              <div key={p.t} className="group rounded-2xl bg-white shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-hero-gradient overflow-hidden">
                  <img
                    src={p.img.url}
                    alt={p.t}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-navy-deep/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {p.a}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                      <Sparkles size={14} className="text-navy-deep" />
                    </div>
                    <h3 className="font-display text-xl text-primary">{p.t}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
