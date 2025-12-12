import { MapPin, Zap, Users, Award, Clock, CheckCircle } from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Domestic Manufacturing",
    description: "U.S.-based production means faster lead times, easier communication, and simplified supply chain management.",
    highlight: "Seneca Falls, NY",
  },
  {
    icon: Zap,
    title: "Expedite Status",
    description: "New orders receive expedite priority. We understand that time-to-market is critical for your success.",
    highlight: "Fast Turnaround",
  },
  {
    icon: Users,
    title: "Engineer-to-Engineer Support",
    description: "Direct access to our engineering team for design assistance, troubleshooting, and technical collaboration.",
    highlight: "Direct Access",
  },
  {
    icon: Award,
    title: "100% IPC-Certified Team",
    description: "Every team member is IPC certified, ensuring consistent quality across all orders regardless of complexity.",
    highlight: "Certified Excellence",
  },
  {
    icon: CheckCircle,
    title: "100% Functional Testing",
    description: "Every assembly undergoes comprehensive testing to ensure zero defects before shipment.",
    highlight: "Zero Defects",
  },
  {
    icon: Clock,
    title: "Responsive & Flexible",
    description: "Our strength lies in our responsiveness and flexibility to meet your unique specifications and timelines.",
    highlight: "Custom Solutions",
  },
];

const Differentiators = () => {
  return (
    <section id="quality" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Accent elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Award className="h-4 w-4" />
            Why Choose Castmen
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The Castmen
            <span className="block text-gradient">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine domestic manufacturing agility with aerospace-grade precision 
            to deliver cable assemblies that exceed expectations.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
            >
              {/* Top highlight bar */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Icon and Highlight */}
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex rounded-xl border border-primary/30 bg-primary/10 p-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {item.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
