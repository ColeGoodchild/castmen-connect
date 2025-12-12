import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Radial Glow */}
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
      {/* Circuit Lines Decoration */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute right-0 top-1/3 h-px w-48 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 left-20 h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative mx-auto flex min-h-screen items-center px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              AS9100D / ISO 9001:2015 Certified
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Precision Wire Harness
              <span className="block text-gradient">Manufacturing</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay-2 mb-8 max-w-lg text-lg text-muted-foreground">
              U.S.-based custom cable assembly manufacturer delivering mission-critical 
              solutions for aerospace, defense, robotics, and advanced technology sectors.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground"
              >
                View Capabilities
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;0.5%</div>
                <div className="mt-1 text-sm text-muted-foreground">RMA Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&gt;98%</div>
                <div className="mt-1 text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">Tested Assemblies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              {/* Main Visual Box */}
              <div className="animate-float relative h-96 w-96 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5" />
                
                {/* Floating elements */}
                <div className="absolute -left-6 top-12 rounded-lg border border-primary/30 bg-card p-4 shadow-xl glow-box">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="absolute -right-6 bottom-20 rounded-lg border border-primary/30 bg-card p-4 shadow-xl glow-box">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                
                <div className="absolute -bottom-4 left-16 rounded-lg border border-primary/30 bg-card p-4 shadow-xl glow-box">
                  <Shield className="h-8 w-8 text-primary" />
                </div>

                {/* Center content */}
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full border border-primary/30 bg-primary/10 p-6">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      className="h-16 w-16 text-primary"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="24" cy="24" r="20" strokeDasharray="4 4" />
                      <circle cx="24" cy="24" r="12" />
                      <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
                      <circle cx="24" cy="24" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    Precision Engineering
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    ITAR Compliant · MIL-SPEC
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full border border-primary/10" />
              <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full border border-primary/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
