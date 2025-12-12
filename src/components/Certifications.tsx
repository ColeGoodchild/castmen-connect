import { Shield, FileCheck, Award, Leaf, Lock } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "AS9100D / ISO 9001:2015",
    description: "Aerospace quality management system certified",
    type: "Quality System",
  },
  {
    icon: Lock,
    name: "ITAR Compliant",
    description: "DDTC registered for defense articles",
    type: "Compliance",
  },
  {
    icon: FileCheck,
    name: "IPC/WHMA-A-620",
    description: "Cable & wire harness assembly workmanship standard",
    type: "Workmanship",
  },
  {
    icon: Award,
    name: "IPC J-STD-001",
    description: "Soldering requirements for electrical assemblies",
    type: "Workmanship",
  },
  {
    icon: Shield,
    name: "UL Certified",
    description: "Components meet safety standards",
    type: "Safety",
  },
  {
    icon: Leaf,
    name: "RoHS Compliant",
    description: "Restriction of hazardous substances",
    type: "Environmental",
  },
];

const companyInfo = [
  { label: "DUNS", value: "136273848" },
  { label: "CAGE Code", value: "10C34" },
  { label: "NAICS Codes", value: "334417, 335929, 335931, 541330" },
  { label: "Business Type", value: "Small Business" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Certifications */}
          <div>
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Certifications & Standards
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Certified
                <span className="block text-gradient">Excellence</span>
              </h2>
              <p className="text-muted-foreground">
                Our certifications reflect our commitment to the highest standards 
                in quality, safety, and environmental responsibility.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <cert.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-primary">
                      {cert.type}
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Company Info & Stats */}
          <div className="flex flex-col gap-8">
            {/* Company Details Card */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Company Information
              </h3>
              <div className="space-y-4">
                {companyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {info.label}
                    </span>
                    <span className="font-medium text-foreground">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality KPIs */}
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-card/30 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Quality Performance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">&lt;0.5%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    RMA Percentage
                  </div>
                  <div className="mt-1 text-xs text-primary/70">
                    Industry-leading return rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">&gt;98%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    On-Time Delivery
                  </div>
                  <div className="mt-1 text-xs text-primary/70">
                    Reliable every time
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-muted/30 p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Customer Satisfaction Guaranteed</span>
                  <br />
                  Comprehensive electrical, mechanical, and environmental testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
