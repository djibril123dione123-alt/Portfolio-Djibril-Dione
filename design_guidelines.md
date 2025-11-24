# Design Guidelines: Djibril Dione Professional Portfolio

## Design Approach
**Reference-Based:** Drawing inspiration from Linear's minimalist elegance, GitHub's developer-focused clarity, and Stripe's sophisticated presentation. This portfolio showcases technical excellence through clean, purposeful design that emphasizes project work and professional credibility.

## Core Design Principles
1. **Technical Sophistication:** Clean, modern aesthetic that reflects coding expertise
2. **Project-First:** Visual hierarchy prioritizes showcasing work over decoration
3. **Professional Credibility:** Balance creativity with corporate polish
4. **Information Clarity:** Dense technical content presented with breathing room

## Typography System
**Display Font:** Space Grotesk / Outfit (headings, hero text, project titles)
- Hero: 4xl to 7xl (responsive)
- Section headings: 3xl to 4xl
- Project titles: 2xl

**Body Font:** Inter / Plus Jakarta Sans
- Body text: base to lg
- Captions: sm to xs
- Technical tags: xs

**Hierarchy:**
- Primary headings: Bold (700-800 weight)
- Section titles: Semibold (600)
- Body: Regular (400) with medium (500) for emphasis
- Technical labels: Medium (500)

## Layout System
**Spacing Primitives:** Tailwind units 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Inline spacing: space-x-4 to space-x-6

**Container Strategy:**
- Full-width sections: w-full
- Content containers: max-w-7xl mx-auto
- Text content: max-w-4xl
- Project cards: max-w-6xl

**Grid Patterns:**
- Hero: 2-column (text + image) on desktop, stacked on mobile
- Projects: Single column for detailed showcases
- Skills/Tech stack: Horizontal marquee scroll
- Timeline: Vertical with decorative line

## Component Library

### Navigation
- Sticky glass-effect navbar (backdrop-blur)
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu (optional collapse to icon links)
- Height: Fixed at ~16-20 units

### Hero Section
**Layout:** Two-column split (55% text, 45% image on desktop)
- Badge component: "Open to Work" with animated pulse dot
- Typing animation: Rotating roles (Développeur → Data Analyst → Entrepreneur)
- CTA buttons: Primary (solid) + Secondary (outlined)
- Social proof: Small avatars grid below CTAs
- Professional photo: Rounded frame with subtle border, grayscale with hover color reveal

### Project Showcases
**MacBook Frame Design:**
- CSS-based laptop mockup containing project screenshots
- Screen aspect ratio: 16:10
- Base + screen separation with realistic details (notch, bezels)
- Hover: Subtle scale (1.02) and glow effect

**Content Structure per Project:**
- Project title (2xl, bold)
- Brief description (2-3 sentences)
- Key metrics/impact (if available)
- Technology tags (pill-shaped badges)
- Action links: "View Details" + "GitHub" (if applicable)

### Mairie Case Study Section
**Dedicated Deep Dive:**
- Before/After presentation
- Screenshot gallery (3-4 images in grid)
- Technical implementation details in expandable cards
- Impact metrics with icon + number display
- Network/maintenance achievements

### Tech Stack Marquee
- Infinite horizontal scroll animation
- Technology names with separator dots
- Minimal, text-only approach (no heavy logos)
- Speed: Slow, readable pace (~30s full cycle)

### Timeline
**Visual Style:**
- Vertical line with dots for each entry
- Glassmorphic cards for content
- Left-aligned content with right-aligned dates
- Sections: Education → Experience → Certifications

### CV Section
**Two-Column Display:**
- Left: Key highlights (education, contact, skills)
- Right: Experience details
- Download button prominent
- Print-friendly alternative styles

### Contact Section
**Layout:**
- Centered content with gradient background treatment
- Email + LinkedIn prominent
- Availability status badge
- Call-to-action: "Start a Conversation"

## Visual Effects
**Glassmorphism:**
- Navigation: Strong blur (blur-12)
- Cards: Subtle blur (blur-8) with minimal transparency
- Border: 1px rgba white with low opacity

**Animations (Minimal & Purposeful):**
- Hero text: Fade-up on load
- Typing effect: Smooth character-by-character
- Scroll: Fade-in for sections (GSAP ScrollTrigger)
- Cards: Subtle lift on hover (translateY -4px)
- NO parallax, NO excessive motion

**3D Tilt (Hero Photo Only):**
- Gentle rotation on mouse move
- Constrained to ±5 degrees
- Smooth easing

## Responsive Behavior
**Breakpoints:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768-1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adjustments:**
- Hero: Stack image above text
- Projects: Full-width cards
- Timeline: Simplified left border design
- Typography: Scale down 1-2 sizes

## Images
**Primary Hero Image:** Professional headshot of Djibril Dione
- Position: Right column of hero section
- Treatment: Grayscale default, color on hover
- Frame: Rounded corners with subtle border/glow
- Dimensions: Square or portrait orientation, min 600x600px

**Project Screenshots:**
- Mairie system: 4 images (menu, form, search, results)
- Confort Immo: Dashboard/interface mockups
- Display: Inside MacBook frames for polish
- Quality: High-res, clear UI elements visible

**Technical Diagrams (if needed):**
- Architecture diagrams for complex projects
- Simple, clean line illustrations
- Minimal color usage

## Accessibility
- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Consistent focus states (ring-2 ring-offset-2)
- Text contrast ratios meet WCAG AA standards

## Special Considerations
**Professional Tone:** Balance creative elements with corporate polish - this is a job-seeking portfolio
**Technical Depth:** Include enough detail to demonstrate expertise without overwhelming
**Bilingual Ready:** French primary, structure allows for easy EN toggle later
**Performance:** Optimize images, lazy-load below fold, minimal animation overhead