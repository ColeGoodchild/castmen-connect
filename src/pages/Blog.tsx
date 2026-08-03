import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ArrowRight, BookOpen, Star, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import {
  sortedArticles,
  activeCategories,
  readingTime,
  formatDate,
  type Article,
} from "@/data/blog";
import { applyHead, setJsonLd, removeJsonLd, SITE_URL } from "@/lib/seo";

const CategoryPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-primary bg-primary/15 text-primary"
        : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
    }`}
  >
    {label}
  </button>
);

const Meta = ({ article }: { article: Article }) => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
    <span className="font-medium text-primary">{article.category}</span>
    <span className="h-1 w-1 rounded-full bg-border" />
    <time dateTime={article.date}>{formatDate(article.date)}</time>
    <span className="h-1 w-1 rounded-full bg-border" />
    <span className="inline-flex items-center gap-1">
      <Clock className="h-3 w-3" />
      {readingTime(article)} min read
    </span>
  </div>
);

const ArticleCard = ({ article }: { article: Article }) => (
  <Link
    to={`/blog/${article.slug}`}
    className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 transition-all hover:border-primary/50 hover:bg-card/70"
  >
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src={article.image}
        alt={article.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <Meta article={article} />
      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

const Blog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    applyHead({
      title: "Engineering Knowledge Center | Castmen Electronics",
      description:
        "Technical guides on wire harness manufacturing, cable assemblies, IPC/WHMA-A-620, AS9100, MIL-SPEC and electrical testing from Castmen Electronics engineers.",
      path: "/blog",
      keywords:
        "wire harness manufacturing guide, cable assembly knowledge center, IPC/WHMA-A-620, AS9100 wire harness, MIL-SPEC harness, cable assembly testing",
    });
    setJsonLd("blog-jsonld", {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Castmen Electronics Engineering Knowledge Center",
      url: `${SITE_URL}/blog`,
      publisher: {
        "@type": "Organization",
        name: "Castmen Electronics",
        url: SITE_URL,
      },
      blogPost: sortedArticles.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        url: `${SITE_URL}/blog/${a.slug}`,
        datePublished: a.date,
        author: { "@type": "Organization", name: a.author },
      })),
    });
    return () => removeJsonLd("blog-jsonld");
  }, []);

  const featured = sortedArticles.find((a) => a.featured) ?? sortedArticles[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedArticles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        !q ||
        [a.title, a.subtitle, a.excerpt, a.category, ...a.tags]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const mostRead = sortedArticles.filter((a) => a.mostRead).slice(0, 4);
  const editorsPicks = sortedArticles.filter((a) => a.editorsPick).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="grid-pattern absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Engineering Knowledge Center
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Interconnect engineering,{" "}
                <span className="text-gradient">documented</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Practical technical guidance on wire harness manufacturing, cable assemblies,
                standards compliance and test — written by the engineers who build
                mission-critical interconnects for aerospace, defense, robotics and medical
                programs.
              </p>
              <div className="relative mx-auto mt-10 max-w-xl">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search topics, standards, or capabilities"
                  aria-label="Search articles"
                  className="h-12 rounded-full border-border/60 bg-card/60 pl-11 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        {featured && !query && category === "All" && (
          <section className="border-b border-border/50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary">
                Featured Guide
              </h2>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid gap-8 overflow-hidden rounded-3xl border border-border/50 bg-card/40 transition-colors hover:border-primary/50 lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <Meta article={featured} />
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {featured.subtitle}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Library */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
              <div>
                <div className="mb-8 flex flex-wrap gap-2">
                  <CategoryPill
                    label="All"
                    active={category === "All"}
                    onClick={() => setCategory("All")}
                  />
                  {activeCategories.map((c) => (
                    <CategoryPill
                      key={c}
                      label={c}
                      active={category === c}
                      onClick={() => setCategory(c)}
                    />
                  ))}
                </div>

                {results.length === 0 ? (
                  <div className="rounded-2xl border border-border/50 bg-card/40 p-12 text-center">
                    <p className="text-foreground">No articles match your search.</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try a different term, or{" "}
                      <Link to="/#contact" className="text-primary underline underline-offset-4">
                        ask our engineers directly
                      </Link>
                      .
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {results.map((a) => (
                      <ArticleCard key={a.slug} article={a} />
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                  <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Most Read
                  </h2>
                  <ul className="space-y-4">
                    {mostRead.map((a, i) => (
                      <li key={a.slug}>
                        <Link
                          to={`/blog/${a.slug}`}
                          className="group flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="font-mono text-xs text-primary/70">
                            0{i + 1}
                          </span>
                          <span className="font-medium leading-6 text-foreground transition-colors group-hover:text-primary">
                            {a.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                  <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <Star className="h-3.5 w-3.5" />
                    Editors' Picks
                  </h2>
                  <ul className="space-y-4">
                    {editorsPicks.map((a) => (
                      <li key={a.slug}>
                        <Link to={`/blog/${a.slug}`} className="group block">
                          <span className="text-sm font-medium leading-6 text-foreground transition-colors group-hover:text-primary">
                            {a.title}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {readingTime(a)} min read
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/[0.07] p-6">
                  <h2 className="text-base font-semibold text-foreground">
                    Have a drawing to review?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Our engineers provide a manufacturability review on every RFQ, typically
                    within 24 hours.
                  </p>
                  <Link
                    to="/#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
