import { useState } from "react";

type StationId = "cut" | "strip" | "crimp" | "heatshrink" | "inspect";

const STATIONS: Record<StationId, { title: string; desc: string }> = {
  cut: { title: "Cutting", desc: "Precision automated wire length control" },
  strip: { title: "Stripping", desc: "Repeatable insulation removal" },
  crimp: { title: "Crimping", desc: "Controlled crimp force monitoring" },
  heatshrink: { title: "Heat Shrink", desc: "Sealed strain relief & protection" },
  inspect: { title: "Inspection", desc: "100% process verification" },
};

const ManufacturingAnimation = () => {
  const [hovered, setHovered] = useState<StationId | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />

      {/* Frame */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
        {/* Corner registration marks */}
        <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/50" />
        <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-primary/50" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-primary/50" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/50" />

        {/* Header spec label */}
        <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Assembly Process · Line 01
        </div>
        <div className="pointer-events-none absolute right-4 bottom-4 z-10 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          RUNNING
        </div>

        <svg
          viewBox="0 0 560 560"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Automated wire harness assembly animation"
        >
          <defs>
            {/* Blueprint grid pattern - pulsing */}
            <pattern id="mfg-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
            <pattern id="mfg-grid-major" width="140" height="140" patternUnits="userSpaceOnUse">
              <path
                d="M 140 0 L 0 0 0 140"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.8"
                opacity="0.6"
              />
            </pattern>

            {/* Radial mask for edge fade */}
            <radialGradient id="mfg-fade" cx="50%" cy="50%" r="55%">
              <stop offset="60%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mfg-fade-mask">
              <rect width="560" height="560" fill="url(#mfg-fade)" />
            </mask>

            {/* Wire flow gradient */}
            <linearGradient id="wire-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>

            {/* Copper glow */}
            <radialGradient id="copper-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf77" />
              <stop offset="100%" stopColor="#c97a2a" />
            </radialGradient>

            {/* Assembly wire path (serpentine) */}
            <path
              id="wire-path"
              d="M 20 140 L 540 140"
              fill="none"
            />
          </defs>

          {/* Background grid with pulse */}
          <g mask="url(#mfg-fade-mask)" className="mfg-grid-pulse">
            <rect width="560" height="560" fill="url(#mfg-grid)" opacity="0.35" />
            <rect width="560" height="560" fill="url(#mfg-grid-major)" opacity="0.5" />
          </g>

          {/* Dimension marks */}
          <g opacity="0.35" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">
            <line x1="60" y1="70" x2="500" y2="70" strokeDasharray="2 3" />
            <line x1="60" y1="65" x2="60" y2="75" />
            <line x1="500" y1="65" x2="500" y2="75" />
            <text x="280" y="63" textAnchor="middle">560.00 mm</text>
          </g>

          {/* --- MAIN PROCESS LINE (y = 200) --- */}

          {/* Rail / conveyor */}
          <line x1="20" y1="200" x2="540" y2="200" stroke="hsl(var(--border))" strokeWidth="1" />
          <line x1="20" y1="205" x2="540" y2="205" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.5" />

          {/* Station bases */}
          {[80, 180, 280, 380, 480].map((x) => (
            <g key={x}>
              <line x1={x} y1="195" x2={x} y2="215" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4" />
              <circle cx={x} cy="215" r="1.5" fill="hsl(var(--primary))" opacity="0.6" />
            </g>
          ))}

          {/* Traveling wire — copper core + insulation, animated */}
          <g className="wire-travel">
            {/* Insulation */}
            <rect x="0" y="196" width="80" height="8" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.9" />
            {/* Copper end (revealed after strip) */}
            <rect x="72" y="197" width="10" height="6" rx="1" fill="url(#copper-core)" opacity="0" className="copper-reveal" />
          </g>

          {/* Flowing pulse along wire path */}
          <line
            x1="0"
            y1="200"
            x2="120"
            y2="200"
            stroke="url(#wire-flow)"
            strokeWidth="2"
            opacity="0.7"
            className="flow-pulse"
          />

          {/* === STATION 1: CUTTING === */}
          <g
            className="station"
            transform="translate(80 200)"
            onMouseEnter={() => setHovered("cut")}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Machine body */}
            <rect x="-24" y="-52" width="48" height="42" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <rect x="-24" y="-52" width="48" height="6" fill="hsl(var(--primary))" opacity="0.2" />
            {/* Cutter blade */}
            <g className="cutter-blade">
              <line x1="0" y1="-46" x2="0" y2="-8" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <polygon points="-4,-10 4,-10 0,-4" fill="hsl(var(--primary))" />
            </g>
            {/* Status light */}
            <circle cx="18" cy="-48" r="2" fill="hsl(var(--primary))" className="status-light" />
            {/* Label */}
            <text x="0" y="-60" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">01 · CUT</text>
            {/* Hitbox */}
            <rect x="-28" y="-64" width="56" height="72" fill="transparent" style={{ cursor: "help" }} />
          </g>

          {/* === STATION 2: STRIPPING === */}
          <g
            className="station"
            transform="translate(180 200)"
            onMouseEnter={() => setHovered("strip")}
            onMouseLeave={() => setHovered(null)}
          >
            <rect x="-24" y="-52" width="48" height="42" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <rect x="-24" y="-52" width="48" height="6" fill="hsl(var(--primary))" opacity="0.2" />
            {/* Twin stripping jaws */}
            <g className="strip-jaws">
              <rect x="-8" y="-22" width="4" height="10" fill="hsl(var(--primary))" />
              <rect x="4" y="-22" width="4" height="10" fill="hsl(var(--primary))" />
            </g>
            <circle cx="18" cy="-48" r="2" fill="hsl(var(--primary))" className="status-light" style={{ animationDelay: "0.4s" }} />
            <text x="0" y="-60" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">02 · STRIP</text>
            <rect x="-28" y="-64" width="56" height="72" fill="transparent" style={{ cursor: "help" }} />
          </g>

          {/* === STATION 3: CRIMPING === */}
          <g
            className="station"
            transform="translate(280 200)"
            onMouseEnter={() => setHovered("crimp")}
            onMouseLeave={() => setHovered(null)}
          >
            <rect x="-26" y="-56" width="52" height="46" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <rect x="-26" y="-56" width="52" height="6" fill="hsl(var(--primary))" opacity="0.2" />
            {/* Crimp press hammer */}
            <g className="crimp-press">
              <rect x="-10" y="-46" width="20" height="26" rx="1" fill="hsl(var(--primary))" opacity="0.85" />
              <rect x="-14" y="-22" width="28" height="4" fill="hsl(var(--primary))" />
            </g>
            {/* Connector piece dropping in */}
            <g className="connector-drop">
              <rect x="-4" y="-14" width="10" height="6" rx="1" fill="hsl(var(--foreground))" opacity="0.9" />
              <rect x="-2" y="-11" width="2" height="2" fill="hsl(var(--primary))" />
            </g>
            <circle cx="20" cy="-52" r="2" fill="hsl(var(--primary))" className="status-light" style={{ animationDelay: "0.8s" }} />
            <text x="0" y="-64" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">03 · CRIMP</text>
            <rect x="-30" y="-68" width="60" height="76" fill="transparent" style={{ cursor: "help" }} />
          </g>

          {/* === STATION 4: HEAT SHRINK === */}
          <g
            className="station"
            transform="translate(380 200)"
            onMouseEnter={() => setHovered("heatshrink")}
            onMouseLeave={() => setHovered(null)}
          >
            <rect x="-24" y="-52" width="48" height="42" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <rect x="-24" y="-52" width="48" height="6" fill="hsl(var(--primary))" opacity="0.2" />
            {/* Heat tunnel */}
            <rect x="-18" y="-30" width="36" height="14" rx="2" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
            {/* Heat wavy lines */}
            <g className="heat-waves">
              <path d="M -12 -22 Q -8 -26 -4 -22 T 4 -22 T 12 -22" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7" />
              <path d="M -12 -18 Q -8 -22 -4 -18 T 4 -18 T 12 -18" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
            </g>
            <circle cx="18" cy="-48" r="2" fill="hsl(var(--primary))" className="status-light" style={{ animationDelay: "1.2s" }} />
            <text x="0" y="-60" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">04 · SEAL</text>
            <rect x="-28" y="-64" width="56" height="72" fill="transparent" style={{ cursor: "help" }} />
          </g>

          {/* === STATION 5: INSPECTION === */}
          <g
            className="station"
            transform="translate(480 200)"
            onMouseEnter={() => setHovered("inspect")}
            onMouseLeave={() => setHovered(null)}
          >
            <rect x="-26" y="-56" width="52" height="46" rx="3" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
            <rect x="-26" y="-56" width="52" height="6" fill="hsl(var(--primary))" opacity="0.2" />
            {/* Camera lens */}
            <circle cx="0" cy="-32" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
            <circle cx="0" cy="-32" r="4" fill="hsl(var(--primary))" opacity="0.3" />
            <circle cx="0" cy="-32" r="1.5" fill="hsl(var(--primary))" />
            {/* Scanning laser line */}
            <line x1="-22" y1="-16" x2="22" y2="-16" stroke="hsl(var(--primary))" strokeWidth="1.5" className="scan-laser" />
            <circle cx="20" cy="-52" r="2" fill="hsl(var(--primary))" className="status-light" style={{ animationDelay: "1.6s" }} />
            <text x="0" y="-64" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="hsl(var(--muted-foreground))">05 · SCAN</text>
            <rect x="-30" y="-68" width="60" height="76" fill="transparent" style={{ cursor: "help" }} />
          </g>

          {/* --- FINISHED ASSEMBLY SHOWCASE (bottom) --- */}
          <g transform="translate(280 400)" className="finished-assembly">
            {/* Rotating stage ring */}
            <circle cx="0" cy="30" r="90" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" className="stage-ring" />
            <circle cx="0" cy="30" r="70" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.6" />

            {/* Base plate */}
            <ellipse cx="0" cy="80" rx="60" ry="6" fill="hsl(var(--primary))" opacity="0.15" />

            {/* Finished RF cable assembly (rotates gently) */}
            <g className="assembly-rotate">
              {/* Left connector */}
              <g transform="translate(-70 30)">
                <rect x="-10" y="-8" width="14" height="16" rx="1" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <circle cx="-3" cy="0" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <circle cx="-3" cy="0" r="1.5" fill="hsl(var(--primary))" />
                <rect x="4" y="-4" width="4" height="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" />
              </g>
              {/* Cable body */}
              <path d="M -62 30 Q -30 10 0 30 T 62 30" fill="none" stroke="hsl(var(--foreground))" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
              <path d="M -62 30 Q -30 10 0 30 T 62 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              {/* Right connector */}
              <g transform="translate(70 30)">
                <rect x="-4" y="-8" width="14" height="16" rx="1" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <circle cx="3" cy="0" r="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <circle cx="3" cy="0" r="1.5" fill="hsl(var(--primary))" />
                <rect x="-8" y="-4" width="4" height="8" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" />
              </g>
              {/* Serial callout */}
              <text x="0" y="-8" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="hsl(var(--muted-foreground))" opacity="0.8">
                P/N CST-RF-0472 · REV A
              </text>
            </g>

            {/* QC pass badge */}
            <g className="qc-badge">
              <circle cx="70" cy="-30" r="10" fill="hsl(var(--primary))" opacity="0.15" />
              <circle cx="70" cy="-30" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
              <path d="M 66 -30 L 69 -27 L 74 -33" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>

        {/* Tooltip */}
        {hovered && (
          <div className="pointer-events-none absolute left-1/2 top-[45%] z-20 w-56 -translate-x-1/2 -translate-y-full rounded-lg border border-primary/30 bg-card/95 p-3 shadow-xl backdrop-blur-md animate-fade-in">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {STATIONS[hovered].title}
            </div>
            <div className="mt-1 text-xs text-foreground">
              {STATIONS[hovered].desc}
            </div>
          </div>
        )}
      </div>

      {/* Local animation styles */}
      <style>{`
        @keyframes wire-travel {
          0%   { transform: translateX(-80px); }
          15%  { transform: translateX(0); }
          30%  { transform: translateX(100px); }
          45%  { transform: translateX(200px); }
          60%  { transform: translateX(300px); }
          75%  { transform: translateX(400px); }
          90%  { transform: translateX(480px); }
          100% { transform: translateX(560px); }
        }
        .wire-travel { animation: wire-travel 10s linear infinite; transform-box: fill-box; will-change: transform; }
        .copper-reveal { animation: copper-reveal 10s linear infinite; }
        @keyframes copper-reveal {
          0%, 30% { opacity: 0; }
          32%, 100% { opacity: 1; }
        }

        @keyframes flow-pulse {
          0%   { transform: translateX(-120px); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.8; }
          100% { transform: translateX(560px); opacity: 0; }
        }
        .flow-pulse { animation: flow-pulse 4s linear infinite; will-change: transform; }

        @keyframes cutter-blade {
          0%, 8%   { transform: translateY(0); }
          12%, 15% { transform: translateY(22px); }
          20%, 100%{ transform: translateY(0); }
        }
        .cutter-blade { animation: cutter-blade 10s ease-in-out infinite; transform-box: fill-box; transform-origin: center top; }

        @keyframes strip-jaws {
          0%, 28% { transform: translateX(0); }
          33%, 38% { transform: translateX(-4px); }
          43%, 100% { transform: translateX(0); }
        }
        .strip-jaws { animation: strip-jaws 10s ease-in-out infinite; transform-box: fill-box; }
        .strip-jaws rect:last-child { animation: strip-jaws-r 10s ease-in-out infinite; transform-box: fill-box; }
        @keyframes strip-jaws-r {
          0%, 28% { transform: translateX(0); }
          33%, 38% { transform: translateX(4px); }
          43%, 100% { transform: translateX(0); }
        }

        @keyframes crimp-press {
          0%, 48% { transform: translateY(0); }
          53%, 58% { transform: translateY(14px); }
          63%, 100% { transform: translateY(0); }
        }
        .crimp-press { animation: crimp-press 10s ease-in-out infinite; transform-box: fill-box; }

        @keyframes connector-drop {
          0%, 45% { transform: translateY(-20px); opacity: 0; }
          48%, 55% { transform: translateY(0); opacity: 1; }
          65%, 100% { transform: translateY(0); opacity: 1; }
        }
        .connector-drop { animation: connector-drop 10s ease-in-out infinite; transform-box: fill-box; }

        @keyframes heat-waves {
          0%, 65% { opacity: 0; transform: translateY(4px); }
          70%, 78% { opacity: 1; transform: translateY(0); }
          85%, 100% { opacity: 0; transform: translateY(-2px); }
        }
        .heat-waves { animation: heat-waves 10s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }

        @keyframes scan-laser {
          0%, 82% { transform: translateY(-16px); opacity: 0; }
          85% { opacity: 1; }
          92% { transform: translateY(8px); opacity: 1; }
          95%, 100% { opacity: 0; }
        }
        .scan-laser { animation: scan-laser 10s ease-in-out infinite; transform-box: fill-box; }

        @keyframes status-light {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; filter: drop-shadow(0 0 3px hsl(var(--primary))); }
        }
        .status-light { animation: status-light 2s ease-in-out infinite; }

        @keyframes stage-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .stage-ring { animation: stage-ring 20s linear infinite; transform-box: fill-box; transform-origin: center; }

        @keyframes assembly-rotate {
          0%, 92% { transform: rotateY(0deg); opacity: 1; }
          96%, 99% { opacity: 0; }
          100% { opacity: 0; }
        }
        .assembly-rotate {
          animation: assembly-rotate 10s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes qc-badge {
          0%, 88% { opacity: 0; transform: scale(0.6); }
          92%, 100% { opacity: 1; transform: scale(1); }
        }
        .qc-badge { animation: qc-badge 10s ease-out infinite; transform-box: fill-box; transform-origin: center; }

        @keyframes mfg-grid-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .mfg-grid-pulse { animation: mfg-grid-pulse 6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .wire-travel, .flow-pulse, .cutter-blade, .strip-jaws, .strip-jaws rect:last-child,
          .crimp-press, .connector-drop, .heat-waves, .scan-laser, .status-light,
          .stage-ring, .assembly-rotate, .qc-badge, .mfg-grid-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ManufacturingAnimation;
