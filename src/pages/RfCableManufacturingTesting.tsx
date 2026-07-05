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
  Beaker,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RelatedResources from "@/components/RelatedResources";

const PAGE_TITLE = "AS9100D RF Cable Assembly Manufacturer & VNA Testing | Castmen";
const PAGE_DESCRIPTION =
  "AS9100D-certified RF cable assembly manufacturing plus standalone VNA testing to 20 GHz for customer-supplied assemblies. ITAR-registered, JCP-certified.";

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
  "100% S-Parameter verification to 20 GHz",
  "Standalone VNA testing for customer-supplied assemblies",
  "AS9100D / ISO 9001:2015 quality system",
  "ITAR Registered & JCP Certified",
];

const whyChoose = [
  "100% S-Parameter Verification",
  "Vector Network Analyzer Testing to 20 GHz",
  "Return Loss Testing",
  "VSWR Testing",
  "Insertion Loss Testing",
  "Phase Matching Verification",
  "Electrical Length Measurement",
  "Customer-Specified Pass/Fail Limits",
  "Individual Test Reports Included",
  "Touchstone (.sNp) Files Available",
  "Serialized Cable Assemblies",
  "First Article Inspection (FAI)",
  "Full Material & Process Traceability",
  "Certificate of Conformance",
  "AS9100D / ISO 9001:2015 Quality System",
  "ITAR Registered & JCP Certified",
];

const manufacturingCapabilities = [
  {
    icon: Factory,
    title: "Build-to-Print RF Assemblies",
    desc: "Manufactured directly from customer drawings, BOMs, and specifications using qualified processes.",
  },
  {
    icon: FlaskConical,
    title: "Prototype Through Production",
    desc: "From a single prototype to full-rate production, every build follows the same controlled manufacturing process.",
  },
  {
    icon: BadgeCheck,
    title: "Serialized Assemblies",
    desc: "Individual serialization supports lifecycle management, maintenance records, and complete production traceability.",
  },
  {
    icon: FileCheck,
    title: "Complete Traceability",
    desc: "Every assembly is traceable through incoming materials, manufacturing operations, inspection, testing, and shipment.",
  },
  {
    icon: Award,
    title: "Aerospace & Defense Quality",
    desc: "Manufactured under our AS9100D-certified quality system for the most demanding high-reliability applications.",
  },
  {
    icon: Radio,
    title: "Custom RF, Coax & Microwave",
    desc: "Coaxial and microwave assemblies built to your drawings, specifications, and electrical performance requirements.",
  },
];

const testCapabilities = [
  "Full S-Parameter Measurement",
  "Return Loss",
  "VSWR",
  "Insertion Loss",
  "Phase Matching",
  "Electrical Length",
  "Frequency Response",
  "Port-to-Port Verification",
];

const acceptanceCriteria = [
  "Maximum insertion loss",
  "Minimum return loss",
  "VSWR limits",
  "Phase matching tolerance",
  "Electrical length tolerance",
  "Frequency-specific performance",
  "Custom engineering requirements",
];

const standaloneUseCases = [
  "Independent verification",
  "First Article Inspection",
  "Incoming inspection",
  "Supplier qualification",
  "Production validation",
  "Engineering evaluation",
  "Failure analysis",
  "Lot acceptance testing",
];

const standaloneDeliverables = [
  "S-Parameter Measurement",
  "Return Loss Testing",
  "VSWR Testing",
  "Insertion Loss Testing",
  "Phase Matching",
  "Electrical Length Measurement",
  "Customer Pass/Fail Evaluation",
  "Test Reports & Touchstone (.sNp) Files",
];

const documentation = [
  "Individual Test Reports",
  "Serialized Test Records",
  "Touchstone (.sNp) Files",
  "Certificate of Conformance",
  "Material Certifications",
  "Inspection Reports",
  "First Article Inspection Documentation",
  "Traceability Records",
];

const faiServices = [
  "First Article Inspection",
  "Prototype Qualification",
  "Engineering Validation",
  "Production Validation",
  "Lot Acceptance Testing",
];

const itarPoints = [
  "Controlled manufacturing processes",
  "Audit-ready documentation",
  "Secure handling of technical data",
  "Export-controlled programs",
  "Defense supply chain requirements",
  "Complete production traceability",
];

const industries = [
  "Aerospace",
  "Defense",
  "Electronic Warfare",
  "Radar Systems",
  "SATCOM",
  "Communications Infrastructure",
  "Medical Equipment",
  "Robotics",
  "Industrial Automation",
  "Test & Measurement Systems",
];

const expectations = [
  "Engineering review",
  "Customer specification review",
  "Fast response",
  "Test planning assistance",
  "NDA available upon request",
];

