import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Factory,
  Cpu,
  Wrench,
  Cable,
  Layers,
  Network,
  Rocket,
  Clock,
  MessageSquare,
  Lock,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RelatedResources from "@/components/RelatedResources";

const PAGE_TITLE = "Custom Wire Harness Manufacturer USA | AS9100 & ITAR | Castmen Electronics";
const PAGE_DESCRIPTION =
  "U.S.-based custom wire harness manufacturer for aerospace, defense, and industrial applications. AS9100 certified, ITAR compliant, fast turnaround. Request a quote.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const capabilities = [
  {
    icon: Cable,
    title: "Build-to-Print Wire Harnesses",
    desc: "Manufactured exactly to your drawings, specifications, and requirements.",
  },
  {
    icon: Layers,
    title: "Custom Cable Assemblies",
    desc: "RF coaxial, fiber optic, high-voltage, ribbon, and multi-conductor cables.",
  },
  {
    icon: Network,
    title: "Complex Harnesses",
    desc: "Multi-branch, high-density, and space-constrained assemblies.",
  },
  {
    icon: Cpu,
    title: "Panel Wiring & Integration",
    desc: "Complete system-level wiring and labeling solutions.",
  },
  {
    icon: Rocket,
    title: "Prototype to Production",
    desc: "Seamless transition from development builds to volume manufacturing.",
  },
];

const engineeringPoints = [
  "Design-for-manufacturing (DFM) support",
  "Material and component selection",
  "Connector and routing optimization",
  "Revision and configuration control",
  "Direct access to engineers",
];

const usBenefits = [
  {
    icon: Clock,
    title: "Faster Lead Times",
    desc: "Avoid long overseas delays and supply chain uncertainty.",
  },
  {
    icon: MessageSquare,
    title: "Improved Communication",
    desc: "Work in real-time with your manufacturing partner.",
  },
  {
    icon: Factory,
    title: "Supply Chain Security",
    desc: "Reliable sourcing and reduced risk.",
  },
  {
    icon: Lock,
    title: "ITAR Compliance",
    desc: "Essential for defense and controlled applications.",
  },
];

const qualityStandards = [
  "AS9100D / ISO 9001:2015 certified",
  "IPC/WHMA-A-620 workmanship standards",
  "IPC J-STD-001 soldering standards",
  "100% functional testing",
];

const industries = [
  "Aerospace",
  "Defense",
  "Robotics & Automation",
  "Industrial Equipment",
  "Medical Devices",
  "Renewable Energy",
  "Data Centers",
];

const useCasePoints = [
  "Tight tolerances and complex assemblies",
  "Consistent quality across production runs",
  "Reliable delivery schedules",
  "Engineering collaboration",
];

const expectations = [
  "Response within 24 hours",
  "Engineering review included",
  "NDA available upon request",
];

const faqs = [
  {
    q: "Do you support fully custom designs?",
    a: "Yes, we build to your exact specifications or assist with design.",
  },
  {
    q: "What volumes do you handle?",
    a: "We support both low-volume prototypes and high-volume production.",
  },
  {
    q: "Are your assemblies tested?",
    a: "Yes, all assemblies undergo 100% functional testing.",
  },
];

const CustomWireHarnessUSA = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    setMeta("description", PAGE_DESCRIPTION);
    setMeta("og:title", PAGE_TITLE, "property");
    setMeta("og:description", PAGE_DESCRIPTION, "property");
    setMeta("twitter:title", PAGE_TITLE);
    setMeta("twitter:description", PAGE_DESCRIPTION);

    // FAQ JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-wireharness";
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
      document.getElementById("faq-jsonld-wireharness")?.remove();
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
                AS9100D CERTIFIED • ITAR COMPLIANT • MADE IN USA
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Custom Wire Harness Manufacturer in the USA
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                High-reliability, build-to-print and fully custom wire harnesses manufactured
                domestically for aerospace, defense, and advanced technology applications.
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
                  "U.S.-based production for faster lead times",
                  "Rapid prototype to production scaling",
                  "<0.5% RMA rate",
                  "Direct engineer-to-engineer support",
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
              If you're searching for a custom wire harness manufacturer in the USA, you need
              more than just assembly—you need a partner who can deliver speed, precision, and
              reliability.
            </p>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics specializes in custom cable assemblies and wire harnesses built
              to your exact specifications. From early-stage prototypes to full production runs,
              we support OEMs across aerospace, defense, robotics, and industrial sectors.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Custom Wire Harness & Cable Assembly Capabilities
              </h2>
              <p className="text-muted-foreground">We manufacture a wide range of custom assemblies.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <Card key={c.title} className="border-border/50 bg-background/50">
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
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Wrench className="h-4 w-4" /> ENGINEERING SUPPORT
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Engineering Collaboration from Start to Finish
              </h2>
              <p className="mb-6 text-muted-foreground">
                We work directly with your engineering team to ensure optimal performance and
                manufacturability.
              </p>
              <p className="text-sm font-medium text-foreground">
                No sales layer—just technical expertise when you need it.
              </p>
            </div>
            <ul className="space-y-3">
              {engineeringPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY US MFG */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Benefits of Choosing a U.S.-Based Manufacturer
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {usBenefits.map((b) => (
                <Card key={b.title} className="border-border/50 bg-background/50">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{b.title}</CardTitle>
                    <CardDescription>{b.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
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
              Certified Quality You Can Depend On
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

        {/* INDUSTRIES */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Industries We Serve
              </h2>
            </div>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {industries.map((i) => (
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

        {/* USE CASE */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for High-Reliability Applications
            </h2>
            <p className="mb-10 text-muted-foreground">We support customers requiring:</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {useCasePoints.map((p) => (
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
                Get a Quote for Custom Wire Harness Manufacturing
              </h2>
              <p className="mb-8 text-muted-foreground">
                Work with a U.S.-based partner focused on speed, quality, and responsiveness.
              </p>
              <div className="mb-8 grid gap-3 text-left sm:grid-cols-3">
                {expectations.map((e) => (
                  <div
                    key={e}
                    className="flex items-start gap-2 rounded-lg border border-border/50 bg-card/50 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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

        <RelatedResources currentPath="/custom-wire-harness-manufacturer-usa" />
      </main>
      <Footer />
    </div>
  );
};

export default CustomWireHarnessUSA;
