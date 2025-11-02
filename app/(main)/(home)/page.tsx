import {
  CategoryQuickIcons,
  FeaturedBrands,
  FloatingChatbot,
  LandingHero,
  NewArrivals,
  TestimonialsSlider,
  TrendingCarousel,
} from "@/components/features/landing";

export default function HomePage() {
  return (
    <div className="relative space-y-12">
      <LandingHero />
      <TrendingCarousel />
      <CategoryQuickIcons />
      <NewArrivals />
      <FeaturedBrands />
      <TestimonialsSlider />
      <FloatingChatbot />
    </div>
  );
}

