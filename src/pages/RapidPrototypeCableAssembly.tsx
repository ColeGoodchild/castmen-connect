import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Cable,
  Layers,
  Rocket,
  Wrench,
  Award,
  Zap,
  Clock,
  UserCheck,
  FileCheck,
  Gauge,
  Timer,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PAGE_TITLE =
  "Rapid Prototype Cable Assembly | Fast Turn Wire Harness Manufacturing | Castmen Electronics";
const PAGE_DESCRIPTION =
  "Rapid prototype cable assembly with fast turnaround. AS9100 certified, ITAR compliant wire harness manufacturer for aerospace, defense, and OEMs. Get a quote fast.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const heroPoints = [
  "Expedited prototype builds",
  "Direct engineer support",
  "100% tested assemblies",
  "Fast transition to production",
];

const speedPoints = [
  "Priority scheduling for new prototype orders",
  "Streamlined engineering review",
  "Efficient material sourcing",
  "Dedicated focus on quick-turn builds",
];

const capabilities = [
  {
    icon: Cable,
    title: "Custom Wire Harness Prototypes",
    desc: "Fast builds for testing and validation.",
  },
  {
    icon: Layers,
    title: "Cable Assemblies",
    desc: "RF, high-voltage, multi-conductor, and complex configurations.",
  },
  {
    icon: Wrench,
    title: "Design Support",
    desc: "Assistance with manufacturability and optimization.",
  },
  {
    icon: Rocket,
    title: "Low-Volume Production",
    desc: "Bridge production between prototype and full-scale manufacturing.",
  },
];

const engineeringPoints = [
  "Immediate feedback on designs",
  "Rapid response to revisions",
  "Design-for-manufacturing input",
  "Direct engineer-to-engineer collaboration",
];

const qualityStandards = [
  "AS9100D-certified processes",
  "IPC/WHMA-A-620 workmanship",
  "IPC J-STD-001 soldering",
  "100% functional testing",
];

const useCases = [
  "Product development cycles",
  "Engineering validation builds",
  "Pre-production runs",
  "Urgent replacement assemblies",
  "Time-sensitive aerospace and defense projects",
];

const proofPoints = [
  "Recover delayed development timelines",
  "Accelerate product launches",
  "Quickly validate new designs",
  "Transition seamlessly into production",
];

const expectations = [
  "Response within 24 hours",
  "Expedited options available",
  "Engineering review included",
];

const faqs = [
  {
    q: "How fast can you deliver prototypes?",
    a: "Lead times vary, but expedited builds are available depending on complexity.",
  },
  {
    q: "Do you support design changes during prototyping?",
    a: "Yes, we work closely with your team to adapt quickly.",
  },
  {
    q: "Can you scale to production after prototyping?",
    a: "Yes, we provide a seamless transition to full production.",
  },
];

const RapidPrototypeCableAssembly = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    setMeta("description", PAGE_DESCRIPTION);
    setMeta("og:title", PAGE_TITLE, "property");
    setMeta("og:description", PAGE_DESCRIPTION, "property");
    setMeta("twitter:title", PAGE_TITLE);
    setMeta("twitter:description", PAGE_DESCRIPTION);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-rapid-prototype";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      document.getElementById("faq-jsonld-rapid-prototype")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card/40 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="container relative mx-auto px-4 py-20 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary">
                <Zap className="h-3.5 w-3.5" />
                AS9100D CERTIFIED • ITAR COMPLIANT • EXPEDITED PRODUCTION AVAILABLE
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Rapid Prototype Cable Assembly — Delivered When You Need It
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Fast-turn wire harness and cable assembly manufacturing to keep your development
                timeline on track.
              </p>
              <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/#contact">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#contact">Talk to an Engineer</Link>
                </Button>
              </div>

              <div className="mx-auto grid max-w-3xl gap-3 text-left sm:grid-cols-2">
                {heroPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-border/50 bg-card/50 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="container mx-auto px-4 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <p className="text-lg text-muted-foreground">
              When timelines are tight, delays in cable assembly can put your entire project at
              risk.
            </p>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics specializes in rapid prototype cable assembly, helping engineers
              and OEMs move quickly from design to validation. We prioritize speed without
              compromising the quality and reliability required for mission-critical systems.
            </p>
          </div>
        </section>

        {/* WHAT MAKES US FAST */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Timer className="h-4 w-4" /> WHAT MAKES US FAST
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Built for Rapid Turnaround
              </h2>
              <p className="mb-10 text-muted-foreground">
                Our processes are optimized for speed:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {speedPoints.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
              Your project moves fast—from quote to delivery.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Rapid Prototype Capabilities
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <Card key={c.title} className="border-border/50 bg-card/40">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* ENGINEERING SUPPORT */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                  <UserCheck className="h-4 w-4" /> ENGINEERING SUPPORT
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Work Directly with Engineers
                </h2>
                <p className="text-muted-foreground">
                  Speed comes from clear communication and fast decision-making.
                </p>
              </div>
              <ul className="space-y-3">
                {engineeringPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* QUALITY */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
              <Award className="h-4 w-4" /> QUALITY
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Fast Doesn't Mean Compromised Quality
            </h2>
            <p className="text-muted-foreground">
              Even under tight timelines, every assembly meets strict quality standards.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {qualityStandards.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
              >
                <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ideal For
              </h2>
            </div>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {useCases.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS / PROOF */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
              <Gauge className="h-4 w-4" /> RESULTS
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Proven Rapid Turnaround Performance
            </h2>
            <p className="mb-10 text-muted-foreground">We've helped customers:</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {proofPoints.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Get a Fast Quote for Your Prototype
              </h2>
              <p className="mb-8 text-muted-foreground">
                Keep your project moving with a manufacturing partner built for speed.
              </p>
              <div className="mb-8 grid gap-3 text-left sm:grid-cols-3">
                {expectations.map((e) => (
                  <div
                    key={e}
                    className="flex items-start gap-2 rounded-lg border border-border/50 bg-card/50 p-3"
                  >
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{e}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/#contact">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#contact">Talk to an Engineer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <Card key={f.q} className="border-border/50 bg-card/40">
                  <CardHeader>
                    <CardTitle className="text-lg">{f.q}</CardTitle>
                    <CardDescription className="text-base">{f.a}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RapidPrototypeCableAssembly;
