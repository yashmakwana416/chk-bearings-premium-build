---
description: CHK Bearings Design & Development Guidelines
---

# CHK Bearings Website Design Guidelines

This workflow defines the universal design standards and guidelines for the CHK Bearings website.

## 🎨 Universal Design Standards

### Background Color
- **All sections must use**: `bg-gray-50`
- Maintains consistency across the entire website
- Creates a clean, professional appearance

### Typography
- **Universal Font**: TestDomaineDisplay-Regular (from `/public/TestDomaineDisplay-Regular-BF66174a224cb3d.otf`)
- Apply to all text elements across the site
- Font declaration in `src/index.css`:
```css
@font-face {
  font-family: 'TestDomaineDisplay';
  src: url('/TestDomaineDisplay-Regular-BF66174a224cb3d.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### Layout Philosophy
- **Curved**: Use rounded corners (rounded-lg, rounded-xl, rounded-2xl, rounded-3xl)
- **Minimalistic**: Clean, uncluttered designs with ample white space
- **Clean**: Easy to read and navigate with clear visual hierarchy

### Brand Identity
- **Primary Color (Blue)**: Use for all icons and key interactive elements
- Apply `text-primary` or `bg-primary` classes to icons
- Maintain consistency in icon styling across all sections

## 📐 Spacing & Positioning

### Section Spacing
- **Vertical padding**: `py-20` (80px) for all sections
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid gaps**: `gap-8` for card grids, `gap-12` for major layout sections

### Viewport Guidelines
- **100% Zoom**: Each section should occupy approximately one full viewport height
- **On Scroll**: Next section smoothly appears
- **Spacing**: Use `min-h-screen` or `min-h-[700px]` for hero sections
- **Other sections**: Auto-height with consistent `py-20` padding

## 🏢 Company Information (SEO)

### Brand Details
- **Company Name**: CHK Bearings
- **Domain**: chkbearings.com
- **Tagline**: Premium quality bearings for industrial excellence

### SEO Implementation Checklist

#### Every Page Must Include:

1. **Meta Tags** (in HTML head):
```html
<title>Page Title - CHK Bearings | chkbearings.com</title>
<meta name="description" content="Detailed description about the page content" />
<meta name="keywords" content="bearings, CHK Bearings, industrial bearings, ball bearings, roller bearings" />
<meta name="author" content="CHK Bearings" />

<!-- Open Graph for social media -->
<meta property="og:title" content="Page Title - CHK Bearings" />
<meta property="og:description" content="Detailed description" />
<meta property="og:url" content="https://chkbearings.com/page-url" />
<meta property="og:site_name" content="CHK Bearings" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title - CHK Bearings" />
<meta name="twitter:description" content="Detailed description" />
```

2. **Heading Structure**:
   - Single `<h1>` per page (main page title)
   - Proper hierarchy: h1 → h2 → h3
   - Descriptive, keyword-rich headings

3. **Semantic HTML**:
   - Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
   - Proper `alt` attributes on all images
   - Descriptive link text (avoid "click here")

4. **Unique IDs**:
   - All interactive elements need unique, descriptive IDs
   - Format: `section-action-element` (e.g., `hero-explore-button`)

## 📱 Mobile Responsive Design

### Breakpoint Strategy
```tsx
// Tailwind breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large desktops
```

### Responsive Guidelines

1. **Typography Scaling**:
```tsx
// Headings
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl">
<h3 className="text-xl md:text-2xl lg:text-3xl">

// Body text
<p className="text-base md:text-lg">
```

2. **Grid Layouts**:
```tsx
// 3-column layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// 2-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
```

3. **Padding/Spacing**:
```tsx
// Section padding
<section className="py-12 md:py-16 lg:py-20">

// Container padding
<div className="px-4 sm:px-6 lg:px-8">
```

4. **Images**:
```tsx
// Responsive images
<img className="w-full h-auto object-cover" alt="Descriptive text" />

// Hero images
<div className="h-48 sm:h-64 md:h-80 lg:h-96">
  <img className="w-full h-full object-cover" />
</div>
```

5. **Navigation**:
   - Hamburger menu for mobile (< md breakpoint)
   - Full horizontal nav for desktop (≥ md breakpoint)
   - Touch-friendly tap targets (min 44x44px)

## ✅ Implementation Checklist

When creating or updating any page:

- [ ] Apply `bg-gray-50` to all sections
- [ ] Use TestDomaineDisplay font throughout
- [ ] Implement curved, rounded elements (rounded-lg, rounded-xl, etc.)
- [ ] Use brand blue (`text-primary`) for all icons
- [ ] Apply consistent spacing: `py-20` for sections, `gap-8` for grids
- [ ] Ensure one section per viewport at 100% zoom
- [ ] Add complete SEO meta tags
- [ ] Include proper heading hierarchy (single h1, then h2, h3)
- [ ] Use semantic HTML5 elements
- [ ] Test mobile responsiveness at all breakpoints
- [ ] Add unique IDs to interactive elements
- [ ] Include descriptive alt text for images
- [ ] Optimize for performance (lazy loading, proper image sizes)
- [ ] Ensure accessibility (ARIA labels where needed, keyboard navigation)

## 🎯 Section-by-Section Guidelines

### Hero Section
- Background: Black (`bg-black`) with animated elements
- Height: `min-h-[700px]` 
- Typography: Large, bold headings with gradient text
- CTA buttons with rounded-full and shadow effects

### Feature/Advantage Sections
- Background: `bg-gray-50`
- Cards: White (`bg-white`) with subtle shadows
- Icons: Blue (`text-primary`) in rounded containers (`bg-primary/10`)
- Grid: 3 columns on desktop, 1 on mobile

### Product Sections
- Background: `bg-gray-50`
- Cards: Hoverable with transitions
- Images: Gradient overlays for text readability
- Rounded corners on all cards

### Footer
- Background: Dark (`bg-gray-900`)
- Text: Light colors for contrast
- Links: Organized in clear columns
- Company info and social links

## 🚀 Performance Optimization

- Lazy load images below the fold
- Use WebP format for images when possible
- Minimize CSS/JS bundle sizes
- Implement proper caching headers
- Optimize font loading with `font-display: swap`

## 📝 Content Guidelines

- Clear, concise copy focused on benefits
- Technical accuracy for product specifications
- Professional tone matching industrial B2B audience
- Include keywords naturally: bearings, CHK, industrial, precision, quality
- Detailed product descriptions for SEO

---

**Last Updated**: 2025-12-05
**Maintained By**: Development Team
**Company**: CHK Bearings (chkbearings.com)
