// Subtle site-wide aviation/squadron decorative accents.
// Fixed, pointer-events-none, very low opacity. Purely decorative.
export function SquadronAccents() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft radar sweep top-right */}
      <svg
        className="absolute -top-40 -right-40 h-[520px] w-[520px] opacity-[0.06] animate-[spin_60s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient id="sq-radar" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[30, 55, 80, 100].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} stroke="#C89B3C" strokeWidth="0.4" />
        ))}
        <path d="M100 100 L100 0 A100 100 0 0 1 200 100 Z" fill="url(#sq-radar)" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#C89B3C" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="#C89B3C" strokeWidth="0.3" />
      </svg>

      {/* Blueprint grid, extremely subtle */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C89B3C 1px, transparent 1px), linear-gradient(to bottom, #C89B3C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Contrail arc, bottom-left */}
      <svg
        className="absolute -bottom-24 -left-20 h-[420px] w-[720px] opacity-[0.05]"
        viewBox="0 0 720 420"
        fill="none"
      >
        <path
          d="M-20 380 Q 240 40 720 60"
          stroke="#C89B3C"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <path
          d="M-20 400 Q 260 90 720 110"
          stroke="#1B365D"
          strokeWidth="1"
          strokeDasharray="1 8"
        />
      </svg>

      {/* Fighter silhouette marker, mid-right */}
      <svg
        className="absolute top-1/3 right-6 h-10 w-10 opacity-[0.08] animate-float"
        viewBox="0 0 64 64"
        fill="#C89B3C"
      >
        <path d="M32 4 L34 26 L60 34 L60 38 L34 34 L34 50 L42 54 L42 58 L32 56 L22 58 L22 54 L30 50 L30 34 L4 38 L4 34 L30 26 Z" />
      </svg>
    </div>
  );
}
