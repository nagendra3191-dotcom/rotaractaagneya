import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Award, Crown, Star, Trophy, Sparkles } from "lucide-react";
import awardsImg from "@/assets/brand/awards.jpg.asset.json";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognitions — Rotaract Bangalore Aagneya" },
      { name: "description", content: "RRR 2025–26 Royal Rotaract Recognitions — celebrating the extraordinary performance of Rotaract Bangalore Aagneya." },
      { property: "og:title", content: "Awards & Recognitions — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Marquee wins, royal awards, and outstanding recognitions at the RRR 2025–26." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: AwardsPage,
});

const marquee = [
  "Outstanding President — IPP. Rtr. Hitha Suresh",
  "Par Excellence — Community Based Club",
  "DRR Royal Citation",
];

const royal = [
  "Royal Reporting Club",
  "Royal Community Service Initiative — Knowledge Kits",
  "Royal Providing Clean Water Initiative — Jala Dhara",
  "Royal Rotaract Male — Rtr. Vikram A Murthy",
];

const outstanding = [
  "Outstanding Initiative with Interact",
  "Outstanding Hosted Initiative — Saptarang",
  "Outstanding Impactful Initiative — Print to Learn",
];

const execRecognitions = [
  "Rtr. Ishita Poddar — District Social Media Director",
  "PP. Rtn. Rtr. Nagendra Babu — District CSR and Partnership Director",
  "PP. Rtr. Vishal S — Zonal Rotaract Representative",
  "Rtr. Farheen Taj — District Sergeant At Arms Team",
  "Rtr. Manish Rakshith — District Sergeant At Arms Team",
  "Rtr. Sai Pavan A — District Community Service Team",
  "Rtr. Laasya A Bhagawan — District International Service Team",
];


const areaFocus = [
  "Nutri Smile",
  "Project TechSakshar",
  "Stitch & Smile",
  "Wheels of Hope",
];

function Card({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof Award }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-card-soft hover:shadow-elegant transition">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-glow">
          <Icon size={20} className="text-navy-deep" />
        </div>
        <h3 className="font-display text-xl text-primary">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AwardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">RRR 2025–2026</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Royal Rotaract <em className="text-gradient-gold">Recognitions.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-white/80 text-base sm:text-lg leading-relaxed">
            On behalf of the Rotary Club of Bangalore Aagneya, we extend our heartfelt
            congratulations to IPP. Rtr. Hitha Suresh and the entire Rotaract Club of Bangalore
            Aagneya for an extraordinary performance at the Royal Rotaract Recognition — a
            reflection of visionary leadership, unwavering commitment, and a shared passion
            for <em className="text-gold-soft not-italic">Service Above Self</em>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden shadow-elegant ring-1 ring-gold/20">
            <img src={awardsImg.url} alt="Awards received by Rotaract Bangalore Aagneya" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Marquee Wins" items={marquee} icon={Crown} />
          <Card title="Royal Awards" items={royal} icon={Trophy} />
          <Card title="Outstanding Awards" items={outstanding} icon={Star} />
          <Card title="Executive & District Committee Recognitions" items={execRecognitions} icon={Award} />
          <Card title="Areas of Focus Nominations" items={areaFocus} icon={Sparkles} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
