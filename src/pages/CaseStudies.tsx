import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Plane,
  Bot,
  Clock,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  Target,
  Users,
  BadgeCheck,
  Factory,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are your typical lead times for cable assemblies and wire harnesses?",
    a: "Standard production lead times generally range from 2 to 6 weeks depending on complexity, component availability, and volume. Rapid prototypes can be delivered in as little as 5–10 business days, and expedited production is available for mission-critical programs. We provide a confirmed schedule with every quote.",
  },
  {
    q: "Do you support AS9100 aerospace and ITAR-regulated defense projects?",
    a: "Yes. Castmen Electronics operates under an AS9100D-aligned quality management system and is ITAR-registered for controlled defense work. We routinely build flight-critical aerospace harnesses and mil-spec cable assemblies with full traceability, controlled documentation, and U.S.-based manufacturing.",
  },
  {
    q: "What testing and quality processes do you perform on every assembly?",
    a: "Every assembly is built to IPC/WHMA-A-620 workmanship standards and undergoes 100% continuity, hi-pot, and visual inspection as required. We also offer functional testing, label verification, and sample-based pull testing. Full inspection records and certifications of conformance are provided with each shipment.",
  },
  {
    q: "Can you scale from prototype to full production?",
    a: "Absolutely. Many of our customers start with a prototype build and ramp into recurring production with us. We standardize processes, lock in approved component sources, and align capacity to your forecast so the transition is seamless and repeatable.",
  },
  {
    q: "What industries and applications do you typically support?",
    a: "We serve aerospace, defense, robotics and automation, medical, and industrial OEMs. Typical applications include avionics, UAV systems, ground support equipment, robotic actuators, mil-spec interconnects, and complex multi-branch wire harnesses.",
  },
  {
    q: "How do I request a quote and what information should I include?",
    a: "Send us your drawings, BOM, wire list, or even a sketch — along with target quantities and required delivery date. Our engineering team reviews every RFQ for manufacturability and typically responds within 24 hours.",
  },
];

const PAGE_TITLE =
  "Cable Assembly Case Studies | Aerospace & Robotics Wire Harness Projects | Castmen Electronics";
const PAGE_DESCRIPTION =
  "Real-world cable assembly and wire harness case studies from Castmen Electronics. AS9100-certified aerospace and high-volume robotics manufacturing success stories.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

