import { 
  Plane, 
  Shield, 
  Bot, 
  Server, 
  Sun, 
  Factory, 
  Heart, 
  Rocket 
} from "lucide-react";

const industries = [
  {
    icon: Plane,
    name: "Aerospace",
    description: "Mission-critical harnesses for aircraft and aviation systems.",
  },
  {
    icon: Shield,
    name: "Defense",
    description: "MIL-SPEC solutions for military applications and defense contractors.",
  },
  {
    icon: Bot,
    name: "Robotics",
    description: "Precision cables for automation and robotic systems.",
  },
  {
    icon: Server,
    name: "Data Center",
    description: "High-performance cabling for critical infrastructure.",
  },
  {
    icon: Sun,
    name: "Renewable Energy",
    description: "Durable solutions for solar and wind applications.",
  },
  {
    icon: Factory,
    name: "Industrial",
    description: "Reliable harnesses for machinery and automation.",
  },
  {
    icon: Heart,
    name: "Medical Devices",
    description: "Precision assemblies for life-saving equipment.",
  },
  {
    icon: Rocket,
    name: "Space",
    description: "Flight-qualified cables for space exploration.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Accent glow */}
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Factory className="h-4 w-4" />
            Industries Served
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted Across
            <span className="block text-gradient">Critical Sectors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineers and technicians at Castmen have supported mission-critical projects 
            for top-tier defense contractors. Their expertise now powers our solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/50"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="relative mb-4 inline-flex rounded-lg bg-muted/50 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="relative mb-2 text-lg font-semibold text-foreground">
                {industry.name}
              </h3>
              <p className="relative text-sm text-muted-foreground">
                {industry.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rotate-45 border-b border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Don't see your industry? We work with OEMs and manufacturers across all sectors.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            Contact us to discuss your requirements
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
