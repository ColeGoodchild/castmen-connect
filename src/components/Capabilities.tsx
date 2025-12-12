import { 
  Cable, 
  Cpu, 
  Layers, 
  Shield, 
  Zap, 
  Radio, 
  Settings, 
  CheckCircle2 
} from "lucide-react";

const capabilities = [
  {
    icon: Cable,
    title: "Custom Wire Harness Assembly",
    description: "Build-to-print or design assistance, from prototypes to high-volume production runs.",
  },
  {
    icon: Layers,
    title: "Cable Assemblies & Kits",
    description: "Complete cable kits, fiber optics, RF coaxial, high voltage, and ribbon cables.",
  },
  {
    icon: Shield,
    title: "MIL-SPEC & Aerospace-Grade",
    description: "Military specification and aerospace-grade cables meeting the strictest requirements.",
  },
  {
    icon: Zap,
    title: "Prototype & Quick Turnaround",
    description: "Rapid prototype builds with expedited status on new orders for faster time-to-market.",
  },
  {
    icon: Radio,
    title: "EMI/RFI Protection",
    description: "Shielded and multi-branch harnesses with signal integrity solutions.",
  },
  {
    icon: Cpu,
    title: "Panel Wiring",
    description: "Complete panel wiring solutions with comprehensive labeling and heat shrinking.",
  },
  {
    icon: Settings,
    title: "Quality Testing",
    description: "100% functional testing including electrical, mechanical, and environmental tests.",
  },
  {
    icon: CheckCircle2,
    title: "UL/CSA Components",
    description: "Sourcing of certified components with RoHS-compliant processes.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Settings className="h-4 w-4" />
            Core Competencies
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive Cable Assembly
            <span className="block text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From design assistance to high-volume production, we deliver precision-engineered 
            wire harnesses that meet the most demanding specifications.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="relative mb-4 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <capability.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="relative mb-2 text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="relative text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                IPC/WHMA-A-620 Workmanship Standards
              </h3>
              <p className="text-muted-foreground">
                Our 100% IPC-certified team ensures every assembly meets the industry's 
                highest workmanship standards. From prototype to production, we maintain 
                consistent quality that defense contractors and OEMs rely on.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">IPC Certified Team</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="mt-1 text-sm text-muted-foreground">Defect Goal</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <div className="text-2xl font-bold text-primary">Build-to-Print</div>
                <div className="mt-1 text-sm text-muted-foreground">Capability</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4 text-center">
                <div className="text-2xl font-bold text-primary">Low-High</div>
                <div className="mt-1 text-sm text-muted-foreground">Volume Runs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
