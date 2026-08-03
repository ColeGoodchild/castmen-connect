import { Link } from "react-router-dom";
import {
  Lightbulb,
  PenTool,
  BookMarked,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import type { Block, CalloutVariant } from "@/data/blog";
import { slugifyHeading } from "@/data/blog";

/** Renders **bold** and [label](/path) inline markup as React nodes. */
export const RichText = ({ text }: { text: string }) => {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {tokens.map((tok, i) => {
        const bold = tok.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {bold[1]}
            </strong>
          );
        }
        const link = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link
                key={i}
                to={href}
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                {label}
              </Link>
            );
          }
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
            >
              {label}
            </a>
          );
        }
        return <span key={i}>{tok}</span>;
      })}
    </>
  );
};

const CALLOUTS: Record<
  CalloutVariant,
  { icon: typeof Lightbulb; label: string }
> = {
  tip: { icon: Lightbulb, label: "Tip" },
  note: { icon: PenTool, label: "Engineering Note" },
  standard: { icon: BookMarked, label: "Standards Reference" },
  quality: { icon: ShieldCheck, label: "Quality Note" },
  "best-practice": { icon: CheckCircle2, label: "Best Practice" },
  warning: { icon: AlertTriangle, label: "Warning" },
};

const BlogContent = ({ blocks }: { blocks: Block[] }) => (
  <div className="space-y-7">
    {blocks.map((block, i) => {
      switch (block.type) {
        case "h2":
          return (
            <h2
              key={i}
              id={slugifyHeading(block.text)}
              className="scroll-mt-28 pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {block.text}
            </h2>
          );
        case "h3":
          return (
            <h3
              key={i}
              id={slugifyHeading(block.text)}
              className="scroll-mt-28 pt-2 text-xl font-semibold text-foreground"
            >
              {block.text}
            </h3>
          );
        case "p":
          return (
            <p key={i} className="text-[1.0625rem] leading-8 text-muted-foreground">
              <RichText text={block.text} />
            </p>
          );
        case "ul":
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[1.0625rem] leading-8 text-muted-foreground">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        case "ol":
          return (
            <ol key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-4 text-[1.0625rem] leading-8 text-muted-foreground">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
                    {j + 1}
                  </span>
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ol>
          );
        case "callout": {
          const { icon: Icon, label } = CALLOUTS[block.variant];
          return (
            <aside
              key={i}
              className="rounded-xl border border-primary/25 bg-primary/[0.06] p-6"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {block.title || label}
                </span>
              </div>
              <p className="text-[0.9375rem] leading-7 text-muted-foreground">
                <RichText text={block.text} />
              </p>
            </aside>
          );
        }
        case "table":
          return (
            <figure key={i} className="overflow-hidden rounded-xl border border-border/60">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-card">
                      {block.head.map((h) => (
                        <th
                          key={h}
                          className="border-b border-border/60 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="odd:bg-background/40 even:bg-card/40">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`border-b border-border/40 px-4 py-3 align-top ${
                              c === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.caption && (
                <figcaption className="border-t border-border/40 bg-card/60 px-4 py-2 text-xs text-muted-foreground">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        case "spec":
          return (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card/60 p-6 font-mono"
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                {block.title}
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap text-[0.8125rem] leading-7 text-muted-foreground">
                {block.lines.join("\n")}
              </pre>
            </div>
          );
        default:
          return null;
      }
    })}
  </div>
);

export default BlogContent;
