import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Radio,
  Activity,
  Gauge,
  FileCheck,
  Award,
  Zap,
  Clock,
  ShieldCheck,
  Waves,
  FlaskConical,
  Factory,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RelatedResources from "@/components/RelatedResources";

const PAGE_TITLE = "RF Cable Manufacturing & VNA Testing | Castmen Electronics";
const PAGE_DESCRIPTION =
  "AS9100D-certified RF cable assembly manufacturing with in-house VNA testing to 20 GHz. ITAR-registered, JCP-certified. Request a quote today.";

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
  "In-house VNA testing to 20 GHz",
  "AS9100D / ISO 9001:2015 quality system",
  "ITAR-registered & JCP-certified",
  "Build-to-print RF & microwave assemblies",
];

const manufacturingCapabilities = [
  {
    icon: Radio,
    title: "Coaxial & Microwave Assemblies",
    desc: "Custom RF cables for radar, EW, SATCOM, and communications systems.",
  },
  {
    icon: Factory,
    title: "Build-to-Print Manufacturing",
    desc: "Fabrication directly from your drawings, specifications, and BOMs.",
  },
  {
    icon: FileCheck,
    title: "Full Traceability",
    desc: "Complete material traceability and documentation package with every build.",
  },
  {
    icon: FlaskConical,
    title: "Prototype to Production",
    desc: "Low-volume prototypes through repeatable production runs.",
  },
];

const testingCapabilities = [
  "Vector Network Analyzer (VNA) testing to 20 GHz",
  "Return loss and insertion loss measurement",
  "VSWR (voltage standing wave ratio) testing",
  "Phase and electrical length measurements",
  "S-parameter characterization with full Touchstone (.sNp) files",
  "Acceptance testing to customer or industry specification",
  "First-article inspection and lot acceptance testing",
  "Calibrated equipment operated under an AS9100 QMS",
];

const whyPoints = [
  {
    icon: Award,
    title: "AS9100D / ISO 9001:2015 Certified",
    desc: "Audit-ready quality system built for aerospace and defense supply chains.",
  },
  {
    icon: ShieldCheck,
    title: "ITAR Registered",
    desc: "Cleared to support defense and controlled-technology programs.",
  },
  {
    icon: ShieldCheck,
    title: "DLA JCP Certified",
    desc: "Joint Certification Program qualified for DLA and DoD procurement.",
  },
  {
    icon: Activity,
    title: "Test What We Build",
    desc: "RF assemblies manufactured and electrically verified in-house — no third-party handoffs.",
  },
  {
    icon: Factory,
    title: "Upstate New York Based",
    desc: "Domestic manufacturing and testing with responsive turnaround for U.S. customers.",
  },
  {
    icon: Gauge,
    title: "Documented Performance Data",
    desc: "Traceable test records and Touchstone files delivered with every acceptance test.",
  },
];

const industries = [
  "Aerospace",
  "Defense",
  "Medical Devices",
  "Robotics",
  "Industrial Automation",
];

const expectations = [
  "Response within 24 hours",
  "Engineering review included",
  "NDA available upon request",
];

const faqs = [
  {
    q: "What frequency range does Castmen test RF cables to?",
    a: "Our in-house Vector Network Analyzer (VNA) supports RF cable testing up to 20 GHz, covering the majority of aerospace, defense, SATCOM, and industrial RF applications.",
  },
  {
    q: "Can Castmen test RF cables we manufacture ourselves?",
    a: "Yes. We offer standalone RF cable testing as an independent, calibrated verification service — including Touchstone file generation, VSWR, insertion loss, return loss, and phase measurements — for customers who build their own assemblies.",
  },
  {
    q: "What test data do you deliver with an RF cable assembly?",
    a: "Every acceptance test includes traceable records generated under our AS9100 QMS. On request we deliver full S-parameter Touchstone (.sNp) files for direct use in your engineering models.",
  },
  {
    q: "Do you support ITAR and export-controlled RF programs?",
    a: "Yes. Castmen is ITAR registered and JCP-certified (DD Form 2345 on file), so we are qualified to receive export-controlled unclassified military technical data for defense RF programs.",
  },
  {
    q: "Can you handle both prototypes and production runs?",
    a: "Yes. We build RF and coaxial cable assemblies from prototype quantities through repeatable production, with the same documentation package across every build.",
  },
];

const RfCableManufacturingTesting = () => {
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
    script.id = "faq-jsonld-rf-cable";
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
      document.getElementById("faq-jsonld-rf-cable")?.remove();
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
                AS9100D CERTIFIED • ITAR REGISTERED • JCP CERTIFIED
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                RF Cable Assembly Manufacturing & In-House VNA Testing
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Full-service RF and coaxial cable assembly manufacturing paired with in-house
                Vector Network Analyzer testing to 20 GHz — built, tested, and certified under
                one roof.
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
              Castmen Electronics now offers full-service RF cable assembly manufacturing paired
              with in-house Vector Network Analyzer (VNA) testing to 20 GHz — giving aerospace,
              defense, medical, and industrial automation customers a single source for
              build-to-print RF cables that are manufactured, tested, and certified under one
              roof.
            </p>
            <p className="text-lg text-muted-foreground">
              As an{" "}
              <Link to="/as9100-wire-harness-manufacturer" className="text-primary underline-offset-4 hover:underline">
                AS9100D / ISO 9001:2015 certified
              </Link>
              ,{" "}
              <Link to="/itar-cable-assembly-manufacturer" className="text-primary underline-offset-4 hover:underline">
                ITAR-registered
              </Link>
              , DLA Joint Certification Program (JCP) manufacturer based in upstate New York, we
              bring the same audit-ready quality discipline that defense and aerospace primes
              already trust for{" "}
              <Link to="/custom-wire-harness-manufacturer-usa" className="text-primary underline-offset-4 hover:underline">
                wire harness and cable assembly work
              </Link>{" "}
              — now extended to RF and microwave applications.
            </p>
          </div>
        </section>

        {/* MANUFACTURING */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Radio className="h-4 w-4" /> RF MANUFACTURING
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                RF Cable Assembly Manufacturing
              </h2>
              <p className="text-muted-foreground">
                We build custom RF and coaxial cable assemblies to print, from prototype quantities
                through production runs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {manufacturingCapabilities.map((c) => (
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

        {/* TESTING */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
              <Waves className="h-4 w-4" /> RF TESTING
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              RF Cable Testing Services
            </h2>
            <p className="text-muted-foreground">
              Every RF cable assembly we build is backed by in-house electrical test capability —
              and we also offer RF cable testing as a standalone service for customers who
              manufacture their own assemblies but need independent, calibrated verification.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {testingCapabilities.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{s}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
            Whether you need first-article inspection, lot acceptance testing, or a standalone
            Touchstone file for your engineering team, Castmen delivers accurate, documented RF
            performance data on a fast turnaround.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Award className="h-4 w-4" /> WHY CASTMEN
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Manufacturers Choose Castmen for RF Work
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyPoints.map((w) => (
                <Card key={w.title} className="border-border/50 bg-background/50">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{w.title}</CardTitle>
                    <CardDescription>{w.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="container mx-auto px-4 py-20">
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
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Need RF Cable Assemblies Built, Tested, or Both?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Request a quote for RF manufacturing or standalone VNA acceptance testing — our
                team will respond quickly with next steps for your specification, volume, and
                timeline.
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

        <RelatedResources currentPath="/rf-cable-manufacturing-testing" />
      </main>
      <Footer />
    </div>
  );
};

export default RfCableManufacturingTesting;
