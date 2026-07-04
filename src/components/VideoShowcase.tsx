import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Cpu, Ruler, ShieldCheck } from "lucide-react";
import finishedMachineVideo from "@/assets/finished-machine.mp4.asset.json";
import finishedMachinePoster from "@/assets/finished-machine-poster.jpg.asset.json";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      aria-label="Precision manufacturing in action"
    >
      {/* Blueprint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
      {/* Technical crosshair marks */}
      <div className="pointer-events-none absolute left-8 top-8 h-6 w-6 border-l border-t border-primary/40" />
      <div className="pointer-events-none absolute right-8 top-8 h-6 w-6 border-r border-t border-primary/40" />
      <div className="pointer-events-none absolute bottom-8 left-8 h-6 w-6 border-b border-l border-primary/40" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-6 w-6 border-b border-r border-primary/40" />

      {/* Radial accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

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
            Precision Manufacturing,
            <span className="block text-gradient">Engineered in Motion</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A real look inside our AS9100D-certified production floor — automated
            precision, tight tolerances, and process discipline built for
            aerospace, defense, and mission-critical programs.
          </p>
        </div>

        {/* Video frame */}
        <div
          className={`relative mx-auto max-w-6xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Corner spec labels */}
          <div className="absolute -top-3 left-6 z-10 rounded-sm border border-primary/40 bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
            REC · 01
          </div>
          <div className="absolute -top-3 right-6 z-10 rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            CASTMEN · FACILITY FEED
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 hover:shadow-[0_30px_80px_-20px_hsl(190_100%_50%/0.35)] hover:border-primary/40">
            {/* Inner ring */}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-primary/10" />

            <video
              ref={videoRef}
              src={finishedMachineVideo.url}
              poster={finishedMachinePoster.url}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-auto w-full object-cover"
              aria-label="Castmen Electronics manufacturing floor footage"
            />

            {/* Subtle gradient overlay for control legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background/80 text-primary backdrop-blur-md transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-md sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                LIVE FEED · AS9100D
              </div>
            </div>
          </div>

          {/* Spec strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: Ruler,
                label: "Tight Tolerances",
                value: "Repeatable precision on every build",
              },
              {
                icon: Cpu,
                label: "Automated Process",
                value: "Machine-controlled consistency",
              },
              {
                icon: ShieldCheck,
                label: "AS9100D Verified",
                value: "Documented, traceable, audit-ready",
              },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`group/card flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + i * 120}ms` }}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {label}
                  </div>
                  <div className="mt-1 text-sm text-foreground">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
