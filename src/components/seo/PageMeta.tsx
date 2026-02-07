import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
}

const BASE_URL = "https://mindyourbusinessmedia.com";

export function PageMeta({
  title,
  description,
  keywords,
  canonicalPath,
  ogTitle,
  ogDescription,
}: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:url", `${BASE_URL}${canonicalPath}`, true);
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${canonicalPath}`);

    return () => {
      document.title = "Mind Your Business Media | Performance Marketing Agency for Supplement Brands";
      setMeta("description", "Full-funnel growth agency for dietary supplements, nutraceuticals, sports nutrition, and wellness brands. Paid ads, funnels, email automation & ROAS-first strategy.");
      if (canonical) canonical.setAttribute("href", BASE_URL);
    };
  }, [title, description, keywords, canonicalPath, ogTitle, ogDescription]);

  return null;
}
