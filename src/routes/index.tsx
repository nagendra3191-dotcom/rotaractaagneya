import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Users, Heart, Globe2, Sparkles, Quote, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MemberCard } from "@/components/site/MemberCard";
import { committee } from "@/data/committee";
import heroImg from "@/assets/brand/hero-group.jpg.asset.json";
import awardsImg from "@/assets/brand/awards.jpg.asset.json";
import clubLogo from "@/assets/brand/club-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rotaract Bangalore Aagneya — Create Lasting Impact" },
      {
        name: "description",
        content:
          "The Rotaract Club of Bangalore Aagneya (RID 3191) — a fellowship of young leaders creating lasting impact through service, professional development, and international understanding.",
      },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
  }),
  component: Home,
});

const core = committee.filter((m) => m.category === "core");
const directors = committee.filter((m) => m.category === "director");

const pillars = [
  {
    icon: Heart,
    title: "Community Service",
    body: "Grassroots projects that address education, health, and dignity across Bengaluru.",
  },
  {
    icon: Users,
    title: "Club Service",
    body: "A vibrant fellowship where friendships and future leaders are forged.",
  },
  {
    icon: Award,
    title: "Professional Development",
    body: "Skills, mentorship, and networks that accelerate careers with purpose.",
  },
  {
    icon: Globe2,
    title: "International Service",
    body: "Cross-cultural collaboration with Rotaract clubs around the world.",
  },
];

const stats = [
  { n: "40+", l: "Active Rotaractors" },
  { n: "50+", l: "Service Projects" },
  { n: "10K+", l: "Lives Touched" },
  { n: "20+", l: "Awards Received" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg.url}
          alt="Rotaract Bangalore Aagneya team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-24 pt-40 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8">
              <Sparkles size={14} className="text-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">
                Rotary Year 2025–26
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95]">
              Create <span className="text-gradient-gold italic">Lasting</span>
              <br /> Impact.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              We are the Rotaract Club of Bangalore Aagneya — a fellowship of young leaders,
              professionals, and changemakers under Rotary International District 3191, united
              by a single conviction: <em className="text-gold-soft not-italic font-medium">service above self</em>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition"
              >
                Discover Our Story <ArrowRight size={16} />
              </a>
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Join the Movement
              </a>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 backdrop-blur-md bg-navy-deep/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.l} className="py-6 text-center">
                <div className="font-display text-3xl lg:text-4xl text-gradient-gold">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute -right-40 top-20 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant relative">
                <img src={heroImg.url} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-hero-gradient shadow-gold-glow flex items-center justify-center animate-float">
                <img src={clubLogo.url} alt="" className="w-28 h-28 rounded-full object-cover ring-2 ring-gold/60" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Who We Are</div>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
              A fellowship of young leaders <em className="text-gradient-gold">shaping tomorrow.</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Aagneya — Sanskrit for <em>born of fire</em> — is a spirited chapter of Rotaract
              International, sponsored by the Rotary Club of Bangalore Aagneya, RID 3191. We
              bring together students and young professionals aged 18–30 who believe that the
              measure of a life is not what we take, but what we give.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
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

      {/* PILLARS */}
      <section id="impact" className="relative py-28 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Four Avenues of Service</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">
              How we <em className="text-gradient-gold">create impact.</em>
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-xl bg-gold-gradient flex items-center justify-center text-navy-deep shadow-gold-glow group-hover:scale-110 transition">
                  <p.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP - Core Committee */}
      <section id="leadership" className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Core Committee 2025–26</div>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
              The leaders behind <em className="text-gradient-gold">Aagneya.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A team of dedicated Rotaractors stewarding our fellowship, service, and
              professional excellence this Rotary year.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {core.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          <div className="my-24 gold-divider" />

          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Directors & Chairs</div>
            <h2 className="font-display text-3xl lg:text-5xl text-primary leading-tight">
              Leading every <em className="text-gradient-gold">avenue.</em>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/people"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-deep transition"
            >
              Meet all our members <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="relative py-28 lg:py-40 bg-secondary/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant relative ring-1 ring-gold/20">
              <img src={awardsImg.url} alt="Awards received by Rotaract Bangalore Aagneya" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 hidden sm:flex h-28 w-28 rounded-2xl bg-gold-gradient items-center justify-center shadow-gold-glow rotate-[-6deg]">
              <Award size={40} className="text-navy-deep" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Recognition</div>
            <h2 className="font-display text-4xl lg:text-6xl text-primary leading-tight">
              Celebrated for <em className="text-gradient-gold">excellence.</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Year after year, Aagneya has been honored at district and zone levels for
              service innovation, membership growth, professional development, and
              community impact — a testament to the collective spirit of our club.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { t: "Outstanding Club of the Year", s: "Rotaract District 3191" },
                { t: "Excellence in Community Service", s: "Multi-year recognition" },
                { t: "Best Professional Development Initiative", s: "District Awards" },
                { t: "Innovation in Membership Growth", s: "Zone-level accolade" },
              ].map((a) => (
                <div key={a.t} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-card-soft">
                  <div className="h-10 w-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                    <Award size={18} className="text-navy-deep" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{a.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{a.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 bg-navy-deep text-white relative overflow-hidden">
        <Quote className="absolute top-10 left-1/2 -translate-x-1/2 text-gold/10" size={200} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-3xl lg:text-5xl leading-[1.2] italic">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <div className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-soft">
            — Mahatma Gandhi
          </div>
        </div>
      </section>

      {/* JOIN / CONTACT */}
      <section id="contact" className="py-28 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div id="join" className="rounded-3xl overflow-hidden shadow-elegant bg-hero-gradient text-white p-10 lg:p-16 relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Join Us</div>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                  Ready to write the <em className="text-gradient-gold">next chapter?</em>
                </h2>
                <p className="mt-6 text-white/80 leading-relaxed">
                  Whether you're a student, a young professional, or simply someone who
                  believes in the power of collective action — Aagneya is your home.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex items-center gap-3"><Mail size={16} className="text-gold" /> hello@aagneya.org</div>
                  <div className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Bengaluru, Karnataka, India</div>
                </div>
              </div>
              <form className="glass rounded-2xl p-6 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold-soft">Name</label>
                  <input className="mt-1 w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold-soft">Email</label>
                  <input type="email" className="mt-1 w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold-soft">Message</label>
                  <textarea rows={4} className="mt-1 w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-gold" placeholder="Tell us why you'd like to join…" />
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-gradient px-6 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition"
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
