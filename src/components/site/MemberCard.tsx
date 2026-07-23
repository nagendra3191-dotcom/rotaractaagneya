import { User } from "lucide-react";
import type { Member } from "@/data/committee";
import { portraitUrl } from "@/data/committee";

export function MemberCard({ member, featured = false }: { member: Member; featured?: boolean }) {
  const url = portraitUrl(member.portrait);
  return (
    <div className="group relative">
      <div
        className={`relative overflow-hidden rounded-2xl bg-hero-gradient shadow-card-soft transition-all duration-500 group-hover:shadow-elegant group-hover:-translate-y-1 ${
          featured ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      >
        {/* gold frame */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25 z-10 pointer-events-none" />
        <div className="absolute inset-[3px] rounded-[14px] ring-1 ring-inset ring-white/5 z-10 pointer-events-none" />

        {url ? (
          <img
            src={url}
            alt={member.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ mixBlendMode: "normal" }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center">
              <User size={40} className="text-gold-soft/70" />
            </div>
          </div>
        )}

        {/* gradient bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />

        {/* text */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10">
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold-soft mb-1.5">
            {member.role}
          </div>
          <div className="font-display text-xl leading-tight text-white">{member.name}</div>

        </div>

      </div>
    </div>
  );
}
