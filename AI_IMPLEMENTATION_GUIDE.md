# AI_IMPLEMENTATION_GUIDE.md
# My Chennai Catering - AI SEO Implementation Guide

## Purpose
This document is the single source of truth for implementing SEO in the React website.

---

# Project Information

Website:
https://cateringinchennai.com

Brand:
My Chennai Catering

Framework:
React + TypeScript + Vite (or Next.js if migrated)

---

# Files to Read First

Read these documents **before making any code changes**:

1. SEO_MASTER.md
2. KEYWORDS.md
3. PAGE_MAPPING.md
4. META_TEMPLATES.md
5. SCHEMA_PLAN.md
6. INTERNAL_LINKING.md
7. LOCAL_SEO.md
8. TECHNICAL_SEO_CHECKLIST.md

Do not guess keywords or metadata.

---

# Primary Rules

- Preserve the existing UI/UX.
- Do not rename routes unless instructed.
- Do not remove existing functionality.
- One primary keyword per page.
- Use secondary keywords naturally.
- Avoid keyword stuffing.

---

# Page-by-Page Workflow

For every page:

1. Read the mapped keyword.
2. Apply the SEO title.
3. Apply the meta description.
4. Set the canonical URL.
5. Add Open Graph tags.
6. Add Twitter Card tags.
7. Add JSON-LD schema.
8. Verify heading hierarchy.
9. Optimize images.
10. Validate internal links.

Complete one page before moving to the next.

---

# Metadata Requirements

Every page must include:
- Title
- Meta Description
- Canonical URL
- Robots
- Open Graph
- Twitter Cards

All metadata must be unique.

---

# Schema Requirements

Homepage:
- Organization
- LocalBusiness
- WebSite
- SearchAction

Service Pages:
- Service
- FAQPage
- BreadcrumbList

Blog:
- Article
- BreadcrumbList

Gallery:
- ImageObject

Testimonials:
- Review
- AggregateRating

---

# Image SEO

For every image:
- WebP/AVIF where possible
- Meaningful filename
- ALT text using target keyword
- Width & Height
- Lazy loading (except hero image)

---

# Internal Linking

Every service page links to:
- Home
- Contact
- Gallery
- Testimonials
- Related Services
- Related Blogs

Every blog links back to at least two service pages.

---

# Technical SEO

Implement:
- robots.txt
- sitemap.xml
- Canonical URLs
- 301 redirects (if needed)
- Structured Data
- Breadcrumbs

---

# Performance Targets

SEO: 95+
Performance: 90+
Accessibility: 95+
Best Practices: 95+

Optimize:
- Code splitting
- Lazy loading
- Font loading
- Hero image preload

---

# Validation

Before completing implementation:

- Lighthouse audit passes
- No duplicate metadata
- No broken links
- Valid JSON-LD
- Mobile responsive
- Sitemap accessible
- Robots.txt verified

---

# Output Format

After each completed page provide:

- Files modified
- Metadata added
- Schema implemented
- Internal links added
- Images optimized
- Validation status

Do not continue to the next page until the current page is complete.

---

# Final Deliverables

Provide:

1. SEO implementation summary
2. Modified file list
3. SEO score improvements
4. Lighthouse results
5. Remaining recommendations

Never invent keywords. Follow the provided SEO documentation exactly.
