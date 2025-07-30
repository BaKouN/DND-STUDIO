# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 React application for DnD Studio, a French creative agency. The app is a landing page for the agency's services, built with modern web technologies and French content.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint checks

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: v19 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Library**: Radix UI primitives via shadcn/ui
- **Animations**: Framer Motion for complex animations
- **Typography**: Geist Sans and Geist Mono fonts
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Theme Management**: next-themes for dark mode support

## Project Structure

- `/app/` - Next.js App Router pages and layouts
- `/components/ui/` - shadcn/ui component library
- `/components/` - Custom React components  
- `/lib/` - Utility functions and configurations
- `/hooks/` - Custom React hooks
- `/public/` - Static assets
- `/styles/` - Global CSS files

## Component Architecture

The project uses shadcn/ui as the primary component library, which provides:
- Pre-built accessible components based on Radix UI
- Consistent styling with CSS variables for theming
- The `cn()` utility function for conditional class merging (clsx + tailwind-merge)

All UI components are located in `/components/ui/` and follow shadcn/ui conventions.

## Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Used for theming and color management
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Mode**: Supported via next-themes with class-based strategy

## Configuration Notes

- **Next.js Config**: ESLint and TypeScript errors are ignored during builds (development setting)
- **TypeScript**: Strict mode enabled with path mapping (`@/*` -> `./*`)
- **Images**: Unoptimized (likely for static deployment)
- **Tailwind**: Configured with shadcn/ui color variables and animations

## Content Language

All user-facing content is in French. When making content changes, maintain the existing French language and tone.