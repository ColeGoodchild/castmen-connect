import { CheckCircle2, Wrench } from "lucide-react";

const items = [
  "Build-to-print & design assistance",
  "Support for complex, multi-branch harnesses",
  "Component sourcing (UL/CSA, RoHS compliant)",
  "IPC/WHMA-A-620 & J-STD-001 standards",
  "Electrical, mechanical, and environmental testing",
];

const EngineeringCapabilities = () => {
  return (
    <section id="engineering" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Wrench className="h-4 w-4" />
            Engineering Capabilities
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for Engineers,
            <span className="block text-gradient">by Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide the technical depth and collaboration needed for complex systems.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm lg:p-12">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-border/50 pt-6 text-center">
            <p className="text-base font-medium text-primary">
              Direct access to engineers — no sales bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringCapabilities;
