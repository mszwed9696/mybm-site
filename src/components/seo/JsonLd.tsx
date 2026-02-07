import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  type: "FAQPage" | "Service" | "Organization";
  faqs?: FAQItem[];
  serviceName?: string;
  serviceDescription?: string;
}

export function JsonLd({ type, faqs, serviceName, serviceDescription }: JsonLdProps) {
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
          url: "https://mindyourbusinessmedia.com",
        },
        areaServed: "US",
        serviceType: "Marketing Agency",
      };
    } else {
      data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mind Your Business Media",
        url: "https://mindyourbusinessmedia.com",
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
  }, [type, faqs, serviceName, serviceDescription]);

  return null;
}
