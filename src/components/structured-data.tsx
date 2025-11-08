import { contactInfo } from "@/data/contact/contact";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Global Tech Fluid Services",
  "description": "Leading provider of industrial filters, delivering efficient & durable filtration solutions",
  "url": contactInfo.website,
  "logo": `${contactInfo.website}/gtfs-logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": contactInfo.phone,
    "contactType": "customer service",
    "email": contactInfo.email
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressRegion": "Industrial District",
    "addressLocality": "Manufacturing Zone"
  },
  "sameAs": [
    "https://linkedin.com/company/global-tech-fluid-services",
    "https://twitter.com/gtfservices"
  ]
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Global Tech Fluid Services",
  "url": contactInfo.website,
  "description": "Industrial filtration solutions and dust collector filter cartridges",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${contactInfo.website}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};