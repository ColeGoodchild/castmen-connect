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
  FileLock2,
  Flag,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PAGE_TITLE = "ITAR Cable Assembly Manufacturer | ITAR Registered Wire Harness | Castmen Electronics";
const PAGE_DESCRIPTION =
  "ITAR-registered cable assembly manufacturer in the USA. Secure, compliant wire harness manufacturing for defense and controlled applications. Request a quote.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const itarPoints = [
  "Secure handling of controlled technical data",
  "U.S.-based manufacturing and personnel",
  "Compliance with defense contracting requirements",
  "Reduced risk of regulatory violations",
];

const capabilities = [
  {
    icon: Cable,
    title: "Custom Wire Harness Assembly",
    desc: "Build-to-print or engineered solutions for defense systems.",
  },
  {
    icon: Radio,
    title: "Cable Assemblies",
    desc: "RF coaxial, high-voltage, multi-conductor, and complex harnesses.",
  },
  {
    icon: ShieldCheck,
    title: "MIL-SPEC Applications",
    desc: "Assemblies built to meet military specifications.",
  },
  {
    icon: Rocket,
    title: "Prototype to Production",
    desc: "Secure, scalable manufacturing from early builds to full production.",
  },
  {
    icon: Layers,
    title: "Shielding & Signal Integrity",
    desc: "Solutions for EMI/RFI-sensitive systems.",
  },
];

const securityPoints = [
  "ITAR registration (DDTC)",
  "Controlled access to technical data",
  "U.S.-based production and workforce",
  "Secure documentation and revision control",
  "Supply chain accountability",
];

const engineeringPoints = [
  "Design-for-manufacturing support",
  "Complex harness expertise",
  "Component sourcing and compliance",
  "Rapid response to engineering changes",
];

const qualityStandards = [
  "AS9100D / ISO 9001:2015 certified",
  "IPC/WHMA-A-620 workmanship standards",
  "IPC J-STD-001 soldering standards",
  "100% functional testing",
];

const industries = [
  "Defense Contractors",
  "Aerospace Systems",
  "Government Programs",
  "Space & Satellite Systems",
  "Advanced Robotics",
];

const whyChoose = [
  {
    icon: Lock,
    title: "Secure & Compliant",
    desc: "Built for defense-related work with strict adherence to ITAR requirements.",
  },
  {
    icon: Flag,
    title: "U.S.-Based Production",
    desc: "Eliminates offshore risk and simplifies compliance.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Critical timelines met with expedited manufacturing.",
  },
  {
    icon: UserCheck,
    title: "Engineer Access",
    desc: "Direct communication with technical experts.",
  },
];

const expectations = [
  "Fast response (within 24 hours)",
  "NDA available",
  "Engineering review included",
];

const faqs = [
  {
    q: "Are you ITAR registered?",
    a: "Yes, we are registered with the DDTC and operate under ITAR requirements.",
  },
  {
    q: "Do you manufacture entirely in the U.S.?",
    a: "Yes, all production is U.S.-based.",
  },
  {
    q: "Can you handle controlled technical data?",
    a: "Yes, we follow strict protocols for handling sensitive information.",
  },
];

const ItarCableAssembly = () => {
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
    script.id = "faq-jsonld-itar";
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
      document.getElementById("faq-jsonld-itar")?.remove();
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
                ITAR REGISTERED • AS9100D CERTIFIED • MADE IN USA
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                ITAR-Compliant Cable Assembly Manufacturer You Can Trust
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Secure, U.S.-based wire harness and cable assembly manufacturing for defense,
                aerospace, and controlled applications.
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
                  "ITAR-compliant processes and handling",
                  "Secure, domestic manufacturing",
                  "Rapid turnaround on critical programs",
                  "<0.5% RMA rate",
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
              When working with defense-related systems or controlled technical data, choosing an
              ITAR-compliant cable assembly manufacturer is essential.
            </p>
            <p className="text-lg text-muted-foreground">
              Castmen Electronics is ITAR registered and operates with strict controls to ensure
              compliance with U.S. regulations governing defense articles and technical data. We
              support aerospace, defense, and government contractors who require secure, reliable
              manufacturing partners.
            </p>
          </div>
        </section>

        {/* WHAT IS ITAR */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Understanding ITAR Compliance
              </h2>
              <p className="mb-10 text-muted-foreground">
                The International Traffic in Arms Regulations (ITAR) control the manufacture,
                export, and handling of defense-related articles and technical data. Working with
                an ITAR-registered manufacturer ensures:
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {itarPoints.map((p) => (
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
              ITAR-Compliant Cable Assembly Capabilities
            </h2>
            <p className="text-muted-foreground">
              We manufacture high-reliability assemblies for controlled applications.
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

        {/* SECURITY & COMPLIANCE */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                  <FileLock2 className="h-4 w-4" /> SECURITY & COMPLIANCE
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Secure Manufacturing & Data Handling
                </h2>
                <p className="text-muted-foreground">
                  We implement strict processes to protect sensitive information and ensure
                  compliance.
                </p>
              </div>
              <ul className="space-y-3">
                {securityPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
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
                Direct Technical Collaboration
              </h2>
              <p className="text-muted-foreground">
                Our engineers work directly with your team to ensure your assemblies meet
                performance, compliance, and manufacturability requirements.
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

        {/* QUALITY */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary">
                <Award className="h-4 w-4" /> QUALITY
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Certified Quality for Defense Applications
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ul className="space-y-3">
                {qualityStandards.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { stat: "<0.5%", label: "RMA Rate" },
                  { stat: "98%", label: "On-Time Delivery" },
                ].map((m) => (
                  <Card key={m.label} className="border-border/50 bg-background/50 text-center">
                    <CardContent className="pt-6">
                      <div className="mb-1 text-3xl font-bold text-primary">{m.stat}</div>
                      <div className="text-sm text-muted-foreground">{m.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Industries We Support
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

        {/* WHY CHOOSE CASTMEN */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A Trusted ITAR Manufacturing Partner
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((w) => (
                <Card key={w.title} className="border-border/50 bg-background/50">
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
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Start Your ITAR-Compliant Project
              </h2>
              <p className="mb-8 text-muted-foreground">
                Work with a secure, reliable partner for your next cable assembly project.
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

export default ItarCableAssembly;