const faqs = [
  {
    q: "Do you manufacture RF cable assemblies?",
    a: "Yes. We manufacture custom RF cable assemblies, coaxial cable assemblies, and microwave cable assemblies from prototype through production under our AS9100-certified quality system.",
  },
  {
    q: "Is every cable electrically tested?",
    a: "Yes. Every production assembly can receive 100% S-Parameter verification using calibrated Vector Network Analyzer equipment.",
  },
  {
    q: "Can you test RF cable assemblies we built ourselves?",
    a: "Absolutely. Castmen offers standalone RF cable testing services for customer-supplied assemblies, including S-parameter characterization, return loss, VSWR, insertion loss, phase matching, electrical length measurement, and customer-specific acceptance testing.",
  },
  {
    q: "What documentation do you provide?",
    a: "We can provide test reports, serialized test records, Touchstone (.sNp) files, certificates of conformance, first article inspection documentation, and complete traceability records.",
  },
  {
    q: "What industries do you serve?",
    a: "We support aerospace, defense, SATCOM, communications, medical devices, robotics, industrial automation, electronic warfare, radar, and test & measurement manufacturers.",
  },
  {
    q: "What frequency range can you test?",
    a: "Our in-house Vector Network Analyzer supports RF testing through 20 GHz, covering the majority of aerospace, defense, communications, and industrial RF applications.",
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
              <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary">
                <Zap className="h-3.5 w-3.5" />
                ITAR REGISTERED • JCP CERTIFIED • RF MANUFACTURING • STANDALONE VNA TESTING TO 20 GHz
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                AS9100D Certified RF Cable Assembly Manufacturer &amp;{" "}
                <span className="text-gradient">RF Testing Services</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                AS9100-certified RF cable assemblies manufactured, 100% electrically verified,
                and fully documented under one quality management system — plus standalone VNA
                testing services for customer-supplied assemblies.
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
              RF Cable Assembly Manufacturing &amp; Standalone RF Testing
            </h2>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics is an AS9100D-certified RF cable assembly manufacturer
              specializing in high-reliability RF and microwave cable assemblies for aerospace,
              defense, SATCOM, medical, robotics, communications, and industrial applications.
            </p>
            <p className="text-lg text-muted-foreground">
              In addition to manufacturing custom RF cable assemblies, we also provide standalone
              RF cable testing services for customer-supplied assemblies using calibrated Vector
              Network Analyzer (VNA) equipment to 20 GHz.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you need production cable assemblies, prototype builds, first article
              qualification, or independent RF verification, our engineering and quality teams
              deliver complete manufacturing, testing, documentation, and traceability from a
              single U.S. facility.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE CASTMEN */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Award className="h-4 w-4" /> WHY CASTMEN
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Choose Castmen Electronics?
              </h2>
              <p className="text-muted-foreground">
                Every RF cable assembly is backed by aerospace-quality manufacturing and
                comprehensive electrical verification.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => (
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
              Castmen manufactures custom RF, coaxial, and microwave cable assemblies built to
              customer drawings and specifications. Our capabilities support prototype development
              through full-rate production while maintaining consistent workmanship, documentation,
              and electrical performance.
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
                Unlike manufacturers that perform sample testing, Castmen performs 100% electrical
                verification on production RF cable assemblies using calibrated Vector Network
                Analyzer equipment. Every assembly is evaluated before shipment against
                customer-defined electrical performance requirements.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                Standard RF Test Parameters
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
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Testing available from low-frequency applications through 20 GHz.
              </p>
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
                Every RF cable program has different electrical requirements. Our engineering team
                develops customer-specific test procedures using your drawings, specifications, or
                qualification requirements — and every assembly is verified against those limits
                before shipment.
              </p>
            </div>
            <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
              Pass/fail criteria may include:
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

        {/* STANDALONE RF TESTING SERVICES */}
        <section className="relative overflow-hidden border-y border-primary/20 bg-gradient-to-b from-primary/5 via-card/40 to-primary/5 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_65%)]" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Beaker className="h-4 w-4" /> STANDALONE TESTING SERVICES
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Standalone RF Cable Testing Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Already manufacture your own RF cable assemblies? Castmen provides independent RF
                cable testing for customer-supplied assemblies using calibrated VNA equipment —
                without requiring you to invest in expensive RF test equipment.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Ideal For</CardTitle>
                  <CardDescription>
                    Common use cases for our independent testing services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {standaloneUseCases.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Standalone Testing Includes</CardTitle>
                  <CardDescription>
                    Comprehensive measurements delivered with full documentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {standaloneDeliverables.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                        <Activity className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
              Whether we manufacture the cable assembly or simply perform electrical verification,
              customers receive the same documented testing performed under our AS9100 quality
              system.
            </p>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="border-b border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <FileText className="h-4 w-4" /> DOCUMENTATION
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Documentation Included
              </h2>
              <p className="text-muted-foreground">
                Every project is supported by comprehensive quality documentation — simplifying
                customer receiving inspection while supporting aerospace, defense, and regulated
                manufacturing requirements.
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
                <ClipboardCheck className="h-4 w-4" /> FAI &amp; VALIDATION
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                First Article Inspection (FAI)
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                We support engineering qualification and production launch through comprehensive
                First Article Inspection services — verifying both mechanical workmanship and
                electrical performance prior to production release.
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
                AS9100 Manufacturing with ITAR Compliance
              </h2>
              <p className="mb-8 text-muted-foreground">
                Castmen Electronics operates under an AS9100D / ISO 9001:2015 certified Quality
                Management System and supports defense manufacturing through ITAR registration and
                Joint Certification Program (JCP) certification.
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
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
              <Factory className="h-4 w-4" /> APPLICATIONS
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              High-Reliability Applications
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our RF cable assemblies serve demanding applications where consistent electrical
              performance and documented quality are essential.
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
        </section>

        {/* WHY CASTMEN NARRATIVE */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Manufacturers Choose Castmen
              </h2>
              <p className="text-lg text-muted-foreground">
                Many companies can manufacture RF cable assemblies. Many testing laboratories can
                measure RF performance.
              </p>
              <p className="text-lg text-foreground">
                Castmen combines both capabilities under one AS9100-certified quality system.
              </p>
              <p className="text-lg text-muted-foreground">
                Manufacturing, inspection, electrical verification, documentation, and shipment
                all occur within a single controlled process — reducing lead times while ensuring
                every cable assembly meets customer specifications before delivery.
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
              <p className="mb-2 text-muted-foreground">
                Need an RF cable assembly manufacturer? Looking for independent RF cable testing?
              </p>
              <p className="mb-8 text-muted-foreground">
                Whether you require prototype manufacturing, production cable assemblies, first
                article qualification, or standalone Vector Network Analyzer testing, our
                engineering team is ready to help.
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
