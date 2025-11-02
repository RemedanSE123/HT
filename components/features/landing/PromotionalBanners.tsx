"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ShoppingBag,
  Percent,
  Flame,
  Sparkles,
  Gift,
  TrendingUp
} from "lucide-react";

interface PromoBanner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  discount?: number;
  badge?: string;
  buttonText: string;
  color: string;
}

const promotionalBanners: PromoBanner[] = [
  {
    id: 1,
    title: "Weekend Mega Sale",
    subtitle: "Up to 70% OFF",
    description: "Shop thousands of products at unbeatable prices this weekend only!",
    image: "/modern-electronics-store-display.jpg",
    link: "/products?category=weekend-sale",
    discount: 70,
    badge: "WEEKEND",
    buttonText: "Shop Now",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "New Collection Launch",
    subtitle: "Latest Trends",
    description: "Discover our newest collection of premium products. Fresh arrivals every week!",
    image: "/modern-luxury-kitchen-appliances.jpg",
    link: "/products?category=new-arrivals",
    badge: "NEW",
    buttonText: "Explore Collection",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Best Sellers Week",
    subtitle: "Top Rated Products",
    description: "See what's popular right now. These best-selling items are loved by thousands!",
    image: "/modern-electronics-store-display.jpg",
    link: "/products?category=bestsellers",
    badge: "POPULAR",
    buttonText: "View Best Sellers",
    color: "from-orange-500 to-red-500"
  }
];

export function PromotionalBanners() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promotionalBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid md:grid-cols-3 gap-6">
          {promotionalBanners.map((banner, index) => (
            <Link
              key={banner.id}
              href={banner.link}
              className={cn(
                "group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500",
                index === currentBanner && "ring-4 ring-orange-500 dark:ring-orange-600"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br", banner.color)} />
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px]" />
              </div>

              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="w-32 h-32 text-white/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  {banner.badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                      {banner.discount ? (
                        <Flame className="w-4 h-4" />
                      ) : (
                        <Sparkles className="w-4 h-4" />
                      )}
                      <span className="text-xs font-bold">{banner.badge}</span>
                    </div>
                  )}

                  {/* Discount */}
                  {banner.discount && (
                    <div className="mb-4 flex items-center gap-2">
                      <Percent className="w-6 h-6" />
                      <span className="text-3xl md:text-4xl font-extrabold">
                        {banner.discount}% OFF
                      </span>
                    </div>
                  )}

                  {/* Subtitle */}
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm md:text-base font-medium text-white/90">
                      {banner.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    {banner.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/80 line-clamp-2">
                    {banner.description}
                  </p>
                </div>

                {/* Button */}
                <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 w-fit group-hover:scale-105 transition-transform">
                  {banner.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {promotionalBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentBanner === index
                  ? "w-8 bg-orange-500 dark:bg-orange-600"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              )}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

