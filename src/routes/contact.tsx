import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Instagram, Linkedin, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Reach out to the Rotaract Club of Bangalore Aagneya — join, collaborate, or say hello." },
      { property: "og:title", content: "Contact — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Get in touch with Aagneya, RID 3191." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const cards = [
  { Icon: Mail, label: "Email", value: "rotaractclubofbangaloreaagneya@gmail.com", href: "mailto:rotaractclubofbangaloreaagneya@gmail.com" },
  { Icon: Instagram, label: "Instagram", value: "@rotaractbangaloreaagneya", href: "https://instagram.com/rotaractbangaloreaagneya" },
  { Icon: Linkedin, label: "LinkedIn", value: "Rotaract Bangalore Aagneya", href: "https://www.linkedin.com/company/rotaract-bangalore-aagneya" },
  { Icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: "#" },
];

function ContactPage() {
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
            Whether you want to join us, collaborate, or simply say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-2xl bg-white p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition">
                  <Icon size={20} className="text-navy-deep" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="mt-1 font-medium text-primary break-all">{value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white shadow-elegant p-8 sm:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Send a Message</div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary leading-tight">Say hello.</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={5} className="mt-1 w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold" placeholder="How can we help?" />
              </div>
              <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-deep transition">
                Send Message <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
