import { createFileRoute } from "@tanstack/react-router";
import ServiceSubPage from "@/components/ServiceSubPage";
import cutBiryani from "@/assets/cutout-biryani.png";
import spices from "@/assets/images-31.jpeg";

export const Route = createFileRoute("/corporate-catering-services-in-chennai")({
  head: () => ({
    meta: [
      { title: "Corporate Catering Services in Chennai | Business Event Catering" },
      { name: "description", content: "Premium corporate catering services in Chennai. Punctual catering delivery for business meetings, conferences, and office events with customized vegetarian menus." },
      { name: "keywords", content: "Corporate Catering Services in Chennai, Office Event Catering, Corporate Lunch Buffet Chennai, Executive Breakfast Spread" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
      { property: "og:title", content: "Corporate Catering Services in Chennai | Business Event Catering" },
      { property: "og:description", content: "Premium corporate catering services in Chennai. Punctual catering delivery for business meetings, conferences, and office events with customized vegetarian menus." },
      { property: "og:url", content: "https://cateringinchennai.com/corporate-catering-services-in-chennai/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://cateringinchennai.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Corporate Catering Services in Chennai" },
      { name: "twitter:description", content: "Premium corporate catering services in Chennai. Punctual catering delivery for business meetings, conferences, and office events with customized vegetarian menus." },
      { name: "twitter:image", content: "https://cateringinchennai.com/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://cateringinchennai.com/corporate-catering-services-in-chennai/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://cateringinchennai.com/corporate-catering-services-in-chennai/#service",
              "serviceType": "Corporate Catering Services",
              "name": "Professional Corporate Catering Services in Chennai",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://cateringinchennai.com/#localbusiness"
              },
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "description": "Professional corporate catering services in Chennai offering reliable scheduling, tailored business menus, working lunches, and stress-free dining operations."
            },
            {
              "@type": "FAQPage",
              "@id": "https://cateringinchennai.com/corporate-catering-services-in-chennai/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What corporate events do you cater for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cater for all corporate events including annual meetings, conferences, employee celebrations, working lunches, and daily office catering."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer vegetarian options for corporate events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in high-quality vegetarian catering, offering multi-cuisine menus, Sattvik spreads, and light working lunch packs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the minimum guest count for corporate catering?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cater for corporate events of all scales, starting from small executive meetings of 20 guests to large company celebrations of 1000+ guests."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you deliver food directly to office premises?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide on-time food delivery and full buffet setups directly at your office premises or selected corporate event venues in Chennai."
                  }
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://cateringinchennai.com/corporate-catering-services-in-chennai/#breadcrumb",
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
                  "name": "Services",
                  "item": "https://cateringinchennai.com/services/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Corporate Catering",
                  "item": "https://cateringinchennai.com/corporate-catering-services-in-chennai/"
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: CorporateCateringPage,
});

function CorporateCateringPage() {
  return (
    <ServiceSubPage
      peekImage={cutBiryani}
      peekSide="right"
      badge="Corporate Events"
      title="Professional Corporate Catering Services"
      subtitle="in Chennai"
      description="Elevate your business meetings, conferences, and office celebrations with our premium corporate catering services. We recognize that professionalism, punctuality, and efficiency are key to successful business events."
      heroImage={spices}
      heroImageAlt="Professional corporate event catering buffet setup in Chennai"
      serviceType="Corporate Catering"
      canonicalUrl="https://cateringinchennai.com/corporate-catering-services-in-chennai/"
      features={[
        {
          title: "Reliable Scheduling",
          description: "We guarantee timely food delivery and setup, ensuring that your corporate itinerary remains on track."
        },
        {
          title: "Tailored Business Menus",
          description: "We offer a variety of menu options ranging from light breakfast spreads and working lunches to formal corporate dinner setups."
        },
        {
          title: "Stress-Free Operations",
          description: "Our experienced team manages the entire dining setup, allowing you and your team to focus entirely on your business objectives while we handle the hospitality."
        }
      ]}
    />
  );
}
