import { Shield, FileCheck, Award, Leaf, Lock, ShieldCheck, FileBadge, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const certifications: {
  icon: typeof Shield;
  name: string;
  description: string;
  type: string;
  link?: string;
}[] = [
  {
    icon: Shield,
    name: "AS9100D / ISO 9001:2015",
    description: "Aerospace quality management system certified",
    type: "Quality System",
    link: "/as9100-wire-harness-manufacturer",
  },
  {
    icon: Lock,
    name: "ITAR Compliant",
    description: "DDTC registered for defense articles",
    type: "Compliance",
    link: "/itar-cable-assembly-manufacturer",
  },
  {
    icon: ShieldCheck,
    name: "JCP Certified (DD Form 2345)",
    description: "DLA Joint Certification Program — cleared for export-controlled unclassified military technical data",
    type: "Defense Access",
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
                As a JCP-certified wire harness and cable assembly manufacturer, our credentials reflect our commitment
                to the highest standards in quality, safety, environmental responsibility, and defense supply-chain compliance.
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
                    {cert.link ? (
                      <Link to={cert.link} className="hover:text-primary">
                        {cert.name}
                      </Link>
                    ) : (
                      cert.name
                    )}
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
                Quality Metrics
              </h3>
              <div className="grid grid-cols-3 gap-6">
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
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Tested Assemblies
                  </div>
                  <div className="mt-1 text-xs text-primary/70">
                    Verified before shipment
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

        {/* Dedicated JCP Section */}
        <div id="jcp-certification" className="relative mt-20 scroll-mt-24 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/60 to-card/40 p-8 backdrop-blur-sm lg:p-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" />
                DLA Joint Certification Program
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Joint Certification Program (JCP) Certification
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Castmen Electronics is a <strong className="text-foreground">JCP-certified wire harness and cable assembly manufacturer</strong> based in
                Seneca Falls, NY — vetted by the U.S. Defense Logistics Agency (DLA) to access export-controlled
                unclassified military technical data through an approved DD Form 2345.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-foreground">What the Joint Certification Program is</h3>
              <p className="mb-6 text-muted-foreground">
                Administered by the DLA, the Joint Certification Program certifies U.S. and Canadian
                companies to receive unclassified military technical data that is export-controlled and not
                released to the public. Each certified company is documented via an approved{" "}
                <a
                  href="https://www.dla.mil/logistics-operations/services/joint-certification-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  DD Form 2345
                </a>
                .
              </p>

              <h3 className="mb-2 text-xl font-semibold text-foreground">What JCP certification allows us to do</h3>
              <ul className="mb-6 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <FileBadge className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  Receive and work from export-controlled unclassified military technical drawings, prints, and specifications.
                </li>
                <li className="flex gap-2">
                  <FileBadge className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  Support defense-related research, manufacturing, and government contract work as a vetted DLA JCP-certified supplier.
                </li>
                <li className="flex gap-2">
                  <FileBadge className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  Participate in export-controlled defense manufacturing programs that require a documented Joint Certification Program manufacturer.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-foreground">Why it matters to our customers</h3>
              <p className="text-muted-foreground">
                Working with a DLA JCP-certified, DD Form 2345 certified supplier means your defense
                technical data is handled by a partner that has been formally vetted for compliance and
                trustworthiness in the defense supply chain — alongside our{" "}
                <Link to="/itar-cable-assembly-manufacturer" className="text-primary underline-offset-4 hover:underline">
                  ITAR registration
                </Link>{" "}
                and{" "}
                <Link to="/as9100-wire-harness-manufacturer" className="text-primary underline-offset-4 hover:underline">
                  AS9100D quality system
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div
                role="img"
                aria-label="JCP Certified — Joint Certification Program badge for Castmen Electronics"
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary/50 bg-card/70 p-8 text-center shadow-lg"
              >
                <div className="mb-4 rounded-full border-2 border-primary/60 bg-primary/15 p-5 text-primary">
                  <ShieldCheck className="h-12 w-12" />
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-primary">
                  DLA Certified
                </div>
                <div className="mt-1 text-2xl font-bold text-foreground">JCP Certified</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Joint Certification Program
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  DD Form 2345 on file
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 p-3 text-xs text-muted-foreground">
                <Globe2 className="h-4 w-4 flex-shrink-0 text-primary" />
                Castmen Electronics · Seneca Falls, NY · U.S.-based defense supplier
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
