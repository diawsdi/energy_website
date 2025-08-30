# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js dev server on localhost:3000
- **Build**: `npm run build` - Creates production build
- **Start production**: `npm start` - Starts production server
- **Lint**: `npm run lint` - Runs Next.js ESLint

## Project Architecture

This is an **InvoltAI/AuroraAI marketing website** built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases an AI-powered energy access planning platform.

### Tech Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for animations
- **React Icons** for iconography

### Design System
The site uses a carefully designed color palette defined in `tailwind.config.js`:
- **Primary**: Electric Blue (`#0052CC`), Solar Yellow (`#FFC107`)
- **Accent**: Vibrant Green (`#4CAF50`), Sky Blue (`#00BCD4`) 
- **Neutral**: Pure White (`#FFFFFF`), Slate Gray (`#37474F`)
- **Typography**: Inter font family for clean, modern appearance

### Component Structure
The homepage (`app/page.tsx`) is built from modular components in `app/components/`:
- `Navbar` - Site navigation
- `Hero` - Main landing section with animated elements
- `Transformation`, `WhyUs`, `DataDriven` - Feature sections
- `Solutions`, `Technology`, `HowItWorks` - Product sections
- `UseCases`, `Contact`, `Footer` - Supporting sections

### Key Features
- **Responsive design** with custom breakpoints
- **Advanced animations** using Framer Motion (3D gradient blobs, transitions)
- **Custom Tailwind utilities** for consistent spacing and typography
- **SEO optimized** with proper metadata in layout.tsx

### Business Context
The platform focuses on AI-driven energy access planning using:
- Remote sensing and satellite imagery
- Building-level electrification predictions
- Google Cloud Platform integration (Vertex AI, BigQuery, Earth Engine)
- Geospatial intelligence for sustainable development

### File Organization
- `app/` - Next.js app directory structure
- `public/images/` - Static assets organized by feature
- Documentation files: `stack.md`, `ui_theme.md`, `company.md` contain technical and design specifications