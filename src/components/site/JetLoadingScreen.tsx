import { useEffect, useState } from "react";
import jetImg from "@/assets/loading/jet-hologram.png";

const MIN_DURATION = 2200;
const FADE_DURATION = 700;

export function JetLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(99, Math.round((elapsed / MIN_DURATION) * 100)));
    }, 60);
    const finish = setTimeout(() => {
      setProgress(100);
      setFading(true);
      const gone = setTimeout(() => setHidden(true), FADE_DURATION);
      return () => clearTimeout(gone);
    }, MIN_DURATION);
    return () => {
      clearInterval(tick);
      clearTimeout(finish);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`jet-loader fixed inset-0 z-[10000] overflow-hidden bg-black ${
        fading ? "jet-loader-fade" : ""
      }`}
    >
      {/* faint tactical grid */}
      <div className="jet-loader-grid absolute inset-0" />

      {/* corner brackets */}
      <div className="absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-sky-400/70" />
      <div className="absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-sky-400/70" />
      <div className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-sky-400/70" />
      <div className="absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-sky-400/70" />

      {/* HUD readouts */}
      <div className="absolute left-8 top-9 font-mono text-[10px] tracking-[0.3em] text-sky-300/80 sm:text-xs">
        <span className="jet-loader-flicker block">AAGNEYA // SYS.ONLINE</span>
        <span className="mt-1 block text-sky-500/60">RID-3191 · TAC-MODE</span>
      </div>
      <div className="absolute right-8 top-9 text-right font-mono text-[10px] tracking-[0.3em] text-sky-300/80 sm:text-xs">
        <span className="jet-loader-flicker block">TARGET LOCKED</span>
        <span className="mt-1 block text-sky-500/60">ALT 12.4K · VEL 680KT</span>
      </div>
      <div className="absolute bottom-9 left-8 font-mono text-[10px] tracking-[0.3em] text-sky-300/80 sm:text-xs">
        <span className="jet-loader-flicker block">INITIALIZING FLIGHT SYSTEMS…</span>
      </div>
      <div className="absolute bottom-9 right-8 text-right font-mono text-[10px] tracking-[0.3em] text-sky-300/80 sm:text-xs">
        <span className="jet-loader-blip mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400 align-middle" />
        <span className="align-middle">{String(progress).padStart(3, "0")}%</span>
      </div>

      {/* center: radar + jet */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          {/* expanding sonar rings */}
          <div className="jet-loader-ring absolute inset-0 rounded-full" />
          <div
            className="jet-loader-ring absolute inset-0 rounded-full"
            style={{ animationDelay: "1s" }}
          />
          {/* static radar circles + cross ticks */}
          <div className="absolute inset-0 rounded-full border border-sky-400/25" />
          <div className="absolute inset-8 rounded-full border border-sky-400/15" />
          <div className="absolute inset-16 rounded-full border border-dashed border-sky-400/10" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-sky-400/10" />
          <div className="absolute top-1/2 left-0 h-px w-full bg-sky-400/10" />
          {/* rotating radar sweep */}
          <div className="jet-loader-sweep absolute inset-0 rounded-full" />
          {/* random blips */}
          <span className="jet-loader-blip absolute left-[22%] top-[30%] h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]" />
          <span
            className="jet-loader-blip absolute right-[24%] top-[58%] h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
            style={{ animationDelay: "0.6s" }}
          />
          {/* the jet */}
          <img
            src={jetImg}
            alt=""
            width={1024}
            height={1024}
            className="jet-loader-jet relative z-10 w-[115%] max-w-none select-none sm:w-[110%]"
            draggable={false}
          />
          {/* lock-on reticle */}
          <div className="absolute inset-[12%] rounded-full border border-sky-300/30">
            <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-sky-300/70" />
            <span className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-sky-300/70" />
            <span className="absolute top-1/2 left-0 w-2 h-px -translate-y-1/2 bg-sky-300/70" />
            <span className="absolute top-1/2 right-0 w-2 h-px -translate-y-1/2 bg-sky-300/70" />
          </div>
        </div>
      </div>

      {/* vertical scan line */}
      <div className="jet-loader-scan absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

      {/* bottom progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-sky-950/60">
        <div
          className="h-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
