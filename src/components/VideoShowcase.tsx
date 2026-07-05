import { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Scissors,
  ShieldCheck,
  Award,
  Layers3,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const FACILITY_MACHINE_VIDEO_URL = "/videos/facility-machine.mp4";

const capabilities = [
  {
    icon: Cpu,
    title: "Automated Manufacturing",
    desc: "Modern equipment delivering repeatable production.",
  },
  {
    icon: Scissors,
    title: "Precision Wire Processing",
    desc: "Automated cutting, stripping, and preparation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Verification",
    desc: "Processes designed for consistent quality.",
  },
  {
    icon: Award,
    title: "Aerospace Standards",
    desc: "Produced under our AS9100-certified quality system.",
  },
  {
    icon: Layers3,
    title: "Scalable Production",
    desc: "Prototypes through full production volumes.",
  },
  {
    icon: FileCheck2,
    title: "Full Traceability",
    desc: "Documented processes and serialized production when required.",
  },
];

const hotspots = [
  { top: "22%", left: "28%", label: "Precision Wire Feed" },
  { top: "58%", left: "52%", label: "Automatic Processing" },
  { top: "38%", left: "78%", label: "Quality Monitoring" },
];

const VideoShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Lazy-start playback only when in view
          videoRef.current?.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      aria-label="Inside the facility"
    >
      {/* Faint blueprint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] animate-[grid-drift_40s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 90%)",
        }}
      />

      <style>{`
        @keyframes grid-drift {
          from { background-position: 0 0, 0 0; }
          to { background-position: 56px 56px, 56px 56px; }
        }
        @keyframes scan-sweep {
          0% { transform: translateY(-10%); opacity: 0; }
          8% { opacity: 1; }
          40% { transform: translateY(110%); opacity: 1; }
          45%, 100% { opacity: 0; transform: translateY(110%); }
        }
        .scan-line {
          animation: scan-sweep 12s ease-in-out infinite;
        }
        @keyframes hotspot-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.35); opacity: 0.4; }
        }
      `}</style>

      <div className="container relative mx-auto px-4">
        {/* Section heading */}
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Inside the Facility
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Precision Manufacturing
            <span className="block text-gradient">Powered by Advanced Automation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            At Castmen Corporation, we continuously invest in advanced
            manufacturing technology to improve quality, repeatability, and
            production efficiency. Our automated equipment supports precision
            wire processing, cable assembly, and mission-critical manufacturing
            for aerospace, defense, medical, industrial, and telecommunications
            applications.
          </p>
        </div>

        {/* Video + capabilities layout */}
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Video (60% on desktop) */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="group relative">
              {/* Corner spec labels */}
              <div className="absolute -top-3 left-6 z-20 rounded-sm border border-primary/40 bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                CAM · 01
              </div>
              <div className="absolute -top-3 right-6 z-20 rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                FACILITY LIVE
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-2xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_hsl(190_100%_50%/0.4)]">
                <video
                  ref={videoRef}
                  src={facilityMachineVideo.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="block h-full max-h-[640px] w-full object-cover"
                  aria-label="Castmen Corporation automated manufacturing machine"
                />

                {/* Blueprint grid overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Dimension lines */}
                <div className="pointer-events-none absolute inset-4 rounded-lg border border-primary/20" />
                <div className="pointer-events-none absolute left-4 top-1/2 h-px w-6 bg-primary/40" />
                <div className="pointer-events-none absolute right-4 top-1/2 h-px w-6 bg-primary/40" />
                <div className="pointer-events-none absolute left-1/2 top-4 h-6 w-px bg-primary/40" />
                <div className="pointer-events-none absolute bottom-4 left-1/2 h-6 w-px bg-primary/40" />

                {/* Corner registration marks */}
                <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-primary/60" />
                <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-primary/60" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-primary/60" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-primary/60" />

                {/* Scanning inspection line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden">
                  <div className="scan-line absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
                </div>

                {/* Status indicator */}
                <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  AS9100D
                </div>

                {/* Hover hotspots */}
                {hotspots.map((h, i) => (
                  <div
                    key={i}
                    className="group/hot absolute z-10"
                    style={{ top: h.top, left: h.left }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <span
                        className="absolute inset-0 h-3 w-3 rounded-full bg-primary/60"
                        style={{
                          animation: `hotspot-pulse 2.4s ease-in-out ${i * 0.6}s infinite`,
                        }}
                      />
                      <span className="relative block h-3 w-3 rounded-full border border-primary bg-primary/80 shadow-[0_0_12px_hsl(var(--primary))]" />
                      <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-primary/40 bg-background/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover/hot:opacity-100">
                        {h.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities (40% on desktop) */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group/card flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 90}ms` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-700 sm:p-10 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to Build Your Next Project?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Whether you need custom wire harnesses, cable assemblies, RF cable
            assemblies, or complete electromechanical assemblies, our team is
            ready to support your next program.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/10"
            >
              View Manufacturing Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
