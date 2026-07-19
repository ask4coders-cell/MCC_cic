import { createFileRoute } from "@tanstack/react-router";
import ServiceSubPage from "@/components/ServiceSubPage";
import cutSweets from "@/assets/cutout-sweets.png";
import liveCounter from "@/assets/images-32.jpeg";

export const Route = createFileRoute("/engagement-catering-services-in-chennai")({
  head: () => ({
    meta: [
      { title: "Engagement Catering Services in Chennai | Betrothal Food Caterers" },
      { name: "description", content: "Premium engagement catering services in Chennai. Custom vegetarian menus, live food counters, and elegant presentation for betrothal functions and intimate events." },
      { name: "keywords", content: "Engagement Catering in Chennai, Engagement Function Food, Betrothal Catering Chennai, Veg Engagement Menu" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
      { property: "og:title", content: "Engagement Catering Services in Chennai | Betrothal Food Caterers" },
      { property: "og:description", content: "Premium engagement catering services in Chennai. Custom vegetarian menus, live food counters, and elegant presentation for betrothal functions and intimate events." },
      { property: "og:url", content: "https://cateringinchennai.com/engagement-catering-services-in-chennai/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://cateringinchennai.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Engagement Catering Services in Chennai" },
      { name: "twitter:description", content: "Premium engagement catering services in Chennai. Custom vegetarian menus, live food counters, and elegant presentation for betrothal functions and intimate events." },
      { name: "twitter:image", content: "https://cateringinchennai.com/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://cateringinchennai.com/engagement-catering-services-in-chennai/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://cateringinchennai.com/engagement-catering-services-in-chennai/#service",
              "serviceType": "Engagement Catering Services",
              "name": "Bespoke Engagement Catering Services in Chennai",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://cateringinchennai.com/#localbusiness"
              },
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "description": "Personalized engagement catering in Chennai offering curated menus, scalable gathering solutions, and professional presentation."
            },
            {
              "@type": "FAQPage",
              "@id": "https://cateringinchennai.com/engagement-catering-services-in-chennai/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What catering formats do you support for engagement functions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer traditional sit-down banana leaf meals, grand buffets, and live food counters (dosa, chaat, mocktails, and desserts) customized for your guest count."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you cater for intimate home-based engagement ceremonies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we cater for all event sizes. We provide professional catering services for small, intimate home gatherings (20+ guests) as well as grand hall ceremonies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide traditional sweets for engagement gift exchanges?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in traditional South Indian sweets like Kasi Halwa, Asoka Halwa, and premium ghee laddu for betrothal ceremony exchanges and guest return gifts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How early should we book engagement catering?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend booking at least 2 to 4 weeks in advance, especially during the auspicious wedding and engagement seasons in Chennai."
                  }
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://cateringinchennai.com/engagement-catering-services-in-chennai/#breadcrumb",
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
                  "name": "Engagement Catering",
                  "item": "https://cateringinchennai.com/engagement-catering-services-in-chennai/"
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: EngagementCateringPage,
});

function EngagementCateringPage() {
  return (
    <ServiceSubPage
      peekImage={cutSweets}
      peekSide="right"
      badge="Engagements"
      title="Bespoke Engagement Catering"
      subtitle="in Chennai"
      description="Celebrate your commitment with our personalized engagement catering services. We understand that an engagement function requires a perfect balance of style, comfort, and authentic flavor."
      heroImage={liveCounter}
      heroImageAlt="Bespoke engagement catering event setup in Chennai with live counter and fresh marigolds"
      serviceType="Engagement Catering"
      canonicalUrl="https://cateringinchennai.com/engagement-catering-services-in-chennai/"
      features={[
        {
          title: "Curated Menu Design",
          description: "We work closely with you to curate a menu that matches the unique vibe of your celebration, ensuring that every dish is as memorable as the occasion itself."
        },
        {
          title: "Scalable Solutions",
          description: "Whether you are planning an intimate gathering for close family or a large-scale engagement celebration, we provide dedicated, high-quality service for all event sizes."
        },
        {
          title: "Professional Presentation",
          description: "Our service team emphasizes an elegant presentation, ensuring that your engagement function is not only delicious but visually stunning."
        }
      ]}
    />
  );
}
