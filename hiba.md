<!-- a32d18aa-39b2-4518-a366-185a33f7325b 707b0299-c054-4968-9aa5-b06f6af64a1d -->
# Hiba Trading Futuristic E-Commerce Build Plan

## Phase 1: Project Setup & Dependencies

### 1.1 Initialize Next.js Project

- Create Next.js 14+ project with TypeScript and App Router
- Configure `next.config.js` for images and optimizations
- Set up `tsconfig.json` with strict mode

### 1.2 Install Core Dependencies

- **Styling**: `tailwindcss`, `postcss`, `autoprefixer`
- **UI Components**: Shadcn UI (`shadcn-ui` via CLI)
- **Animations**: `framer-motion`
- **Icons**: `lucide-react`
- **Database ORM**: `prisma`, `@prisma/client` (schema only)
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

### 1.3 Configure Tailwind CSS

- Set up `tailwind.config.ts` with custom futuristic theme
- Add glassmorphism utilities, gradient presets
- Configure dark mode (class-based)
- Add custom animation keyframes

### 1.4 Set Up Shadcn UI

- Initialize Shadcn via `npx shadcn-ui@latest init`
- Install base components: Button, Card, Input, Dialog, Sheet, Select, Badge
- Customize theme colors for futuristic aesthetic

### 1.5 Prisma Setup

- Create `prisma/schema.prisma` with PostgreSQL provider
- Design complete database schema (no migrations yet)

### 1.6 Project Structure

```
/app
  /(main)
    /(home)
      page.tsx           # Landing page
    /categories
      page.tsx
    /search
      page.tsx
    /wishlist
      page.tsx
    /products
      /[id]
        page.tsx         # Product detail
      page.tsx           # Product listing
    /cart
      page.tsx
    /account
      /dashboard
        page.tsx
      /orders
        page.tsx
      /profile
        page.tsx
    /admin
      /dashboard
        page.tsx
  /api                    # Placeholder routes
/components
  /ui                    # Shadcn components
  /layout
    BottomNav.tsx
    Header.tsx
  /features
    /landing
    /products
    /cart
    /account
    /admin
/lib
  /utils
    cn.ts
  /constants
/prisma
  schema.prisma
```

## Phase 2: Core Layout & Navigation

### 2.1 Root Layout

- `app/layout.tsx`: Root layout with metadata, theme provider, font loading
- Dark mode provider using next-themes

### 2.2 Bottom Navigation Component

- `components/layout/BottomNav.tsx`
- 5 tabs: Home, Categories, Search, Wishlist, Account
- Smooth slide animations, active state indicators
- Mobile-first responsive (hidden on desktop with alternative nav)

### 2.3 Header Component

- `components/layout/Header.tsx`
- Logo, search bar, cart icon, theme toggle
- Glassmorphism effect, sticky positioning

## Phase 3: Landing Page

### 3.1 Hero Section

- Animated background with cyber-patterns
- Smart search bar with voice input icon + AI suggestions dropdown
- Personal shopper assistant button (floating)
- CTA buttons with hover effects

### 3.2 Live Trending Products Carousel

- Horizontal scroll carousel with Framer Motion
- Product cards with hover 3D effect
- Auto-scroll with pause on hover

### 3.3 Category Quick Icons

- Grid of category icons with icons from Lucide
- Hover glassmorphism effect
- Quick navigation to category pages

### 3.4 New Arrivals Section

- Grid layout with staggered animations
- Product preview cards

### 3.5 Featured Brands

- Logo carousel with smooth transitions

### 3.6 Testimonials Slider

- Auto-rotating testimonials with fade transitions
- Star ratings display

### 3.7 Floating Chatbot

- Fixed bottom-right AI assistant button
- Expandable chat interface (UI only)
- Smooth entrance animation

## Phase 4: Categories Page

### 4.1 Category Grid

- Apple-style card grid
- Hover/press animations (scale + shadow)
- Each card shows: icon, name, item count, gradient overlay

### 4.2 Category Detail View

- Subcategories grid
- Quick-shop products preview
- Smart filter panel (price range, brands, ratings)

## Phase 5: Smart Search Page

### 5.1 Search Interface

- Large search input with voice icon
- Image upload button (UI placeholder)
- Search history dropdown

### 5.2 AI Suggestions

- "You may mean..." section
- Predictive results as user types
- Trending keywords display

### 5.3 Search Results

- Product grid with filters sidebar
- Filter options: price, brand, rating, delivery time, discount
- Sort dropdown
- Infinite scroll placeholder

## Phase 6: Product Pages

### 6.1 Product Listing Page

- Grid layout with responsive columns
- Product cards with:
  - Hover 3D image flip effect
  - Badge system: "Fast Delivery", "Bestseller", "Eco", "AI Recommended"
  - Quick-view modal trigger
- Smart filter & sort bar
- Infinite scroll (UI only)

### 6.2 Product Detail Page

- Hero image with 360° view placeholder (multiple angles)
- AR Try-On button (styled placeholder)
- Product info section:
  - Title, price, ratings
  - Variant selector (size, color)
  - Quantity selector
