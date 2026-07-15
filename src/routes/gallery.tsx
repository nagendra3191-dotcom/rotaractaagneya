import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/brand/hero-new.jpg.asset.json";
import awardsImg from "@/assets/brand/awards.jpg.asset.json";
import heroOld from "@/assets/brand/hero-group.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Rotaract Bangalore Aagneya" },
      { name: "description", content: "Moments from the Rotaract Club of Bangalore Aagneya — service, fellowship, and celebration." },
      { property: "og:title", content: "Gallery — Rotaract Bangalore Aagneya" },
      { property: "og:description", content: "Moments from Aagneya, RY 2025–26." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [heroImg, heroOld, awardsImg, heroImg, awardsImg, heroOld];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-40 pb-16 bg-hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-4">Gallery</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
            Moments of <em className="text-gradient-gold">Aagneya.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
            A visual journey through service, fellowship, and celebration.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-card-soft hover:shadow-elegant transition">
                <img src={img.url} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">More photos coming soon.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
