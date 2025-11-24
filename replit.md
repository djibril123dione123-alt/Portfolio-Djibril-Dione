# Djibril DIONE - Professional Portfolio

## Overview

This is a professional portfolio website for Djibril DIONE, a Full-Stack Developer, Data Analyst, and Digital Entrepreneur. The portfolio showcases projects in administrative and real estate management systems, technical expertise, professional timeline, and contact capabilities. Built as a modern single-page application with a focus on elegant design, smooth animations, and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**UI Component Library**: Shadcn/ui (Radix UI primitives) with the "new-york" style variant, providing accessible, customizable components with consistent design patterns.

**Styling Approach**: Tailwind CSS with extensive customization including:
- Custom color system with semantic tokens (background, foreground, primary, accent, etc.)
- CSS variables for theme management supporting light/dark modes
- Custom animations (marquee, float, cursor effects)
- Glassmorphism and elevation effects through utility classes
- Typography system using Google Fonts (Space Grotesk, Outfit, Inter, Plus Jakarta Sans)

**State Management**: React Query (@tanstack/react-query) for server state and API interactions.

**Routing**: Wouter for lightweight client-side routing (single page with hash navigation to sections).

**Form Handling**: React Hook Form with Zod validation for type-safe form submissions.

**Animation Strategy**: GSAP (GreenSock Animation Platform) with ScrollTrigger plugin for scroll-based animations and page transitions.

**Component Structure**:
- Section-based components (HeroSection, ProjectsSection, TimelineSection, CVSection, ContactSection, MairieCaseStudy)
- Reusable UI components from Shadcn/ui library
- Custom components for tech stack marquee and navigation

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development vs Production**:
- Development: Vite middleware integration for HMR (Hot Module Replacement)
- Production: Static file serving from pre-built assets

**API Design**: RESTful API endpoints with JSON responses. Currently implements:
- `/api/contact` (POST) - Contact form submission with Zod validation

**Session Management**: Infrastructure ready with connect-pg-simple for PostgreSQL session storage (currently using in-memory storage).

**Error Handling**: Centralized error handling with custom logging and request/response tracking.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL via @neondatabase/serverless driver.

**Schema Definition**: Type-safe schema definitions in `shared/schema.ts` using Zod for runtime validation.

**Migration Strategy**: Drizzle Kit for schema migrations stored in `./migrations` directory.

**Current Data Approach**: Portfolio content (projects, experiences, skills) is statically defined in `shared/schema.ts` as the `portfolioData` object. This allows for easy content updates without database queries while maintaining type safety.

**Future Database Usage**: Infrastructure is in place for dynamic content storage if needed (user schema defined, Drizzle configured for PostgreSQL).

### Design System & Patterns

**Design Philosophy**: Reference-based approach drawing from Linear's minimalism, GitHub's clarity, and Stripe's sophistication (see `design_guidelines.md`).

**Typography Hierarchy**:
- Display font for headings and hero text
- Body font for content and technical labels
- Responsive sizing from mobile to desktop

**Layout System**:
- Container-based layouts with max-width constraints
- Responsive grid patterns (2-column hero, single-column projects, horizontal marquee)
- Consistent spacing primitives using Tailwind's spacing scale

**Color Strategy**:
- Navy/dark backgrounds for professional tech aesthetic
- Accent colors (blue/gold) for CTAs and highlights
- Semantic color tokens for consistency

### Build & Deployment

**Build Process**:
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Assets: Static assets served from `attached_assets` directory

**Development Workflow**:
- Separate dev server (`server/index-dev.ts`) with Vite middleware
- Hot module replacement for instant feedback
- TypeScript checking without emission

**Production Setup**:
- Single Node.js process serving both API and static files
- Pre-built client assets
- Environment-based configuration

## External Dependencies

### Third-Party Services

**Database Provider**: Neon (PostgreSQL serverless) via `@neondatabase/serverless` package.

**Font Services**: Google Fonts CDN for typography (Space Grotesk, Outfit, Inter, Plus Jakarta Sans).

**Animation Libraries**: 
- GSAP (GreenSock) loaded via CDN for advanced animations
- Lucide React for icon components

### UI Framework Dependencies

**Radix UI Primitives**: Complete set of accessible, unstyled components:
- Form controls (checkbox, radio, select, slider, switch)
- Overlays (dialog, popover, tooltip, dropdown, hover card)
- Navigation (accordion, tabs, menubar, navigation menu)
- Layout (separator, scroll area, collapsible)

**Embla Carousel**: Carousel/slider functionality with React integration.

**CMDK**: Command palette component for keyboard-driven interfaces.

### Development Tools

**Vite Plugins**:
- @vitejs/plugin-react for React Fast Refresh
- @replit/vite-plugin-runtime-error-modal for error overlays
- @replit/vite-plugin-cartographer and dev-banner (Replit-specific)

**Build Tools**:
- esbuild for server bundling
- PostCSS with Tailwind and Autoprefixer
- TypeScript compiler for type checking

### Form & Validation

**React Hook Form**: Form state management with performance optimization.

**Zod**: Runtime type validation and schema definition with TypeScript integration.

**@hookform/resolvers**: Bridge between React Hook Form and Zod validation.

### Utility Libraries

**date-fns**: Date manipulation and formatting.

**class-variance-authority**: Type-safe variant styling for components.

**clsx** & **tailwind-merge**: Conditional class name construction.

**nanoid**: Unique ID generation for cache busting.