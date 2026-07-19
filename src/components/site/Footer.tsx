import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import clubLockup from "@/assets/brand/club-lockup.png.asset.json";
import rotaractMark from "@/assets/brand/rotaract-mark.png.asset.json";
import rotaryMark from "@/assets/brand/rotary-mark.png.asset.json";

const partners = [rotaractMark, rotaryMark];

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white/85 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07] blur-3xl bg-gold" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <img src={clubLockup.url} alt="Rotaract Club of Bangalore Aagneya" className="h-16 w-auto object-contain" style={{ filter: "brightness(1.1)" }} />
            <div className="mt-4">
              <div className="font-display text-xl">Rotaract Bangalore Aagneya</div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mt-1">
                R.I. District 3191 · RY 2026–27
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              A fellowship of young leaders committed to service above self — building lasting
              impact in our communities, our profession, and the world.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/rotaractbangaloreaagneya" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/company/rotaract-bangalore-aagneya" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition"><Linkedin size={16} /></a>
              <a href="mailto:rotaractclubofbangaloreaagneya@gmail.com" aria-label="Email" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-deep transition"><Mail size={16} /></a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold-soft transition">About Aagneya</Link></li>
              <li><Link to="/team" className="hover:text-gold-soft transition">Our Team</Link></li>
              <li><Link to="/projects" className="hover:text-gold-soft transition">Projects</Link></li>
              <li><Link to="/awards" className="hover:text-gold-soft transition">Awards</Link></li>
              <li><Link to="/statistics" className="hover:text-gold-soft transition">Statistics</Link></li>
              <li><Link to="/contact" className="hover:text-gold-soft transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mb-4">Reach Us</div>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gold shrink-0" />
                <a href="mailto:rotaractclubofbangaloreaagneya@gmail.com" className="hover:text-gold-soft transition break-all">
                  rotaractclubofbangaloreaagneya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold-soft mb-6">
            In Partnership With
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {partners.map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt="Partner logo"
                className="h-16 sm:h-20 w-auto object-contain"
                style={{ filter: "brightness(1.15)" }}
              />
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
