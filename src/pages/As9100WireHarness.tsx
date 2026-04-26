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
  Flag,
  FileCheck,
  BadgeCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RelatedResources from "@/components/RelatedResources";

const PAGE_TITLE = "AS9100 Wire Harness Manufacturer | ITAR Cable Assembly | Castmen Electronics";
const PAGE_DESCRIPTION =
  "AS9100D-certified wire harness manufacturer in the USA. ITAR compliant, rapid turnaround, and 100% tested cable assemblies for aerospace and defense. Request a quote.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const as9100Points = [
  "Risk management and product safety",
  "Configuration control and traceability",
  "Supplier quality management",
  "Documentation and process control",
];

const capabilities = [
  {
    icon: Cable,
    title: "Custom Wire Harness Assembly",
    desc: "Build-to-print or design assistance for simple to highly complex harnesses.",
  },
  {
    icon: Radio,
    title: "Cable Assemblies",
    desc: "RF coaxial, fiber optic, high-voltage, ribbon, and multi-conductor cables.",
  },
  {
    icon: ShieldCheck,
    title: "MIL-SPEC & Aerospace Applications",
    desc: "Manufactured to meet stringent military and aerospace requirements.",
  },
  {
    icon: Rocket,
    title: "Prototype to Production",
    desc: "Rapid prototyping with scalable production capabilities.",
  },
  {
    icon: Layers,
    title: "EMI/RFI Shielding",
    desc: "Signal integrity solutions for high-performance systems.",
  },
  {
    icon: Network,
    title: "Panel Wiring & Integration",
    desc: "Complete assembly and labeling for system-level integration.",
  },
];

const engineeringPoints = [
  "Build-to-print and design-for-manufacturing (DFM) support",
  "Complex, multi-branch harness expertise",
  "Component sourcing (UL, CSA, RoHS compliant)",
  "Documentation and revision control",
  "Direct access to engineers — no sales bottlenecks",
];

const qualityStandards = [
  "100% functional testing",
  "Electrical, mechanical, and environmental validation",
  "IPC/WHMA-A-620 workmanship standards",
  "IPC J-STD-001 soldering standards",
  "Full traceability and documentation",
];

const industries = [
  "Aerospace",
  "Defense",
  "Space Systems",
  "Robotics & Automation",
  "Data Centers",
  "Medical Devices",
  "Industrial Equipment",
];

const whyChoose = [
  {
    icon: Flag,
    title: "U.S.-Based Manufacturing",
    desc: "Faster lead times and secure, ITAR-compliant production.",
  },
  {
    icon: Zap,
    title: "Rapid Turnaround",
    desc: "Expedited prototypes and production to keep your program on schedule.",
  },
  {
    icon: UserCheck,
    title: "Engineer-to-Engineer Support",
    desc: "Work directly with technical experts to solve complex challenges.",
  },
  {
    icon: BadgeCheck,
    title: "Certified, Consistent Quality",
    desc: "100% IPC-certified team ensuring repeatable results.",
  },
  {
    icon: Layers,
    title: "Flexible Production",
    desc: "Low-to-high volume manufacturing with responsive service.",
  },
];

const useCasePoints = [
  "Flight-critical systems",
  "Defense electronics",
  "High-reliability automation systems",
];

const expectations = [
  "Response within 24 hours",
  "Engineering review available",
  "NDA available upon request",
];

const faqs = [
  {
    q: "Do you support build-to-print projects?",
    a: "Yes, we regularly manufacture to customer drawings and specifications.",
  },
  {
    q: "Are you ITAR compliant?",
    a: "Yes, we are ITAR registered and support defense-related projects.",
  },
  {
    q: "What is your typical lead time?",
    a: "Lead times vary by complexity, but expedited options are available.",
  },
  {
    q: "Do you offer prototype builds?",
    a: "Yes, we specialize in rapid prototyping and quick-turn orders.",
  },
];

const As9100WireHarness = () => {
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
    script.id = "faq-jsonld-as9100";
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
      document.getElementById("faq-jsonld-as9100")?.remove();
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
                AS9100D / ISO 9001:2015 • ITAR COMPLIANT • 100% TESTED
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                AS9100 Wire Harness Manufacturer for Aerospace & Defense
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Build-to-print and custom cable assemblies manufactured in the USA with certified
                quality, rapid turnaround, and zero-compromise reliability.
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
                  "Rapid prototype & production turnaround",
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
              When your application demands absolute reliability, working with an AS9100-certified
              wire harness manufacturer is critical.
            </p>
            <p className="text-lg text-muted-foreground">
              At Castmen Electronics, we specialize in high-reliability cable assemblies for
              aerospace, defense, and advanced technology systems. Our AS9100D-certified quality
              management system ensures every harness meets strict performance, traceability, and
              documentation requirements.
            </p>
            <p className="text-lg text-muted-foreground">
              From prototype to full production, we deliver precision-built wire harnesses
              designed for mission-critical environments.
            </p>
          </div>
        </section>

        {/* WHAT IS AS9100 */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What Does AS9100 Certification Mean?
              </h2>
              <p className="mb-10 text-muted-foreground">
                AS9100 is the internationally recognized quality management standard for the
                aerospace and defense industry. It builds on ISO 9001 with additional
                requirements for:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {as9100Points.map((p) => (
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
              Working with an AS9100-certified manufacturer ensures your cable assemblies meet the
              highest standards for reliability, consistency, and compliance.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              AS9100-Compliant Wire Harness & Cable Assembly Capabilities
            </h2>
            <p className="text-muted-foreground">
              We support a wide range of applications and specifications.
            </p>
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
                  <Wrench className="h-4 w-4" /> ENGINEERING SUPPORT
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Built for Engineers, Not Just Procurement
                </h2>
                <p className="text-muted-foreground">
                  We work directly with your engineering team to ensure manufacturability,
                  performance, and long-term reliability.
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
              <Award className="h-4 w-4" /> QUALITY & TESTING
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              AS9100 Quality You Can Trust
            </h2>
            <p className="text-muted-foreground">
              Every assembly is built and verified to meet strict quality standards.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <ul className="space-y-3">
              {qualityStandards.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
                >
                  <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
              <p className="text-muted-foreground">
                We manufacture AS9100-compliant wire harnesses for:
              </p>
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

        {/* WHY CHOOSE CASTMEN */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why Choose Castmen as Your AS9100 Wire Harness Manufacturer?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* USE CASE / PROOF */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Proven in Mission-Critical Applications
              </h2>
              <p className="mb-10 text-muted-foreground">
                We support programs where performance and reliability are non-negotiable,
                including aerospace and defense systems requiring strict compliance and rapid
                delivery timelines. Our team has experience supporting:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {useCasePoints.map((p) => (
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

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Request a Quote for AS9100 Wire Harness Manufacturing
              </h2>
              <p className="mb-8 text-muted-foreground">
                Whether you need a prototype or full production run, our team is ready to deliver
                fast, reliable results.
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

        <RelatedResources currentPath="/as9100-wire-harness-manufacturer" />
      </main>
      <Footer />
    </div>
  );
};

export default As9100WireHarness;
