// Comprehensive Landing Page - Hiba Trading E-Commerce Wholesale
import {
  CategoryQuickIcons,
  FeaturedBrands,

  LandingHero,
  NewArrivals,
  TestimonialsSlider,
  TrendingCarousel,
  FlashDeals,
  BestSellers,
  FeaturedProducts,
  PromotionalBanners,

} from "@/components/features/landing";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Full Width */}
      <LandingHero />
      
      {/* Main Content - Full Width */}
      <main className="relative">
        {/* Flash Deals Section - Full Width with Gradient Background */}
        <FlashDeals />

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <CategoryQuickIcons />
          </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Best Sellers */}
        <BestSellers />

        {/* Trending Products Section */}
        <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
          <div className="absolute inset-0" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <TrendingCarousel />
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="relative py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="absolute inset-0" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <NewArrivals />
          </div>
        </section>

        {/* Promotional Banners */}
        <PromotionalBanners />

       

        {/* Featured Brands */}
        <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <FeaturedBrands />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
          <div className="absolute inset-0" />
          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <TestimonialsSlider />
          </div>
        </section>
      </main>

  
    </div>
  );
}
