import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart, Droplet, HandHeart, CalendarPlus, Send } from "lucide-react";

export const Route = createFileRoute("/blood-donation")({
  head: () => ({
    meta: [
      { title: "Blood Donation — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Donate blood, request blood, or organize a camp with the Rotaract Club of Bangalore Aagneya. Every drop saves lives." },
      { property: "og:title", content: "Blood Donation — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Every drop counts. Join Aagneya's life-saving mission." },
    ],
    links: [{ rel: "canonical", href: "/blood-donation" }],
  }),
  component: BloodDonationPage,
});

type Tab = "donate" | "request" | "organize";

const tabs: { id: Tab; label: string; Icon: typeof Heart }[] = [
  { id: "donate", label: "Donate Blood", Icon: HandHeart },
  { id: "request", label: "Request Blood", Icon: Droplet },
  { id: "organize", label: "Organize a Camp", Icon: CalendarPlus },
];

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

const inputCls =
  "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold";

function DonateForm() {
  return (
    <form className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name"><input className={inputCls} placeholder="Your name" /></Field>
        <Field label="Age"><input type="number" className={inputCls} placeholder="Age" /></Field>
        <Field label="Blood Group">
          <select className={inputCls} defaultValue="">
            <option value="" disabled>Select</option>
            {bloodGroups.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Phone"><input className={inputCls} placeholder="+91…" /></Field>
        <Field label="Email"><input type="email" className={inputCls} placeholder="you@email.com" /></Field>
        <Field label="City"><input className={inputCls} placeholder="Bengaluru" /></Field>
      </div>
      <Field label="Last Donation Date (if any)"><input type="date" className={inputCls} /></Field>
      <Field label="Notes / Availability"><textarea rows={4} className={inputCls} placeholder="When are you available to donate?" /></Field>
      <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-sm font-medium transition">
        Register as Donor <Send size={14} />
      </button>
    </form>
  );
}

function RequestForm() {
  return (
    <form className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Patient Name"><input className={inputCls} placeholder="Patient name" /></Field>
        <Field label="Blood Group Needed">
          <select className={inputCls} defaultValue="">
            <option value="" disabled>Select</option>
            {bloodGroups.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Units Required"><input type="number" className={inputCls} placeholder="1" /></Field>
        <Field label="Urgency">
          <select className={inputCls}>
            <option>Within 24 hours</option>
            <option>Within 3 days</option>
            <option>Within a week</option>
          </select>
        </Field>
        <Field label="Hospital"><input className={inputCls} placeholder="Hospital name" /></Field>
        <Field label="City"><input className={inputCls} placeholder="Bengaluru" /></Field>
        <Field label="Contact Person"><input className={inputCls} placeholder="Your name" /></Field>
        <Field label="Contact Phone"><input className={inputCls} placeholder="+91…" /></Field>
      </div>
      <Field label="Additional Details"><textarea rows={4} className={inputCls} placeholder="Any relevant information" /></Field>
      <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-sm font-medium transition">
        Submit Request <Send size={14} />
      </button>
    </form>
  );
}

function OrganizeForm() {
  return (
    <form className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Organization / Institution"><input className={inputCls} placeholder="Your organization" /></Field>
        <Field label="Contact Person"><input className={inputCls} placeholder="Your name" /></Field>
        <Field label="Phone"><input className={inputCls} placeholder="+91…" /></Field>
        <Field label="Email"><input type="email" className={inputCls} placeholder="you@email.com" /></Field>
        <Field label="Preferred Date"><input type="date" className={inputCls} /></Field>
        <Field label="Expected Donors"><input type="number" className={inputCls} placeholder="e.g. 50" /></Field>
      </div>
      <Field label="Venue Address"><input className={inputCls} placeholder="Full address" /></Field>
      <Field label="Purpose / Notes"><textarea rows={4} className={inputCls} placeholder="Share your vision for the camp" /></Field>
      <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-sm font-medium transition">
        Propose Camp <Send size={14} />
      </button>
    </form>
  );
}

function BloodDonationPage() {
  const [tab, setTab] = useState<Tab>("donate");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-20 relative overflow-hidden text-white bg-gradient-to-br from-red-900 via-navy-deep to-red-950">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 mb-6 border border-white/20">
            <Heart size={14} className="text-red-300" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/90">Every Drop Counts</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Give the gift of <em className="text-gradient-gold">life.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-base sm:text-lg leading-relaxed">
            Whether you'd like to donate, need urgent blood, or wish to host a camp with Aagneya —
            we're here to make it happen. One pint. Three lives. Infinite gratitude.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all border ${
                  tab === id
                    ? "bg-red-600 text-white border-red-600 shadow-lg"
                    : "bg-white text-primary border-border hover:border-red-400"
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-white shadow-elegant p-8 sm:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-red-600 mb-3">
              {tabs.find((t) => t.id === tab)?.label}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary leading-tight mb-8">
              {tab === "donate" && (<>Become a <em className="text-gradient-gold">life-saver.</em></>)}
              {tab === "request" && (<>Request blood <em className="text-gradient-gold">urgently.</em></>)}
              {tab === "organize" && (<>Host a <em className="text-gradient-gold">blood camp.</em></>)}
            </h2>
            {tab === "donate" && <DonateForm />}
            {tab === "request" && <RequestForm />}
            {tab === "organize" && <OrganizeForm />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
