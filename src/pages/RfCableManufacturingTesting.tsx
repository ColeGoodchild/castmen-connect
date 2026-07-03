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
  ClipboardCheck,
  BadgeCheck,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RelatedResources from "@/components/RelatedResources";

const PAGE_TITLE = "RF Cable Manufacturing & VNA Testing | Castmen Electronics";
const PAGE_DESCRIPTION =
  "AS9100D-certified RF cable assembly manufacturing with 100% in-house VNA verification to 20 GHz. ITAR-registered, JCP-certified. Request a quote today.";

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
  "100% VNA verification to 20 GHz",
  "AS9100D / ISO 9001:2015 quality system",
  "ITAR-registered & JCP-certified",
  "Build-to-print RF & microwave assemblies",
];

const whyEngineers = [
  "100% S-Parameter verification on every assembly",
  "Vector Network Analyzer testing to 20 GHz",
  "Customer-defined pass/fail limits",
  "Return loss, VSWR & insertion loss testing",
  "Phase matching & electrical length verification",
  "Serialized cable assemblies",
  "Complete test reports included",
  "First Article Inspection (FAI) available",
  "Full material & process traceability",
  "AS9100D / ISO 9001 certified manufacturing",
  "ITAR registered & JCP certified",
];

const manufacturingCapabilities = [
  {
    icon: Factory,
    title: "Build-to-Print Manufacturing",
    desc: "Assemblies manufactured exactly to customer documentation using qualified processes and controlled workmanship.",
  },
  {
    icon: FlaskConical,
    title: "Prototype Through Production",
    desc: "From engineering prototypes and qualification units to repeatable production volumes.",
  },
  {
    icon: BadgeCheck,
    title: "Serialized Assemblies",
    desc: "Each cable assembly can be individually serialized for complete lifecycle tracking and configuration management.",
  },
  {
    icon: FileCheck,
    title: "Full Traceability",
    desc: "Material lot traceability, manufacturing records, inspection documentation, and test results maintained throughout production.",
  },
  {
    icon: Award,
    title: "Aerospace & Defense Quality",
    desc: "Manufactured under our AS9100-certified quality system for demanding aerospace, defense, medical, communications, and industrial applications.",
  },
  {
    icon: Radio,
    title: "Custom RF & Microwave",
    desc: "Coaxial and microwave assemblies built to your drawings, specifications, and performance requirements.",
  },
];

const testCapabilities = [
  "Full S-Parameter measurement",
  "Return loss",
  "VSWR",
  "Insertion loss",
  "Phase matching",
  "Electrical length",
  "Port-to-port verification",
  "Frequency sweeps to 20 GHz",
];

const acceptanceCriteria = [
  "Maximum insertion loss",
  "Minimum return loss",
  "VSWR limits",
  "Phase matching tolerances",
  "Frequency-specific requirements",
  "Custom acceptance limits",
];

const documentation = [
  "Individual test reports",
  "S-Parameter data",
  "Touchstone (.sNp) files",
  "Serialized test records",
  "First Article Inspection (FAI)",
  "Certificate of Conformance",
  "Material traceability",
  "Inspection records",
];

const faiServices = [
  "First Article Inspection",
  "Prototype evaluation",
  "Qualification testing",
  "Production validation",
  "Lot acceptance testing",
];

const itarPoints = [
  "AS9100D / ISO 9001:2015 Certified",
  "ITAR Registered",
  "JCP Certified (DD Form 2345)",
  "Experienced with defense documentation requirements",
];

const industries = [
  "Aerospace",
  "Defense",
  "Electronic Warfare",
  "SATCOM",
  "Radar Systems",
  "Medical Devices",
  "Robotics",
  "Industrial Automation",
  "Test & Measurement Equipment",
  "Communications Infrastructure",
];

const expectations = [
  "Engineering review",
  "Fast quotations",
  "Customer-specific test planning",
  "Response within 24 hours",
  "NDA available upon request",
];

