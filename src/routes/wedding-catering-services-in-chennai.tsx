import { createFileRoute } from "@tanstack/react-router";
import cutWeddingFeast from "@/assets/cutout-wedding-feast.png";
import ServiceSubPage from "@/components/ServiceSubPage";
import weddingHall from "@/assets/IMG_4558.webp";

export const Route = createFileRoute("/wedding-catering-services-in-chennai")({
  head: () => ({
    meta: [
      { title: "Wedding Catering Services in Chennai | Premium South Indian Caterers" },
      { name: "description", content: "Book premium wedding catering services in Chennai with authentic South Indian menus and customized packages." },
      { name: "keywords", content: "Wedding Catering Services in Chennai, Kalyana Saapadu, Banana Leaf Wedding Menu, South Indian Veg Catering, D Venkat Caterer" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
      { property: "og:title", content: "Wedding Catering Services in Chennai | Premium South Indian Caterers" },
      { property: "og:description", content: "Book premium wedding catering services in Chennai with authentic South Indian menus and customized packages." },
      { property: "og:url", content: "https://cateringinchennai.com/wedding-catering-services-in-chennai/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://cateringinchennai.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wedding Catering Services in Chennai" },
      { name: "twitter:description", content: "Book premium wedding catering services in Chennai with authentic South Indian menus and customized packages." },
      { name: "twitter:image", content: "https://cateringinchennai.com/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://cateringinchennai.com/wedding-catering-services-in-chennai/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://cateringinchennai.com/wedding-catering-services-in-chennai/#service",
              "serviceType": "Wedding Catering Services",
              "name": "Exquisite Wedding Catering Services in Chennai",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://cateringinchennai.com/#localbusiness"
              },
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "description": "Traditional South Indian wedding catering offering authentic Thala Vazhai Ilai Saapadu (banana-leaf meals), pre-wedding & post-wedding receptions."
            },
            {
              "@type": "FAQPage",
              "@id": "https://cateringinchennai.com/wedding-catering-services-in-chennai/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of wedding menu options do you provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer traditional South Indian banana leaf wedding meals (Kalyana Saapadu), modern premium buffet spreads, live dosa and chaat counters, and custom dessert stations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can we customize the wedding menu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our wedding menus are 100% customizable. We work with you to plan every meal from pre-wedding rituals to the main reception."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide sample tasting before booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a free sample food tasting session for weddings and engagements to ensure you love the taste and quality before booking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you serve areas outside Pattabiram?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide wedding catering services across all locations in Chennai, including Anna Nagar, T Nagar, Velachery, Tambaram, Porur, and OMR."
                  }
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://cateringinchennai.com/wedding-catering-services-in-chennai/#breadcrumb",
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
                  "name": "Wedding Catering",
                  "item": "https://cateringinchennai.com/wedding-catering-services-in-chennai/"
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: WeddingCateringPage,
});

function WeddingCateringPage() {
  return (
    <ServiceSubPage
      peekImage={cutWeddingFeast}
      peekSide="left"
      badge="Weddings"
      title="Exquisite Wedding Catering Services"
      subtitle="in Chennai"
      description="Your wedding is a once-in-a-lifetime celebration, and we are here to make it truly unforgettable. We specialize in traditional South Indian wedding catering, offering authentic Thala Vazhai Ilai Saapadu (traditional banana-leaf meals) that your guests will cherish."
      heroImage={weddingHall}
      heroImageAlt="Traditional South Indian wedding buffet setup with banana leaf saapadu in Chennai"
      serviceType="Wedding Catering"
      canonicalUrl="https://cateringinchennai.com/wedding-catering-services-in-chennai/"
      features={[
        {
          title: "Customized Wedding Packages",
          description: "We offer tailored packages that cover pre-wedding rituals, the main wedding ceremony, and post-wedding receptions."
        },
        {
          title: "The MCC Signature Experience",
          description: "From the initial planning stages to the final serve, our team ensures every detail—from the richness of our Arachuvitta Sambar to the sweetness of our Elaneer Payasam—reflects the grandeur of your big day."
        },
        {
          title: "Logistics & Management",
          description: "We provide end-to-end event management, allowing you to enjoy your wedding rituals while we handle the seamless execution of the dining experience."
        },
        {
          title: "Quality Commitment",
          description: "We prioritize fresh, high-quality ingredients to ensure that every dish served meets the highest standards of taste and tradition."
        }
      ]}
    />
  );
}
