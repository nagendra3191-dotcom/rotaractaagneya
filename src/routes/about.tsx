import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart, Users, Award, Globe2, Flame, Target, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import heroImg from "@/assets/brand/hero-new.jpg.asset.json";
import clubLogo from "@/assets/brand/club-logo.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aagneya — Rotaract Bangalore Aagneya" },
      { name: "description", content: "The story of the Rotaract Club of Bangalore Aagneya — our mission, vision, values, and the four avenues of service that define us." },
      { property: "og:title", content: "About Aagneya" },
      { property: "og:description", content: "Born of fire. Built to serve. The story of Rotaract Bangalore Aagneya, RID 3191." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Heart, title: "Community Service", body: "Grassroots projects addressing education, health, and dignity across Bengaluru." },
  { icon: Users, title: "Club Service", body: "A vibrant fellowship where friendships and future leaders are forged." },
  { icon: Award, title: "Professional Development", body: "Skills, mentorship, and networks that accelerate careers with purpose." },
  { icon: Globe2, title: "International Service", body: "Cross-cultural collaboration with Rotaract clubs around the world." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">About Aagneya</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Born of fire. <em className="text-gradient-gold">Built to serve.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
            The story of the Rotaract Club of Bangalore Aagneya — a fellowship of young leaders,
            professionals, and changemakers under Rotary International District 3191.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant relative">
                <img src={heroImg.url} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-hero-gradient shadow-gold-glow flex items-center justify-center">
                <img src={clubLogo.url} alt="" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-gold/60" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              A fellowship of young leaders <em className="text-gradient-gold">shaping tomorrow.</em>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <em>Aagneya</em> — Sanskrit for <em>born of fire</em> — is a spirited chapter of Rotaract
              International, sponsored by the Rotary Club of Bangalore Aagneya under RID 3191. We
              bring together students and young professionals aged 18–30 who believe that the
              measure of a life is not what we take, but what we give.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              From weekend service drives to district-level leadership summits, we design
              experiences that turn intention into impact — and members into leaders the world
              will remember.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Global network across 200+ countries",
                "Weekly fellowship & learning circles",
                "Signature service & CSR projects",
                "Leadership pipeline to Rotary",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: "Our Mission", b: "To develop young leaders who serve their communities with integrity, empathy, and excellence." },
              { icon: Eye, t: "Our Vision", b: "A generation of Rotaractors driving lasting change through fellowship and service above self." },
              { icon: Flame, t: "Our Values", b: "Service, Fellowship, Diversity, Integrity, and Leadership — the flame that lights every action." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-white p-8 shadow-card-soft hover:shadow-elegant transition hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-glow">
                  <v.icon size={22} className="text-navy-deep" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-primary">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVENUES */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Four Avenues of Service</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              How we <em className="text-gradient-gold">create impact.</em>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="group glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-gold-gradient flex items-center justify-center text-navy-deep shadow-gold-glow group-hover:scale-110 transition">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/team" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition">
              Meet Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