const faqs = [
  {
    q: "Is every RF cable assembly electrically tested?",
    a: "Yes. We perform 100% Vector Network Analyzer verification on every production RF cable assembly using customer-defined acceptance criteria whenever required.",
  },
  {
    q: "What measurements do you perform?",
    a: "Our standard RF verification capabilities include S-Parameters, Return Loss, VSWR, Insertion Loss, Phase Matching, and Electrical Length. Testing is available to 20 GHz.",
  },
  {
    q: "Do you provide test reports?",
    a: "Yes. Individual test reports are available with every assembly. We can also provide Touchstone (.sNp) files, serialized test records, certificates of conformance, and additional documentation as required.",
  },
  {
    q: "Can you test to our own specifications?",
    a: "Absolutely. We establish pass/fail criteria directly from your drawings, specifications, or engineering requirements, including custom frequency ranges and acceptance limits.",
  },
  {
    q: "Are assemblies serialized?",
    a: "Yes. Serialized cable assemblies are available to support full traceability, maintenance programs, and defense or aerospace documentation requirements.",
  },
  {
    q: "Do you support ITAR-controlled programs?",
    a: "Yes. Castmen is ITAR Registered and JCP Certified, allowing us to support export-controlled defense manufacturing programs while maintaining secure handling of technical data.",
  },
  {
    q: "Can you support prototypes and production?",
    a: "Yes. We manufacture everything from engineering prototypes and first articles to full-rate production, using the same quality system, documentation, and electrical verification process throughout.",
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
                RF Cable Assembly Manufacturing with 100% In-House VNA Verification
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Precision RF and microwave cable assemblies manufactured, electrically verified,
                and fully documented under one AS9100-certified quality system.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              High-Reliability RF Cable Assemblies for Aerospace, Defense & Industrial Applications
            </h2>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics manufactures custom RF and coaxial cable assemblies with
              comprehensive in-house electrical verification using a calibrated Vector Network
              Analyzer (VNA) to 20 GHz.
            </p>
            <p className="text-lg text-muted-foreground">
              Every production assembly is manufactured, inspected, and tested under our{" "}
              <Link to="/as9100-wire-harness-manufacturer" className="text-primary underline-offset-4 hover:underline">
                AS9100D / ISO 9001:2015 Quality Management System
              </Link>
              , providing customers with complete confidence that every cable shipped meets its
              specified electrical performance.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you require prototypes, first articles, or production quantities, we provide
              build-to-print manufacturing with complete documentation, serialized traceability,
              and customer-specific acceptance testing.
            </p>
          </div>
        </section>

        {/* WHY ENGINEERS CHOOSE */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Award className="h-4 w-4" /> WHY CASTMEN
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Engineers Choose Castmen
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
              {whyEngineers.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANUFACTURING */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
              <Radio className="h-4 w-4" /> RF MANUFACTURING
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              RF Cable Assembly Manufacturing
            </h2>
            <p className="text-muted-foreground">
              We manufacture custom RF and microwave cable assemblies built to your drawings,
              specifications, and performance requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {manufacturingCapabilities.map((c) => (
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

        {/* 100% RF VERIFICATION */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Waves className="h-4 w-4" /> 100% ELECTRICAL VERIFICATION
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                100% RF Electrical Verification
              </h2>
              <p className="text-muted-foreground">
                Unlike manufacturers that perform only sample testing, Castmen provides 100%
                electrical verification of every production RF cable assembly using calibrated
                Vector Network Analyzer equipment. Every assembly is tested against your electrical
                requirements before shipment, ensuring consistent performance and eliminating
                uncertainty during system integration.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                Standard Test Capabilities
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {testCapabilities.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <Activity className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER-SPECIFIC ACCEPTANCE */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <ClipboardCheck className="h-4 w-4" /> ACCEPTANCE TESTING
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Customer-Specific Acceptance Testing
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                Every program is unique. We configure test procedures using your drawings,
                specifications, or engineering requirements. Every assembly is evaluated against
                your required limits before release.
              </p>
            </div>
            <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
              Customer-defined pass/fail criteria may include:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {acceptanceCriteria.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
                >
                  <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <FileText className="h-4 w-4" /> DOCUMENTATION
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Complete Documentation Included
              </h2>
              <p className="text-muted-foreground">
                Every shipment can include comprehensive documentation supporting quality and
                compliance requirements. Engineering teams receive the electrical performance data
                they need, while quality departments receive the documentation required for
                regulated manufacturing environments.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {documentation.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                >
                  <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAI */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <ClipboardCheck className="h-4 w-4" /> FAI & VALIDATION
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                First Article Inspection & Production Validation
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                We support qualification programs through comprehensive First Article Inspection
                and validation testing. Our engineering and quality teams verify both physical
                construction and electrical performance prior to production release, helping reduce
                qualification risk and improve production consistency.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {faiServices.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/40 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITAR */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <ShieldCheck className="h-4 w-4" /> COMPLIANCE
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                ITAR-Compliant Manufacturing
              </h2>
              <p className="mb-8 text-muted-foreground">
                Castmen Electronics supports defense and export-controlled manufacturing programs
                through secure handling procedures and controlled documentation. Sensitive
                technical data and controlled manufacturing documentation are handled under
                established quality procedures.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {itarPoints.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4 text-left"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{s}</span>
                  </div>
                ))}
              </div>
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

        {/* WHY CASTMEN NARRATIVE */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Castmen
              </h2>
              <p className="text-lg text-muted-foreground">
                Many suppliers can manufacture RF cable assemblies.
              </p>
              <p className="text-lg text-foreground">
                Few can manufacture, inspect, electrically verify, document, and certify every
                assembly under one AS9100-certified quality system.
              </p>
              <p className="text-lg text-muted-foreground">
                At Castmen, manufacturing and verification happen under the same roof — eliminating
                third-party testing delays while providing complete accountability from incoming
                material through final shipment.
              </p>
              <p className="text-lg text-muted-foreground">
                The result is faster lead times, consistent electrical performance, complete
                traceability, and documented confidence that every cable delivered meets your
                requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Request a Quote
              </h2>
              <p className="mb-8 text-muted-foreground">
                Whether you need prototype RF cable assemblies, production manufacturing, or
                standalone electrical verification, our engineering team is ready to review your
                requirements.
              </p>
              <div className="mb-8 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
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
