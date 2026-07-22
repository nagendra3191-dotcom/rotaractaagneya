import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Instagram, Linkedin, Phone, Send, Globe2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Reach out to the Rotaract Club of Bangalore Aagneya — join, collaborate, or explore international partnerships." },
      { property: "og:title", content: "Contact — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Get in touch with Aagneya, RID 3191." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const socials = [
  { Icon: Mail, label: "Email", value: "rotaractclubofbangaloreaagneya@gmail.com", href: "mailto:rotaractclubofbangaloreaagneya@gmail.com" },
  { Icon: Instagram, label: "Instagram", value: "@rotaractbangaloreaagneya", href: "https://instagram.com/rotaractbangaloreaagneya" },
  { Icon: Linkedin, label: "LinkedIn", value: "Rotaract Bangalore Aagneya", href: "https://www.linkedin.com/posts/rotaract-club-of-bangalore-aagneya-388955218_team-gratitude-bangalore-activity-7081530253969412097-anXu/" },
];

const contacts = [
  { name: "Rtr. Sai Pavan A", role: "President", year: "Rotary Year 2026–2027", phone: "+91 8217646423", tel: "+918217646423" },
  { name: "PP. Rtr. Vishal S", role: "Secretary — Administration", year: "Rotary Year 2026–2027", phone: "+91 7259998080", tel: "+917259998080" },
  { name: "Rtr. Vikram A Murthy", role: "Secretary — Operations", year: "Rotary Year 2026–2027", phone: "+91 9900762846", tel: "+919900762846" },
];

const intlDirectors = [
  { name: "Rtr. Pavithra Ganta", role: "International Service Director", year: "Rotary Year 2026–2027", phone: "+91 9113973362", tel: "+919113973362" },
  { name: "Rtr. Madhav K", role: "Joint International Service Director", year: "Rotary Year 2026–2027", phone: "+91 7795946032", tel: "+917795946032" },
];


function ContactCard({ c }: { c: (typeof contacts)[number] }) {
  return (
    <div className="group relative rounded-2xl bg-hero-gradient p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25 pointer-events-none" />
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft mb-2">{c.role}</div>
        <div className="font-display text-2xl text-white leading-tight">{c.name}</div>
        <div className="mt-1 text-xs text-white/60">{c.year}</div>
        <a
          href={`tel:${c.tel}`}
          className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur border border-white/10 px-4 py-3 text-sm text-white hover:bg-gold hover:text-navy-deep hover:border-gold transition-all"
        >
          <span className="h-8 w-8 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
            <Phone size={14} className="text-navy-deep" />
          </span>
          <span className="font-medium tracking-wide">{c.phone}</span>
        </a>
      </div>
    </div>
  );
}

function ContactPage() {
  const [intlType, setIntlType] = useState("Joint Project");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Get in Touch</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Reach out to <em className="text-gradient-gold">Aagneya.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
            Interested in becoming a member or volunteering with the Rotaract Club of Bangalore Aagneya?
            We'd love to hear from you! Fill out the form below and our team will get in touch with you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Speak With Us</div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary leading-tight">
              Reach our leadership directly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contacts.map((c) => (
              <ContactCard key={c.name} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL COLLABORATIONS */}
      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-1.5 mb-4">
              <Globe2 size={14} className="text-navy-deep" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-navy-deep font-medium">
                International
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
              International <em className="text-gradient-gold">Collaborations.</em>
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Partner with Aagneya on cross-border service projects, cultural exchanges, and joint
              initiatives with Rotaract clubs around the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white shadow-elegant p-8 sm:p-10">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Collaboration Enquiry</div>
                <h3 className="font-display text-2xl sm:text-3xl text-primary leading-tight">Let's build together.</h3>
                <form className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Name</label>
                      <input className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Club / Organization</label>
                      <input className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Rotaract Club of…" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Country</label>
                      <input className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Country" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                      <input type="email" className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Type of Collaboration</label>
                    <select
                      value={intlType}
                      onChange={(e) => setIntlType(e.target.value)}
                      className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                    >
                      <option>Joint Project</option>
                      <option>Cultural Exchange</option>
                      <option>Speaker / Panel</option>
                      <option>Twin Club Partnership</option>
                      <option>Sponsorship / Grant</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us more</label>
                    <textarea rows={5} className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Share your idea, timeline, and how we can partner." />
                  </div>
                  <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-deep transition">
                    Submit Enquiry <Send size={14} />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">International Team</div>
              {intlDirectors.map((c) => (
                <div key={c.name} className="group relative rounded-2xl bg-hero-gradient p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25 pointer-events-none" />
                  <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft mb-2">{c.role}</div>
                    <div className="font-display text-xl text-white leading-tight">{c.name}</div>
                    <div className="mt-1 text-xs text-white/60">{c.year}</div>
                    <a
                      href={`tel:${c.tel}`}
                      className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur border border-white/10 px-4 py-2.5 text-sm text-white hover:bg-gold hover:text-navy-deep hover:border-gold transition-all"
                    >
                      <span className="h-7 w-7 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                        <Phone size={12} className="text-navy-deep" />
                      </span>
                      <span className="font-medium tracking-wide">{c.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-3 gap-5">
            {socials.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-2xl bg-white p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 border border-border"
              >
                <div className="h-11 w-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition">
                  <Icon size={18} className="text-navy-deep" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="mt-1 font-medium text-primary break-all text-sm">{value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