- AI Summarized Reviews section
- Similar items carousel
- Accessories bundle suggestion
- Delivery time prediction UI
- Size guide/fit assistant button
- Add to cart + Buy now buttons

## Phase 7: Cart Page

### 7.1 Cart Items List

- Cart item cards with image, title, price, quantity controls
- Remove item button
- Subtotal, shipping, total display

### 7.2 Smart Features

- "You forgot these!" upsell section
- Smart discount suggestor (promotional banner)
- Shipping calculator (interactive form)

### 7.3 Checkout UI

- Multi-step checkout flow (UI only, no submission):
  - Step 1: Shipping address
  - Step 2: Payment method (placeholder)
  - Step 3: Review order
- Progress indicator
- Smooth step transitions

## Phase 8: Wishlist Page

### 8.1 Wishlist Items Grid

- Product cards similar to listing page
- Remove from wishlist action

### 8.2 Organization Features

- Folder system UI (create folders, move items)
- Share wishlist link button
- "Price change alerts" toggle switches

## Phase 9: Account Dashboard

### 9.1 Dashboard Overview

- Welcome section with user info placeholder
- Quick stats cards
- Recent orders preview

### 9.2 Orders Page

- Order history list
- Order status badges
- View order details button

### 9.3 Track Order UI

- Map placeholder (styled as futuristic map)
- Timeline component showing order stages
- Estimated delivery countdown

### 9.4 Profile Page

- Editable profile form (UI only)
- Avatar upload placeholder
- Preferences settings

### 9.5 Saved Addresses

- Address cards grid
- Add/edit address modals (UI only)

### 9.6 Notifications Center

- Notification list with categories
- Mark as read functionality (UI only)

### 9.7 AI Order Assistant

- Chat interface for:
  - Reorder button
  - Track order
  - Product advice

## Phase 10: Admin Dashboard

### 10.1 Dashboard Overview

- Analytics dashboard with:
  - Sales chart (futuristic line chart)
  - Top products list
  - Inventory alerts
  - User behavior insights
- Hologram-like chart designs using gradients and glassmorphism

### 10.2 Product Management

- Product list table with search/filter
- Create/Edit product form:
  - Basic info, images upload, variants, stock
- Stock control indicators

### 10.3 Category Manager

- Category tree view
- Add/edit/delete category (UI only)

### 10.4 Orders Manager

- Orders table with status filters
- Order detail modal
- Status update buttons
- Tracking management

## Phase 11: Prisma Schema Design

### 11.1 Database Models

Create comprehensive schema with:

- User (basic fields, no auth fields yet)
- Product (name, description, price, images, etc.)
- Category & Subcategory (tree structure)
- ProductImage (multiple images per product)
- ProductVariant (size, color, SKU, stock)
- Order & OrderItem
- Wishlist & WishlistFolder
- Review
- AnalyticsEvent (logging structure)

### 11.2 Relationships

- Proper foreign keys and indexes
- Cascade delete rules
- Enums for status fields

## Phase 12: Global Features

### 12.1 Theme System

- Light/dark mode toggle
- Smooth theme transitions
- CSS variables for colors

### 12.2 Animation System

- Global animation variants (fade, slide, scale)
- Page transition effects
- Loading states with skeletons

### 12.3 Responsive Design

- Mobile-first breakpoints
- Tablet and desktop adaptations
- Touch-friendly interactions

### 12.4 Accessibility

- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support

## Implementation Notes

- Use meaningful placeholder text (no Lorem Ipsum)
- Comment all complex logic
- Create reusable component library
- Follow Next.js 14+ App Router conventions
- Optimize images with Next.js Image component
- Use TypeScript strict mode
- No actual API calls yet - all data will be mock/static
- Focus on pixel-perfect UI execution
- Ensure smooth 60fps animations

### To-dos

- [ ] Initialize Next.js project with TypeScript, install all dependencies (Tailwind, Shadcn, Framer Motion, Prisma), and configure project structure
- [ ] Configure Tailwind with futuristic theme, glassmorphism utilities, dark mode, and custom animations
- [ ] Initialize Shadcn UI and install base components (Button, Card, Input, Dialog, Sheet, Select, Badge)
- [ ] Build root layout, bottom navigation component, and header with dark mode support
- [ ] Create landing page with hero, trending carousel, category icons, new arrivals, brands, testimonials, and floating chatbot
- [ ] Build categories page with grid layout and category detail view with subcategories and filters
- [ ] Create smart search page with AI suggestions, voice/image inputs, predictive results, and filters
- [ ] Build product listing page with grid, hover effects, badges, quick-view modal, and filters
- [ ] Create product detail page with 360° view, AR button, reviews, similar items, and all interactive elements
- [ ] Build cart page with items list, smart discount suggestor, shipping calculator, and multi-step checkout UI
- [ ] Create wishlist page with folder system, share functionality, and price alerts toggles
- [ ] Build account dashboard with profile, orders, tracking UI with map, addresses, notifications, and AI assistant
- [ ] Create admin dashboard with analytics charts, product management, category manager, and orders manager
- [ ] Design complete Prisma schema with all models, relationships, and enums for future database implementation