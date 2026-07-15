import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useEffect, useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/statistics")({
  head: () => ({
    meta: [
      { title: "Statistics — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Projects avenue-wise for RY 2025–26 — 138 projects visualized across six service avenues." },
      { property: "og:title", content: "Statistics — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "138 projects. Six avenues. One mission." },
    ],
    links: [{ rel: "canonical", href: "/statistics" }],
  }),
  component: StatisticsPage,
});

const data = [
  { name: "Community Service", value: 57, fill: "#C89B3C" },
  { name: "Public Image & PR", value: 22, fill: "#1B365D" },
  { name: "Club Service", value: 19, fill: "#4FC3F7" },
  { name: "NextGen Service", value: 19, fill: "#E4B85C" },
  { name: "International Service", value: 15, fill: "#0B1F3A" },
  { name: "Professional Development", value: 6, fill: "#7BA7CC" },
];

function Counter({ target, duration = 1600 }: { target: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return <div ref={ref} className="font-display text-5xl sm:text-6xl text-gradient-gold">{n}</div>;
}

function StatisticsPage() {
  const total = data.reduce((a, b) => a + b.value, 0);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Rotary Year 2025–26</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Impact you can <em className="text-gradient-gold">measure.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
            {total} projects delivered across six service avenues.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((d) => (
              <div key={d.name} className="rounded-2xl bg-white p-6 shadow-card-soft border border-border">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.name}</div>
                <Counter target={d.value} />
                <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(d.value / 57) * 100}%`, background: d.fill }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-card-soft">
            <h3 className="font-display text-2xl text-primary mb-6">Projects by Avenue</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
                    {data.map((d) => <Cell key={d.name} fill={d.fill} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {data.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm" style={{ background: d.fill }} />
                  <span className="text-muted-foreground truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-card-soft">
            <h3 className="font-display text-2xl text-primary mb-6">Avenue Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={11} width={140} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {data.map((d) => <Cell key={d.name} fill={d.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
