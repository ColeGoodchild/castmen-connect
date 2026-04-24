import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Cable,
  Layers,
  Network,
  Rocket,
  Radio,
  Wrench,
  Award,
  Zap,
  Clock,
  Lock,
  UserCheck,
  Thermometer,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PAGE_TITLE = "MIL-SPEC Cable Assemblies | Military Wire Harness Manufacturer | Castmen Electronics";
const PAGE_DESCRIPTION =
  "MIL-SPEC cable assembly manufacturer for defense and aerospace. AS9100 certified, ITAR compliant, and built for mission-critical performance. Request a quote.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const milspecPoints = [
  "High durability in extreme environments",
  "Resistance to vibration, heat, and moisture",
  "Consistent, repeatable performance",
  "Strict material and construction requirements",
];

const capabilities = [
  {
    icon: Cable,
    title: "Custom Wire Harnesses",
    desc: "Complex, multi-branch harnesses built to specification.",
  },
  {
    icon: Radio,
    title: "Military-Grade Cable Assemblies",
    desc: "RF coaxial, power cables, and specialized configurations.",
  },
  {
    icon: Thermometer,
    title: "Environmental Durability",
    desc: "Designed for harsh operating conditions.",
  },
  {
    icon: Rocket,
    title: "Prototype to Production",
    desc: "Rapid builds and scalable manufacturing.",
  },
  {
    icon: Layers,
    title: "Shielding & Protection",
    desc: "Advanced EMI/RFI shielding for sensitive systems.",
  },
];

const engineeringPoints = [
  "Build-to-print manufacturing",
  "Design-for-manufacturing support",
  "Material and component selection",
  "Revision and configuration control",
];

const qualityStandards = [
  "AS9100D / ISO 9001:2015",
  "IPC/WHMA-A-620",
  "IPC J-STD-001",
  "100% functional testing",
];

const applications = [
  "Military Systems",
  "Aerospace Platforms",
  "Ground Vehicles",
  "Naval Systems",
  "Communication Systems",
];

const whyChoose = [
  {
    icon: Network,
    title: "Precision Manufacturing",
    desc: "Built to exact specifications with consistent quality.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Meet tight program timelines with expedited production.",
  },
  {
    icon: Lock,
    title: "U.S.-Based & ITAR Compliant",
    desc: "Secure, compliant manufacturing.",
  },
  {
    icon: UserCheck,
    title: "Engineer Access",
    desc: "Work directly with experts who understand your requirements.",
  },
];

const expectations = [
  "Fast response within 24 hours",
  "Engineering support included",
  "NDA available",
];

const faqs = [
  {
    q: "Do you build to specific MIL standards?",
    a: "Yes, we manufacture to customer-specified military requirements.",
  },
  {
    q: "Do you offer prototypes?",
    a: "Yes, we support rapid prototyping and production.",
  },
  {
    q: "Are your assemblies tested?",
    a: "Yes, all assemblies undergo 100% functional testing.",
  },
];

const MilSpecCableAssemblies = () => {
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
    script.id = "faq-jsonld-milspec";
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
      document.getElementById("faq-jsonld-milspec")?.remove();
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
                <ShieldCheck className="h-3.5 w-3.5" />
                AS9100D CERTIFIED • ITAR COMPLIANT • 100% TESTED
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                MIL-SPEC Cable Assemblies Built for Mission-Critical Performance
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                High-reliability wire harnesses manufactured to meet stringent military and
                aerospace specifications.
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
                {[
                  "<0.5% RMA rate",
                  "98% on-time delivery",
                  "Built to strict military standards",
                  "Rapid turnaround available",
                ].map((item) => (
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
              When failure is not an option, you need a MIL-SPEC cable assembly manufacturer with
              proven quality and precision.
            </p>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics builds military-grade wire harnesses and cable assemblies
              designed to meet rigorous performance, durability, and environmental requirements.
              We support defense, aerospace, and advanced systems operating in demanding
              conditions.
            </p>
          </div>
        </section>

        {/* WHAT IS MIL-SPEC */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What Are MIL-SPEC Cable Assemblies?
              </h2>
              <p className="mb-10 text-muted-foreground">
                MIL-SPEC (military specification) cable assemblies are built to meet strict
                standards defined by the U.S. Department of Defense. These standards ensure:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {milspecPoints.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              MIL-SPEC Cable Assembly Capabilities
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* ENGINEERING */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                  <Wrench className="h-4 w-4" /> ENGINEERING
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Engineered for Performance & Reliability
                </h2>
                <p className="text-muted-foreground">
                  Our team collaborates directly with your engineers to ensure compliance and
                  performance.
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
              Built to Meet the Highest Standards
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <ul className="space-y-3">
              {qualityStandards.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { stat: "<0.5%", label: "RMA Rate" },
                { stat: "98%", label: "On-Time Delivery" },
                { stat: "0", label: "Defect Goal" },
              ].map((m) => (
                <Card key={m.label} className="border-border/50 bg-card/50 text-center">
                  <CardContent className="pt-6">
                    <div className="mb-1 text-3xl font-bold text-primary">{m.stat}</div>
                    <div className="text-sm text-muted-foreground">{m.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Applications
              </h2>
            </div>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE CASTMEN */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Your MIL-SPEC Manufacturing Partner
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <Card key={w.title} className="border-border/50 bg-card/40">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{w.title}</CardTitle>
                  <CardDescription>{w.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Request a Quote for MIL-SPEC Cable Assemblies
              </h2>
              <p className="mb-8 text-muted-foreground">
                Get high-reliability cable assemblies built to your exact specifications.
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

export default MilSpecCableAssemblies;
