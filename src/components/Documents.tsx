import { Award, FileText, ScrollText, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    icon: Award,
    eyebrow: "Quality Certification",
    title: "AS9100D Certificate",
    description:
      "View our current AS9100D / ISO 9001:2015 certificate of registration. Read-only copy available for customer quality records.",
    actionLabel: "View",
    actionIcon: Eye,
    href: "/documents/castmen-as9100-certificate.pdf",
    download: false,
  },
  {
    icon: ScrollText,
    eyebrow: "For Suppliers",
    title: "Supplier Terms & Conditions",
    description:
      "Castmen Electronics standard purchase order terms, including AS9100 flowdown requirements for our approved supply base.",
    actionLabel: "Download",
    actionIcon: Download,
    href: "/documents/castmen-supplier-terms-and-conditions.pdf",
    download: false,
  },
  {
    icon: FileText,
    eyebrow: "For Clients",
    title: "Client Terms & Conditions",
    description:
      "Standard terms and conditions governing quotes, orders, and deliverables from Castmen Electronics to our customers.",
    actionLabel: "Download",
    actionIcon: Download,
    href: "/documents/castmen-client-terms-and-conditions.pdf",
    download: false,
  },
];

const Documents = () => {
  return (
    <section id="documents" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            Documents & Compliance
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Certifications &
            <span className="block text-gradient">Standard Terms</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick access to our quality certifications and the standard terms that
            govern our supplier and client relationships.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {documents.map((doc) => {
            const Icon = doc.icon;
            const ActionIcon = doc.actionIcon;
            return (
              <div
                key={doc.title}
                className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/70"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {doc.eyebrow}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {doc.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {doc.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...(doc.download ? { download: "" } : {})}
                  >
                    <ActionIcon className="mr-2 h-4 w-4" />
                    {doc.actionLabel}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documents;
