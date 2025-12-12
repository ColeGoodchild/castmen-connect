import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      {/* Accent glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Mail className="h-4 w-4" />
              Get In Touch
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Start Your
              <span className="block text-gradient">Project?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you need a prototype or high-volume production, our team is ready 
              to provide a competitive quote with fast turnaround times.
            </p>
          </div>

          {/* Contact Card */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              {/* Left - Contact Info */}
              <div className="border-b border-border/50 bg-muted/20 p-8 lg:border-b-0 lg:border-r lg:p-12">
                <h3 className="mb-8 text-2xl font-semibold text-foreground">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="mt-1 text-muted-foreground">
                        Seneca Falls, NY
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <a
                        href="tel:+13155680560"
                        className="mt-1 block text-primary transition-colors hover:text-primary/80"
                      >
                        (315) 568-0560
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a
                        href="mailto:sales@castmenelectronics.com"
                        className="mt-1 block text-primary transition-colors hover:text-primary/80"
                      >
                        sales@castmenelectronics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="mt-1 text-muted-foreground">
                        Monday - Friday
                        <br />
                        8:00 AM - 5:00 PM EST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Request a Quote
                </h3>
                <p className="mb-8 text-muted-foreground">
                  Send us your specifications and we'll provide a detailed quote 
                  with competitive pricing and lead times.
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="group w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email for Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground"
                    asChild
                  >
                    <a href="tel:+13155680560">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Directly
                    </a>
                  </Button>
                </div>

                <div className="mt-8 rounded-lg bg-muted/30 p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Expedite orders available
                    </span>
                    <br />
                    Fast turnaround for urgent requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
