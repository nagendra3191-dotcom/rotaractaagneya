import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart, Users, Award as AwardIcon, Globe2, Sparkles, GraduationCap, Megaphone } from "lucide-react";
import p1 from "@/assets/projects-new/np-1.jpg.asset.json";
import p2 from "@/assets/projects-new/np-2.jpg.asset.json";
import p3 from "@/assets/projects-new/np-3.jpg.asset.json";
import p4 from "@/assets/projects-new/np-4.jpg.asset.json";
import p5 from "@/assets/projects-new/np-5.jpg.asset.json";
import p6 from "@/assets/projects-new/np-6.jpg.asset.json";
import p7 from "@/assets/projects-new/np-7.jpg.asset.json";
import p8 from "@/assets/projects-new/np-8.jpg.asset.json";
import p9 from "@/assets/projects-new/np-9.jpg.asset.json";
import p10 from "@/assets/projects-new/np-10.jpg.asset.json";
import p11 from "@/assets/projects-new/np-11.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rotaract Bangalore Aagneya" },
      { name: "description", content: "138+ projects across six service avenues — signature initiatives from Rotaract Bangalore Aagneya, RID 3191." },
      { property: "og:title", content: "Projects — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Signature initiatives from Aagneya, RID 3191." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

type Project = { img: { url: string }; t: string; d: string };
type AvenueGroup = { avenue: string; projects: Project[] };

const signatureAvenues: AvenueGroup[] = [
  {
    avenue: "Club Service Avenue",
    projects: [
      {
        img: p1,
        t: "Dandeli Diaries",
        d: "As part of our Club Service initiative, fifteen members embarked on a memorable trip to Dandeli filled with adventure, fellowship, and meaningful GBM and BOD discussions. The experience strengthened unity, teamwork, coordination, and truly reflected the vibrant spirit of Aagneya.",
      },
      {
        img: p2,
        t: "Secret Santa Soirée",
        d: "As part of its Club Service initiatives, the Rotaract Club of Bangalore Aagneya hosted a joyful Secret Santa celebration with 22 members. Heartfelt gestures, including home deliveries, reflected true camaraderie. The festivities continued at Empire Restaurant, featuring laughter, gifts, and a surprise birthday celebration, creating cherished memories and stronger bonds.",
      },
    ],
  },
  {
    avenue: "Community Service Avenue",
    projects: [
      {
        img: p3,
        t: "Wellness In a Bag",
        d: "On 11 July 2025, the Rotaract Club of Bangalore Aagneya distributed 40 nutrition kits to pregnant women and infants, promoting millet-based wellness, healthy pregnancies, and early childhood development through compassionate service.",
      },
      {
        img: p4,
        t: "Deworming and Collaring Drive",
        d: "On 10 August 2025, the Rotaract Club of Bangalore Aagneya, in collaboration with Bhumi, conducted Paws & Care: Deworming and Collaring Drive, promoting the health, safety, and well-being of community dogs.",
      },
      {
        img: p5,
        t: "Knowledge Kits",
        d: "In September 2025, the Rotaract Club of Bangalore Aagneya led three impactful education initiatives, distributing over 850 educational kits, school bags, books, and stationery to nearly 1,000 underprivileged students across Bengaluru. Through collaboration and compassion, the drives empowered young minds, nurtured creativity, and reinforced the belief that education transforms lives.",
      },
      {
        img: p6,
        t: "Suraksha",
        d: "The Rotaract Club of Bangalore Aagneya, with the Rotaract Club of Bangalore High Grounds, conducted Project Suraksha, an interactive Good Touch & Bad Touch awareness session for government school children, promoting personal safety, confidence, and protection through engaging stories and activities.",
      },
      {
        img: p7,
        t: "Dry Fruit Delight",
        d: "Project Dry Fruit Delight united Rotaract Club of Bangalore Aagneya with multiple clubs and districts to distribute nutritious dry fruit sweets and boxes to hospitals, schools, and communities, promoting health, fighting malnutrition, and strengthening inter-club collaboration through impactful service.",
      },
    ],
  },
  {
    avenue: "International Service Avenue",
    projects: [
      {
        img: p8,
        t: "Rakshapatra 10.0",
        d: "The Rotaract Club of Bangalore Aagneya collaborated with the Rotaract Club of Thane Downtown for Rakshapatra 10.0, collecting 200+ heartfelt letters from students and shelter homes. Distributed at the Army base near MG Road, Bengaluru, the initiative honored soldiers, spreading gratitude, patriotism, and the true spirit of service.",
      },
      {
        img: p9,
        t: "Cultural Attire Exchange & Project Dost",
        d: "The Rotaract Club of Dharmanagar (RID 3240) hosted a Cultural Attire Exchange where Karnataka and Tripura exchanged traditional attire. Under Project Dost, both clubs exchanged a \"Box of Friendship\" filled with cultural gifts, strengthening fellowship, unity, and cultural appreciation.",
      },
      {
        img: p10,
        t: "Charity of Goodness 5.0",
        d: "On International Day of Charity, the Rotaract Club of Bangalore Aagneya collaborated with the Rotaract Club of Ambarnath (RID 3142) for Charity of Goodness 5.0, promoting menstrual health awareness through sanitary pad distribution drives.",
      },
    ],
  },
  {
    avenue: "Next Gen Service Avenue",
    projects: [
      {
        img: p11,
        t: "EcoParishe",
        d: "The Rotaract Club of Bangalore Aagneya, together with Interact District 3191 and partner Interact Clubs, distributed over 1,800 paper bags during Kadlekai Parishe, promoting sustainability and youth leadership.",
      },
    ],
  },
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
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Signature Initiatives</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Projects that <em className="text-gradient-gold">defined our year.</em>
            </h2>
          </div>

          <div className="space-y-20">
            {signatureAvenues.map((group) => (
              <div key={group.avenue}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
                  <h3 className="font-display text-2xl sm:text-3xl text-primary whitespace-nowrap">
                    {group.avenue}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-gold/60 to-transparent" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.projects.map((p) => (
                    <article
                      key={p.t}
                      className="group rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col ring-1 ring-primary/5"
                    >
                      <div className="relative aspect-[4/3] bg-hero-gradient overflow-hidden">
                        <img
                          src={p.img.url}
                          alt={p.t}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy-deep/10 to-transparent" />
                        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-navy-deep/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold/30">
                          {group.avenue.replace(" Avenue", "")}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                            <Sparkles size={14} className="text-navy-deep" />
                          </div>
                          <h4 className="font-display text-xl text-primary">{p.t}</h4>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                      </div>
                    </article>
                  ))}
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
