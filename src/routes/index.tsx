import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Sparkles, Quote, Instagram, Linkedin, Mail, Plane } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MemberCard } from "@/components/site/MemberCard";
import { committee } from "@/data/committee";
import heroImg from "@/assets/brand/hero-new.jpg.asset.json";
import awardsImg from "@/assets/brand/awards.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rotaract Bangalore Aagneya — Igniting Leadership, Inspiring Change" },
      {
        name: "description",
        content:
          "The Rotaract Club of Bangalore Aagneya (RID 3191) — igniting leadership, inspiring change, and building lasting impact in Rotary Year 2026–27.",
      },
      { property: "og:title", content: "Rotaract Bangalore Aagneya · RY 2026–27" },
      { property: "og:description", content: "Igniting Leadership. Inspiring Change. Building Aagneya Together." },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
  }),
  component: Home,
});

const stats = [
  { n: "138+", l: "Projects Delivered" },
  { n: "40+", l: "Active Rotaractors" },
  { n: "10K+", l: "Lives Touched" },
  { n: "20+", l: "Awards Received" },
];

const highlights = [
  { t: "Knowledge Kits", s: "Royal Community Service Initiative — empowering students district-wide." },
  { t: "Jala Dhara", s: "Royal Providing Clean Water Initiative — bringing safe water to communities." },
  { t: "Saptarang", s: "Outstanding Hosted Initiative — a signature seven-day celebration of service." },
  { t: "Print to Learn", s: "Outstanding Impactful Initiative — printed textbooks for schools in need." },
];

const featuredAwards = [
  "Outstanding President — Rtr. Hitha Suresh",
  "Par Excellence — Community Based Club",
  "DRR Royal Citation",
  "Royal Rotaract Male — Rtr. Vikram A Murthy",
];

