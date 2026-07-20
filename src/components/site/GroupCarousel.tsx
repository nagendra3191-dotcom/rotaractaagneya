import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g0 from "@/assets/groups/group-0.jpg.asset.json";
import g1 from "@/assets/groups/group-1.jpg.asset.json";
import g2 from "@/assets/groups/group-2.jpg.asset.json";
import g3 from "@/assets/groups/group-3.jpg.asset.json";
import g4 from "@/assets/groups/group-4.jpg.asset.json";

const slides = [g0, g1, g2, g3, g4];

export function GroupCarousel() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-navy-deep pt-24 pb-16 lg:pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">Fellowship in Motion</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            The faces of <em className="text-gradient-gold">Aagneya.</em>
          </h2>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-gold/25">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <div key={idx} className="min-w-full aspect-[16/9] relative bg-navy-deep">
                <img src={s.url} alt={`Aagneya group ${idx + 1}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-navy-deep/20" />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-5 inset-x-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
