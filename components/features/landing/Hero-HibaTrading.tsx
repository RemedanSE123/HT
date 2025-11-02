"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShoppingBag,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
  Truck,
  CheckCircle2,
  Star,
  Heart,
  Eye,
  Package,
  Users,
  Award,
  Globe,
  Sparkles
} from "lucide-react";

interface ProductImage {
  id: number;
  image: string;
  title: string;
  link: string;
  badge?: string;
  gradient: string;
}

const productImages: ProductImage[] = [
  {
    id: 1,
    image: "/modern-electronics-store-display.jpg",
    title: "Electronics Collection",
    link: "/products?category=electronics",
    badge: "Hot",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    image: "/diverse-fashion-collection.png",
    title: "Fashion & Apparel",
    link: "/products?category=fashion",
    badge: "New",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 3,
    image: "/modern-luxury-kitchen-appliances.jpg",
    title: "Home & Living",
    link: "/products?category=home",
    badge: "Sale",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    image: "/assorted-sports-gear.png",
    title: "Sports & Fitness",
    link: "/products?category=sports",
    badge: "Trending",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

const features = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick delivery",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% safe",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Package,
    title: "Wholesale Prices",
    description: "Best pricing",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: CheckCircle2,
    title: "Quality Guaranteed",
    description: "Premium only",
    color: "text-orange-600 dark:text-orange-400"
  }
];

const stats = [
  { value: "50K+", label: "Products", icon: ShoppingBag, color: "bg-blue-100 dark:bg-blue-900/30" },
  { value: "2M+", label: "Customers", icon: Users, color: "bg-purple-100 dark:bg-purple-900/30" },
  { value: "150+", label: "Countries", icon: Globe, color: "bg-green-100 dark:bg-green-900/30" },
  { value: "15+", label: "Years", icon: Award, color: "bg-orange-100 dark:bg-orange-900/30" }
];

export function LandingHero() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20 border-b border-gray-100 dark:border-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Branding */}
          <div className="space-y-8 order-1 lg:order-1">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-200 dark:border-orange-800">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                Premium Wholesale Platform
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">
                  Hiba Trading
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  E-Commerce
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Your trusted global wholesale partner. Premium products, competitive prices, 
                and fast shipping to over 150 countries worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "text-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all",
                      stat.color
                    )}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all"
                  >
                    <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", feature.color)} />
                    <div>
                      <div className="font-semibold text-sm text-gray-900 dark:text-white">
                        {feature.title}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 dark:border-white bg-transparent dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
              >
                View Catalog
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - 4 Image Grid */}
          <div className="order-2 lg:order-2">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {productImages.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={cn(
                    "group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700",
                    hoveredImage === item.id ? "scale-105 z-10 border-orange-500 dark:border-orange-500" : "hover:scale-102"
                  )}
                  onMouseEnter={() => setHoveredImage(item.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  {/* Image */}
                  <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      item.gradient
                    )} />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="px-3 py-1 rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold shadow-lg">
                          {item.badge}
                        </div>
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <Button
                          size="sm"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs mt-2"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = item.link;
                          }}
                        >
                          Shop Now
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