const president = committee.find((m) => m.role === "President")!;

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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-28 pt-40 w-full">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8">
              <Plane size={14} className="text-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">
                Rotary Year 2026–27
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05]">
              Igniting <em className="text-gradient-gold not-italic">Leadership.</em>
              <br />
              Inspiring <em className="text-gradient-gold not-italic">Change.</em>
              <br />
              Building <em className="italic">Aagneya</em> Together.
            </h1>
            <p className="mt-8 text-base lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              A fellowship of young leaders under Rotary International District 3191, united
              by one conviction — <em className="text-gold-soft not-italic font-medium">service above self</em>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition"
              >
                Discover Our Story <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 backdrop-blur-md bg-navy-deep/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.l} className="py-5 sm:py-6 text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-gradient-gold">{s.n}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/70 mt-1 px-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESIDENT'S MESSAGE */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
        <div className="absolute -left-32 -top-24 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant ring-1 ring-gold/25">
                <MemberCard member={president} featured />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gold-gradient px-5 py-4 shadow-gold-glow">
                <div className="text-[10px] uppercase tracking-[0.25em] text-navy-deep/80">President</div>
                <div className="font-display text-lg text-navy-deep leading-tight">RY 2026–27</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">President's Message</div>
            <Quote className="text-gold/30 mb-4" size={48} />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              A year of <em className="text-gradient-gold">flight, fire, and fellowship.</em>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              As we step into Rotary Year <strong className="text-primary">2026–27</strong> under Zone Rafale, I invite every
              Rotaractor, partner, and friend of Aagneya to soar higher with us. Our club has
              always drawn strength from its fire — <em>Aagneya</em>, born of fire — and this year we
              channel that same energy into bolder service, deeper fellowship, and sharper leadership.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Together, we will honour the legacy of every past board, celebrate the courage of every
              member, and light the runway for those who come after us. Thank you for believing in Aagneya.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
              <div>
                <div className="font-display text-xl text-primary">{president.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold">President · RY 2026–27</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (short) */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Who We Are</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-primary leading-tight">
            Born of fire. <em className="text-gradient-gold">Built to serve.</em>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <em>Aagneya</em> — Sanskrit for <em>born of fire</em> — is a spirited chapter of Rotaract
            International, sponsored by the Rotary Club of Bangalore Aagneya under RID 3191. We
            bring together 40+ students and young professionals aged 18–30 who believe the
            measure of a life is not what we take, but what we give.
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-deep transition"
            >
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT HIGHLIGHTS */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Major Impact</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Signature initiatives <em className="text-gradient-gold">of the year.</em>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.t}
                className="group glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center text-navy-deep shadow-gold-glow group-hover:scale-110 transition">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl">{h.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{h.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Explore All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS PREVIEW — Aviation themed */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-navy-deep text-white">
        {/* Aviation ornament: contrails + fighter silhouette */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="contrail" x1="0" x2="1">
              <stop offset="0" stopColor="#E4B85C" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E4B85C" stopOpacity="1" />
              <stop offset="1" stopColor="#E4B85C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-50 700 Q 400 300 1250 100" stroke="url(#contrail)" strokeWidth="1.5" fill="none" />
          <path d="M-50 780 Q 500 500 1250 250" stroke="url(#contrail)" strokeWidth="1" fill="none" />
          <path d="M-50 620 Q 300 200 1250 -50" stroke="url(#contrail)" strokeWidth="0.8" fill="none" />
        </svg>
        <Plane className="absolute top-16 right-16 text-gold/20" size={140} strokeWidth={0.8} style={{ transform: "rotate(-35deg)" }} />
        <Plane className="absolute bottom-20 left-10 text-gold/10" size={80} strokeWidth={0.8} style={{ transform: "rotate(-25deg)" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">By the Numbers · Zone Rafale</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Impact you can <em className="text-gradient-gold">measure.</em>
              </h2>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                138 projects across six avenues in Rotary Year 2025–26 — from grassroots
                community service to professional development and international collaboration.
                A launchpad for what's to come in RY 2026–27.
              </p>
              <Link to="/statistics" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition">
                View Full Statistics <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "57", l: "Community Service" },
                { n: "22", l: "Public Image & PR" },
                { n: "19", l: "NextGen Service" },
                { n: "19", l: "Club Service" },
                { n: "15", l: "International" },
                { n: "6", l: "Professional Dev." },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-6 hover:bg-white/10 transition">
                  <div className="font-display text-4xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/70 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED AWARDS */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant ring-1 ring-gold/20">
              <img src={awardsImg.url} alt="Awards" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">RRR 2025–26 — Marquee Wins</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              Celebrated at the <em className="text-gradient-gold">Royal Rotaract Recognitions.</em>
            </h2>
            <div className="mt-8 space-y-3">
              {featuredAwards.map((a) => (
                <div key={a} className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-card-soft">
                  <div className="h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                    <Award size={16} className="text-navy-deep" />
                  </div>
                  <div className="font-medium text-primary text-sm sm:text-base">{a}</div>
                </div>
              ))}
            </div>
            <Link to="/awards" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-deep transition">
              See All Awards <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 lg:py-32 bg-navy-deep text-white relative overflow-hidden">
        <Quote className="absolute top-10 left-1/2 -translate-x-1/2 text-gold/10" size={200} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-2xl sm:text-3xl lg:text-5xl leading-[1.2] italic">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <div className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-soft">— Mahatma Gandhi</div>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-navy-deep shadow-gold-glow hover:brightness-110 transition">
              Join Aagneya Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PREVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Stay Connected</div>
          <h2 className="font-display text-3xl sm:text-4xl text-primary leading-tight">
            Follow the <em className="text-gradient-gold">Aagneya journey.</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com/rotaractbangaloreaagneya" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/rotaract-bangalore-aagneya" },
              { Icon: Mail, label: "Email", href: "mailto:rotaractclubofbangaloreaagneya@gmail.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-secondary/60 hover:bg-primary hover:text-primary-foreground border border-border px-6 py-3 text-sm font-medium transition"
              >
                <Icon size={16} className="group-hover:text-gold-soft transition" /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
