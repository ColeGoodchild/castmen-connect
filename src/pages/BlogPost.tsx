import { useEffect, useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, ArrowRight, ArrowLeft, User, ListTree } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/blog/BlogContent";
import {
  getArticle,
  getRelated,
  readingTime,
  formatDate,
  slugifyHeading,
} from "@/data/blog";
import { applyHead, setJsonLd, removeJsonLd, SITE_URL } from "@/lib/seo";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const article = getArticle(slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!article) return;
    applyHead({
      title: article.seoTitle,
      description: article.metaDescription,
      path: `/blog/${article.slug}`,
      image: article.image,
      type: "article",
      keywords: article.tags.join(", "),
    });
    setJsonLd("article-jsonld", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      image: `${SITE_URL}${article.image}`,
      datePublished: article.date,
      dateModified: article.date,
      author: { "@type": "Organization", name: article.author },
      publisher: {
        "@type": "Organization",
        name: "Castmen Electronics",
        url: SITE_URL,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${article.slug}`,
      },
      articleSection: article.category,
      keywords: article.tags.join(", "),
      wordCount: undefined,
    });
    setJsonLd("breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Knowledge Center", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${SITE_URL}/blog/${article.slug}`,
        },
      ],
    });
    return () => {
      removeJsonLd("article-jsonld");
      removeJsonLd("breadcrumb-jsonld");
    };
  }, [article]);

  const toc = useMemo(
    () =>
      article
        ? article.content
            .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
            .map((b) => ({ id: slugifyHeading(b.text), text: b.text }))
        : [],
    [article]
  );

  if (!article) return <Navigate to="/blog" replace />;

  const related = getRelated(article);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <Header />
      <main className="pt-20">
        {/* Article header */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="grid-pattern absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="container relative mx-auto px-4 py-14 md:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto mb-8 flex max-w-[800px] flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">
                Knowledge Center
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.category}</span>
            </nav>
            <div className="mx-auto max-w-[800px]">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                {article.category}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{article.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/50 pt-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  {article.author}
                </span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readingTime(article)} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="container mx-auto px-4">
          <figure className="mx-auto -mt-2 max-w-5xl overflow-hidden rounded-2xl border border-border/50">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="aspect-[16/7] w-full object-cover"
            />
          </figure>
        </div>

        {/* Body */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[240px_minmax(0,800px)] lg:justify-center">
              <aside className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
                <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  <ListTree className="h-3.5 w-3.5" />
                  On this page
                </h2>
                <ul className="space-y-3 border-l border-border/60 pl-4">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              <article className="order-1 lg:order-2">
                <div className="mb-10 rounded-xl border border-border/60 bg-card/50 p-6">
                  <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    Key Takeaway
                  </h2>
                  <p className="text-[0.9375rem] leading-7 text-muted-foreground">
                    {article.summary}
                  </p>
                </div>

                <BlogContent blocks={article.content} />

                <div className="mt-12 flex flex-wrap gap-2 border-t border-border/50 pt-8">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.07] p-8">
                  <h2 className="text-xl font-semibold text-foreground">
                    Building a harness or cable assembly for a critical program?
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Castmen Electronics is an AS9100D-aligned, ITAR-registered, JCP-certified and
                    CMMC Level 2 self-certified manufacturer in Seneca Falls, NY. Send your
                    drawings and an engineer will respond with a manufacturability review,
                    typically within 24 hours.
                  </p>
                  <Link
                    to="/#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <Link
                  to="/blog"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to the Knowledge Center
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-border/50 bg-card/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground">
              Related Reading
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group rounded-2xl border border-border/50 bg-background/50 p-6 transition-colors hover:border-primary/50"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {a.category}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                    {readingTime(a)} min read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