type CaseStudy = {
  id: string;
  icon: typeof Plane;
  title: string;
  industry: string;
  application: string;
  projectType: string;
  challengeIntro: string;
  challenges: string[];
  challengeOutro: string;
  solutionIntro: string;
  solutionActions: string[];
  solutionOutro: string;
  results: { stat: string; label: string }[];
  resultsList: string[];
  takeaways: string[];
  ctaHeading: string;
  ctaSub: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "aerospace-rapid-turn-wire-harness",
    icon: Plane,
    title: "Rapid-Turn Aerospace Wire Harness for Flight-Critical System",
    industry: "Aerospace",
    application: "Flight-critical avionics system",
    projectType: "Prototype + production ramp",
    challengeIntro:
      "An aerospace customer required a complex, multi-branch wire harness for a flight-critical system with an aggressive development timeline.",
    challenges: [
      "Extremely tight deadline for prototype delivery",
      "Strict quality and documentation requirements (AS9100 environment)",
      "Complex routing and shielding requirements",
      "Zero tolerance for defects due to mission-critical application",
    ],
    challengeOutro:
      "The customer's internal timeline was at risk due to delays from a previous supplier.",
    solutionIntro:
      "Castmen Electronics worked directly with the customer's engineering team to rapidly transition the project into production.",
    solutionActions: [
      "Immediate engineering review for manufacturability (DFM)",
      "Prioritized scheduling under expedited production status",
      "Optimization of harness routing and shielding for reliability",
      "Strict adherence to IPC/WHMA-A-620 and AS9100 quality standards",
    ],
    solutionOutro:
      "Direct engineer-to-engineer communication allowed for fast resolution of design questions and revisions.",
    results: [
      { stat: "10 days", label: "Prototype delivery" },
      { stat: "0", label: "Defects in validation" },
      { stat: "100%", label: "On-time ramp" },
    ],
    resultsList: [
      "Prototype delivered in 10 days (ahead of required schedule)",
      "Zero defects during initial testing and validation",
      "Smooth transition from prototype to production",
      "Helped customer recover lost time in development cycle",
    ],
    takeaways: [
      "Rapid turnaround prevented program delays",
      "High-quality execution eliminated rework risk",
      "Direct collaboration accelerated decision-making",
    ],
    ctaHeading: "Need a fast, reliable partner for aerospace wire harnesses?",
    ctaSub: "We specialize in rapid-turn, mission-critical assemblies.",
  },
  {
    id: "robotics-high-volume-cable-assembly",
    icon: Bot,
    title: "High-Volume Cable Assembly for Robotics OEM",
    industry: "Robotics & Automation",
    application: "Industrial robotic systems",
    projectType: "Production scaling",
    challengeIntro:
      "A robotics OEM needed a reliable manufacturing partner to scale production of cable assemblies used in automated systems.",
    challenges: [
      "Inconsistent quality from previous supplier",
      "Increasing demand requiring scalable production",
      "Need for improved on-time delivery performance",
      "Requirement for consistent electrical performance across all units",
    ],
    challengeOutro:
      "Production delays were impacting the customer's ability to meet delivery commitments.",
    solutionIntro:
      "Castmen Electronics implemented a structured approach to stabilize and scale production.",
    solutionActions: [
      "Standardized assembly processes for repeatability",
      "Implemented 100% functional testing for every unit",
      "Improved component sourcing for consistency and availability",
      "Established clear production workflows for volume scaling",
    ],
    solutionOutro:
      "Ongoing communication ensured alignment with the customer's forecasts and demand fluctuations.",
    results: [
      { stat: ">98%", label: "On-time delivery" },
      { stat: "100%", label: "Functional tested" },
      { stat: "<0.5%", label: "RMA rate" },
    ],
    resultsList: [
      ">98% on-time delivery achieved",
      "Significant reduction in defects and rework",
      "Scaled production to meet growing demand",
      "Improved overall product reliability in the field",
    ],
    takeaways: [
      "Consistent quality enabled reliable system performance",
      "Scalable production supported business growth",
      "Strong communication improved supply chain stability",
    ],
    ctaHeading: "Looking for a dependable cable assembly partner for production?",
    ctaSub: "We deliver consistent quality at any scale.",
  },
];

const overviewStats = [
  { icon: Clock, stat: "10 days", label: "Fastest prototype turnaround" },
  { icon: TrendingUp, stat: ">98%", label: "On-time delivery rate" },
  { icon: ShieldCheck, stat: "<0.5%", label: "RMA rate" },
  { icon: BadgeCheck, stat: "100%", label: "Functional tested" },
];

const whyItMatters = [
  {
    icon: Target,
    title: "Mission-Critical Reliability",
    desc: "Every assembly we build is engineered for environments where failure is not an option.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    desc: "Expedited production schedules backed by AS9100D processes and 100% testing.",
  },
  {
    icon: Users,
    title: "Engineer-to-Engineer Support",
    desc: "Direct technical collaboration accelerates decision-making from quote to delivery.",
  },
  {
    icon: Factory,
    title: "Scalable Manufacturing",
    desc: "Seamless transition from prototype to high-volume production runs.",
  },
];

