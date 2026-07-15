import { Mail, Instagram, Linkedin, Facebook, MapPin } from "lucide-react";
import clubLogo from "@/assets/brand/club-logo.jpg.asset.json";
import f1 from "@/assets/brand/footer-1.jpg.asset.json";
import f2 from "@/assets/brand/footer-2.jpg.asset.json";
import f3 from "@/assets/brand/footer-3.jpg.asset.json";
import f4 from "@/assets/brand/footer-4.jpg.asset.json";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white/85 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07] blur-3xl bg-gold" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/50">
                <img src={clubLogo.url} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-2xl">Rotaract Bangalore Aagneya</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mt-0.5">
                  Rotary International District 3191
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              A fellowship of young leaders committed to service above self — building lasting
              impact in our communities, our profession, and the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#about" className="hover:text-gold-soft transition">About</a></li>
              <li><a href="/#leadership" className="hover:text-gold-soft transition">Leadership</a></li>
              <li><a href="/people" className="hover:text-gold-soft transition">All Members</a></li>
              <li><a href="/#awards" className="hover:text-gold-soft transition">Awards</a></li>
              <li><a href="/#impact" className="hover:text-gold-soft transition">Impact</a></li>
              <li><a href="/#contact" className="hover:text-gold-soft transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-4">Reach Us</div>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gold" />
                <a href="mailto:hello@aagneya.org" className="hover:text-gold-soft transition">
                  hello@aagneya.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold-soft mb-6">
            In Partnership With
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[f1, f2, f3, f4].map((logo, i) => (
              <div
                key={i}
                className="h-16 sm:h-20 px-5 rounded-xl bg-white/95 flex items-center justify-center shadow-card-soft"
              >
                <img src={logo.url} alt="Partner logo" className="max-h-full max-w-[180px] object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Rotaract Club of Bangalore Aagneya. All rights reserved.</div>
          <div className="font-display italic text-gold-soft/80">Service · Fellowship · Leadership</div>
        </div>
      </div>
    </footer>
  );
}
