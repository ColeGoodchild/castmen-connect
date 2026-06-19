import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface JcpBadgeProps {
  variant?: "chip" | "inline" | "card";
  linkToDetails?: boolean;
  className?: string;
}

/**
 * Reusable JCP (Joint Certification Program) credential badge.
 * Castmen Electronics is JCP-certified via DLA (DD Form 2345 on file).
 */
const JcpBadge = ({ variant = "chip", linkToDetails = false, className = "" }: JcpBadgeProps) => {
  const altText = "JCP Certified — Joint Certification Program badge for Castmen Electronics";

  if (variant === "card") {
    const content = (
      <div
        role="img"
        aria-label={altText}
        className={`group flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/5 p-4 backdrop-blur-sm transition-all hover:border-primary/70 hover:bg-primary/10 ${className}`}
      >
        <div className="rounded-lg bg-primary/15 p-2 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            DLA Certified
          </div>
          <div className="font-semibold text-foreground">JCP Certified</div>
          <div className="text-xs text-muted-foreground">
            Joint Certification Program · DD Form 2345
          </div>
        </div>
      </div>
    );
    return linkToDetails ? (
      <Link to="/#certifications" className="block">
        {content}
      </Link>
    ) : (
      content
    );
  }

  if (variant === "inline") {
    const inner = (
      <span
        role="img"
        aria-label={altText}
        className={`inline-flex items-center gap-1.5 text-sm font-medium text-primary ${className}`}
      >
        <ShieldCheck className="h-4 w-4" />
        JCP Certified
      </span>
    );
    return linkToDetails ? (
      <Link to="/#certifications" className="hover:underline underline-offset-4">
        {inner}
      </Link>
    ) : (
      inner
    );
  }

  // chip (default)
  const chip = (
    <span
      role="img"
      aria-label={altText}
      className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary ${className}`}
    >
      <ShieldCheck className="h-3.5 w-3.5" />
      JCP Certified
    </span>
  );
  return linkToDetails ? (
    <Link to="/#certifications" className="hover:opacity-80 transition-opacity">
      {chip}
    </Link>
  ) : (
    chip
  );
};

export default JcpBadge;