const CaseStudies = () => {
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
    script.id = "case-studies-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Article",
          headline: c.title,
          about: c.industry,
          articleSection: "Case Study",
          description: c.challengeIntro,
        },
      })),
    });
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "case-studies-faq-jsonld";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(faqScript);

    return () => {
      document.title = prevTitle;
      document.getElementById("case-studies-jsonld")?.remove();
      document.getElementById("case-studies-faq-jsonld")?.remove();
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
                <Award className="h-3.5 w-3.5" />
                PROVEN RESULTS • AEROSPACE • ROBOTICS • DEFENSE
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Cable Assembly Case Studies
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                See how Castmen Electronics helps engineers and OEMs deliver mission-critical wire
                harnesses on schedule, at scale, and without compromise.
              </p>
              <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/#contact">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#contact">Talk to an Engineer</Link>
                </Button>
              </div>

              <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {overviewStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border/50 bg-card/50 p-4 text-center"
                  >
                    <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                    <div className="text-2xl font-bold text-primary">{s.stat}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
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
              Real Projects. Real Results.
            </h2>
            <p className="text-lg text-muted-foreground">
              Our customers operate in environments where quality, speed, and reliability are
              non-negotiable. The case studies below highlight how we partner with engineering
              teams to solve complex wire harness and cable assembly challenges — from
              flight-critical aerospace prototypes to high-volume robotics production.
            </p>
          </div>
        </section>

        {/* CASE STUDIES */}
        {caseStudies.map((c, idx) => (
          <section
            key={c.id}
            id={c.id}
            className={
              idx % 2 === 0
                ? "border-y border-border/50 bg-card/30 py-20"
                : "py-20"
            }
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-10 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-3 text-xs font-medium tracking-widest text-primary">
                    CASE STUDY {idx + 1}
                  </div>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {c.title}
                  </h2>
                  <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 text-sm">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-foreground">
                      Industry: {c.industry}
                    </span>
                    <span className="rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-muted-foreground">
                      Application: {c.application}
                    </span>
                    <span className="rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-muted-foreground">
                      Project Type: {c.projectType}
                    </span>
                  </div>
                </div>

                {/* Results metrics */}
                <div className="mb-10 grid gap-4 sm:grid-cols-3">
                  {c.results.map((r) => (
                    <Card key={r.label} className="border-border/50 bg-background/60 text-center">
                      <CardContent className="pt-6">
                        <div className="mb-1 text-3xl font-bold text-primary">{r.stat}</div>
                        <div className="text-sm text-muted-foreground">{r.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Challenge / Solution / Result */}
                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="border-border/50 bg-background/60">
                    <CardHeader>
                      <div className="mb-2 text-xs font-medium tracking-widest text-primary">
                        THE CHALLENGE
                      </div>
                      <CardTitle className="text-lg">What was at stake</CardTitle>
                      <CardDescription>{c.challengeIntro}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {c.challenges.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">{c.challengeOutro}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-background/60">
                    <CardHeader>
                      <div className="mb-2 text-xs font-medium tracking-widest text-primary">
                        THE SOLUTION
                      </div>
                      <CardTitle className="text-lg">How we delivered</CardTitle>
                      <CardDescription>{c.solutionIntro}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {c.solutionActions.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">{c.solutionOutro}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/40 bg-primary/5">
                    <CardHeader>
                      <div className="mb-2 text-xs font-medium tracking-widest text-primary">
                        THE RESULT
                      </div>
                      <CardTitle className="text-lg">Outcome delivered</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {c.resultsList.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Takeaways */}
                <div className="mt-10 rounded-lg border border-border/50 bg-background/40 p-6">
                  <div className="mb-3 text-xs font-medium tracking-widest text-primary">
                    KEY TAKEAWAYS
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {c.takeaways.map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Per-case CTA */}
                <div className="mt-10 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{c.ctaHeading}</h3>
                  <p className="mb-6 text-muted-foreground">{c.ctaSub}</p>
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
            </div>
          </section>
        ))}

        {/* WHY CUSTOMERS CHOOSE CASTMEN */}
        <section className="border-y border-border/50 bg-card/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Customers Choose Castmen
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                AS9100D-certified, ITAR-compliant, and engineered for performance — every project
                we take on is built to the same uncompromising standard.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyItMatters.map((w) => (
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

        {/* FINAL CTA */}
        <section className="border-t border-border/50 bg-gradient-to-b from-card/40 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Let's Build Your Next Success Story
              </h2>
              <p className="mb-8 text-muted-foreground">
                Whether you need a rapid aerospace prototype or scalable production for a robotics
                platform, our team is ready to deliver.
              </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
