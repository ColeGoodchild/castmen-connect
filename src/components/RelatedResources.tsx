import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  to: string;
  title: string;
  desc: string;
};

const ALL_LINKS: RelatedLink[] = [
  {
    to: "/custom-wire-harness-manufacturer-usa",
    title: "Custom Wire Harness Manufacturer USA",
    desc: "Build-to-print and fully custom wire harnesses manufactured in the USA.",
  },
  {
    to: "/mil-spec-cable-assemblies",
    title: "MIL-SPEC Cable Assemblies",
    desc: "Military-grade cable assemblies engineered for mission-critical performance.",
  },
  {
    to: "/itar-cable-assembly-manufacturer",
    title: "ITAR Cable Assembly Manufacturer",
    desc: "ITAR-registered manufacturing for controlled defense applications.",
  },
  {
    to: "/as9100-wire-harness-manufacturer",
    title: "AS9100 Wire Harness Manufacturer",
    desc: "AS9100D-certified wire harness manufacturing for aerospace and defense.",
  },
  {
    to: "/rapid-prototype-cable-assembly",
    title: "Rapid Prototype Cable Assembly",
    desc: "Fast-turn prototypes with a seamless path to full production.",
  },
  {
    to: "/case-studies",
    title: "Case Studies",
    desc: "Real-world aerospace and robotics projects we've delivered.",
  },
];

interface RelatedResourcesProps {
  /** Path of the current page so it is excluded from the list */
  currentPath: string;
  heading?: string;
  subheading?: string;
}

const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

const RelatedResources = ({
  currentPath,
  heading = "Related Capabilities & Resources",
  subheading = "Explore other Castmen Electronics services and customer success stories.",
}: RelatedResourcesProps) => {
  const links = ALL_LINKS.filter((l) => l.to !== currentPath);

  return (
    <section className="border-t border-border/50 bg-card/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={scrollTop}
              className="group rounded-xl border border-border/50 bg-background/50 p-5 transition-all hover:border-primary/50 hover:bg-background/80"
            >
              <h3 className="mb-2 flex items-center justify-between text-base font-semibold text-foreground group-hover:text-primary">
                <span>{l.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;
