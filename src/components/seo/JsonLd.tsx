import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface JsonLdProps {
  type: "FAQPage" | "Service" | "Organization" | "BreadcrumbList" | "WebSite";
  faqs?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = "https://mindyourbusiness.media";

export function JsonLd({ type, faqs, serviceName, serviceDescription, breadcrumbs }: JsonLdProps) {
  useEffect(() => {
    const id = `jsonld-${type}-${serviceName?.replace(/\s/g, "-") || "org"}`;
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    let data: Record<string, unknown>;

    if (type === "FAQPage" && faqs?.length) {
      data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
    } else if (type === "Service") {
      data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description: serviceDescription,
        provider: {
          "@type": "Organization",
          name: "Mind Your Business Media",
          url: BASE_URL,
        },
        areaServed: "US",
        serviceType: "Marketing Agency",
      };
    } else if (type === "BreadcrumbList" && breadcrumbs?.length) {
      data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${BASE_URL}${item.path}`,
        })),
      };
    } else if (type === "WebSite") {
      data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mind Your Business Media",
        url: BASE_URL,
        description:
          "Full-funnel growth agency for dietary supplements, nutraceuticals, sports nutrition, and wellness brands.",
        publisher: {
          "@type": "Organization",
          name: "Mind Your Business Media",
          url: BASE_URL,
        },
      };
    } else {
      data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mind Your Business Media",
        url: BASE_URL,
        description:
          "Full-funnel growth agency for dietary supplements, nutraceuticals, sports nutrition, and wellness brands.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@mindyourbusinessmedia.com",
          contactType: "sales",
        },
      };
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [type, faqs, serviceName, serviceDescription, breadcrumbs]);

  return null;
}
