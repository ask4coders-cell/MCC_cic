# SCHEMA_PLAN.md
# My Chennai Catering - JSON-LD Schema Implementation Plan

## Objective
Implement structured data across the website to improve search visibility, rich results, and local SEO.

---

# 1. Homepage (/)

Schemas:
- Organization
- LocalBusiness
- CateringService
- WebSite
- SearchAction
- BreadcrumbList

Purpose:
- Identify the business
- Improve local search visibility
- Enable sitelinks search box
- Strengthen brand authority

---

# 2. Wedding Catering

URL:
/wedding-catering-chennai

Schemas:
- Service
- FAQPage
- BreadcrumbList

Recommended Fields:
- Service Name
- Description
- Area Served
- Provider
- Offers
- Image

---

# 3. Corporate Catering

Schemas:
- Service
- FAQPage
- BreadcrumbList

---

# 4. Birthday Catering

Schemas:
- Service
- FAQPage
- BreadcrumbList

---

# 5. Reception Catering

Schemas:
- Service
- BreadcrumbList

---

# 6. Housewarming Catering

Schemas:
- Service
- BreadcrumbList

---

# 7. Veg Catering

Schemas:
- Service

---

# 8. Non-Veg Catering

Schemas:
- Service

---

# 9. Buffet Catering

Schemas:
- Service

---

# 10. Live Food Counters

Schemas:
- Service

---

# 11. Gallery

Schemas:
- ImageGallery
- ImageObject
- BreadcrumbList

Purpose:
Improve image indexing and Google Images visibility.

---

# 12. Testimonials

Schemas:
- Review
- AggregateRating

Recommended Fields:
- Rating
- Reviewer
- Review Body
- Date Published

---

# 13. Contact

Schemas:
- LocalBusiness
- ContactPoint

Include:
- Business Name
- Address
- Phone
- Email
- Opening Hours
- Google Maps Coordinates

---

# 14. Blog

Schemas:
- Article
- BreadcrumbList
- Person (Author)
- ImageObject

Recommended Fields:
- Headline
- Description
- Published Date
- Modified Date
- Author
- Featured Image

---

# 15. FAQ Sections

Applicable Pages:
- Home
- Wedding
- Corporate
- Birthday
- Contact

Schema:
- FAQPage

---

# 16. Global Schema Rules

- JSON-LD format only
- One primary schema per page
- Include BreadcrumbList on all pages
- Validate using Google's Rich Results Test
- Avoid duplicate schema
- Keep business information consistent across all pages

---

# AI Implementation Checklist

✅ Dynamic JSON-LD generation
✅ Schema per page
✅ Canonical URLs
✅ Open Graph metadata
✅ Twitter Cards
✅ Rich Results validation
