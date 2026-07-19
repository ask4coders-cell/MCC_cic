import { createFileRoute } from "@tanstack/react-router";
import { About } from "./about";

export const Route = createFileRoute("/about-my-chennai-catering")({
  head: () => ({
    meta: [
      { title: "About My Chennai Catering | Authentic Taste & Legacy in Chennai" },
      {
        name: "description",
        content:
          "Welcome to My Chennai Catering Services (MCC), your premier partner for vegetarian catering in Chennai. 20+ years of legacy under D. Venkat's leadership.",
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
      },
      {
        property: "og:title",
        content: "About My Chennai Catering Services | Authentic Taste & Legacy",
      },
      {
        property: "og:description",
        content:
          "Welcome to My Chennai Catering Services (MCC), your premier partner for vegetarian catering in Chennai. 20+ years of legacy under D. Venkat's leadership.",
      },
      {
        property: "og:url",
        content: "https://cateringinchennai.com/about-my-chennai-catering/",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://cateringinchennai.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About My Chennai Catering Services"
      },
      {
        name: "twitter:description",
        content:
          "Welcome to My Chennai Catering Services (MCC), your premier partner for vegetarian catering in Chennai. 20+ years of legacy under D. Venkat's leadership.",
      },
      { name: "twitter:image", content: "https://cateringinchennai.com/logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://cateringinchennai.com/about-my-chennai-catering/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://cateringinchennai.com/about-my-chennai-catering/#webpage",
              "url": "https://cateringinchennai.com/about-my-chennai-catering/",
              "name": "About My Chennai Catering | Authentic Taste & Legacy in Chennai",
              "description": "Learn about My Chennai Catering (MCC). Discover our 20+ years legacy of vegetarian catering under D. Venkat's leadership.",
              "breadcrumb": { "@id": "https://cateringinchennai.com/about-my-chennai-catering/#breadcrumb" },
              "mainEntity": {
                "@type": "LocalBusiness",
                "@id": "https://cateringinchennai.com/#localbusiness"
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://cateringinchennai.com/about-my-chennai-catering/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cateringinchennai.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://cateringinchennai.com/about-my-chennai-catering/"
                }
              ]
            }
          ]
        }),
      },
    ],
  }),
  component: About,
});
