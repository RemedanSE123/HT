"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShoppingCart,
  Heart,
  Star,
  Eye,
  Clock,
  Flame,
  ArrowRight,
  TrendingDown
} from "lucide-react";

interface FlashDeal {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  timeLeft: string;
  stockLeft: number;
  link: string;
  category: string;
}

const flashDeals: FlashDeal[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Pro",
    brand: "SoundMax",
    image: "/wireless-noise-cancelling-headphones.jpg",
    price: 99,
    originalPrice: 199,
    rating: 4.8,
    reviews: 1240,
    timeLeft: "2h 15m",
    stockLeft: 12,
    link: "/products/1",
    category: "Audio"
  },
  {
    id: 2,
    name: "Smart Watch Series 9",
    brand: "TechTime",
    image: "/fitness-smartwatch.png",
    price: 149,
    originalPrice: 299,
    rating: 4.9,
    reviews: 892,
    timeLeft: "5h 30m",
    stockLeft: 8,
    link: "/products/2",
    category: "Wearables"
  },
  {
    id: 3,
    name: "4K Smart TV 55 inch",
    brand: "VisionPro",
    image: "/4k-smart-tv-55-inch.jpg",
    price: 799,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 1123,
    timeLeft: "12h 20m",
    stockLeft: 5,
    link: "/products/3",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Gaming Laptop RTX 4070",
    brand: "GameMaster",
    image: "/modern-gaming-console.png",
    price: 1799,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 654,
    timeLeft: "18h 45m",
    stockLeft: 3,
    link: "/products/4",
    category: "Computers"
  },
  {
    id: 5,
    name: "Professional Camera Kit",
    brand: "PhotoPro",
    image: "/professional-chef-knife-set.jpg",
    price: 899,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 445,
    timeLeft: "6h 10m",
    stockLeft: 7,
    link: "/products/5",
    category: "Photography"
  },
  {
    id: 6,
    name: "Noise Cancelling Earbuds",
    brand: "AudioMax",
    image: "/wireless-earbuds.png",
    price: 79,
    originalPrice: 149,
    rating: 4.6,
    reviews: 2341,
    timeLeft: "3h 25m",
    stockLeft: 15,
    link: "/products/6",
    category: "Audio"
  },
  {
    id: 7,
    name: "Fitness Tracker Pro",
    brand: "FitTech",
    image: "/adjustable-dumbbells.jpg",
    price: 129,
    originalPrice: 249,
    rating: 4.7,
    reviews: 892,
    timeLeft: "4h 50m",
    stockLeft: 10,
    link: "/products/7",
    category: "Wearables"
  },
  {
    id: 8,
    name: "Smart Home Hub",
    brand: "HomeTech",
    image: "/smart-coffee-maker.jpg",
    price: 199,
    originalPrice: 349,
    rating: 4.9,
    reviews: 567,
    timeLeft: "8h 15m",
    stockLeft: 9,
    link: "/products/8",
    category: "Smart Home"
  }
];

export function FlashDeals() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => String(value).padStart(2, "0");

  return (
    <section className="w-full bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 py-12 md:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Flash Deals
              </h2>
              <p className="text-white/90">
                Limited time offers - Don't miss out!
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
            <Clock className="w-5 h-5 text-white" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/90">Ends in:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-white">
                <span className="px-3 py-1 bg-white/30 rounded">{formatTime(timeLeft.hours)}</span>
                <span>:</span>
                <span className="px-3 py-1 bg-white/30 rounded">{formatTime(timeLeft.minutes)}</span>
                <span>:</span>
                <span className="px-3 py-1 bg-white/30 rounded">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {flashDeals.map((product) => {
            const discount = Math.round((1 - product.price / product.originalPrice) * 100);

            return (
              <Link
                key={product.id}
                href={product.link}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-white/30 dark:border-gray-700 hover:border-white dark:hover:border-orange-500 transition-all duration-300 overflow-hidden hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingCart className="w-16 h-16 text-gray-300 dark:text-gray-700" />
                    </div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Flash Deal Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <div className="px-2 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        FLASH
                      </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-2 right-2 z-10">
                      <div className="px-2 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg">
                        -{discount}%
                      </div>
                    </div>

                    {/* Stock Badge */}
                    <div className="absolute bottom-2 left-2 z-10">
                      <div className="px-2 py-1 rounded-full bg-red-500/90 text-white text-xs font-bold backdrop-blur-sm">
                        Only {product.stockLeft} left
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className={cn(
                      "absolute top-2 right-2 z-10 flex flex-col gap-2 transition-all duration-300",
                      hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    )}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle wishlist
                        }}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle quick view
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4 space-y-2">
                    {/* Brand */}
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {product.brand}
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 h-3",
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        ({product.reviews.toLocaleString()})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>

                    {/* Time Left */}
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{product.timeLeft} left</span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white mt-2"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle add to cart
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/products?filter=flash-deals">
            <Button
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-orange-600 dark:hover:text-orange-600"
            >
              View All Flash Deals
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

