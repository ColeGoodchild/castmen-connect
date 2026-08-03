export const SITE_URL = "https://castmen-connects-us.lovable.app";

export const setMeta = (
  name: string,
  content: string,
  attr: "name" | "property" = "name"
) => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const setCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const setJsonLd = (id: string, data: unknown) => {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export const removeJsonLd = (id: string) => {
  document.getElementById(id)?.remove();
};

interface HeadOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
}

/** Applies title/description/canonical/OG/Twitter tags for a route. */
export const applyHead = ({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
}: HeadOptions) => {
  const url = `${SITE_URL}${path}`;
  document.title = title;
  setMeta("description", description);
  if (keywords) setMeta("keywords", keywords);
  setCanonical(url);
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", type, "property");
  setMeta("og:url", url, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  if (image) {
    const abs = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    setMeta("og:image", abs, "property");
    setMeta("twitter:image", abs);
  }
};
