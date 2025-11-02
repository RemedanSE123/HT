"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShoppingCart,
  Heart,
  Star,
  Eye,
  Share2,
  Clock,
  Flame,
  Tag,
  TrendingUp,
  ArrowRight
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  inStock: boolean;
  stockCount?: number;
  link: string;
  category: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showViewAll?: boolean;
  viewAllLink?: string;
  className?: string;
}

export function ProductGrid({
  title,
  subtitle,
  products,
  showViewAll = true,
  viewAllLink = "/products",
  className
}: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [wishlisted, setWishlisted] = useState<Set<number>>(new Set());

  const toggleWishlist = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section className={cn("w-full py-12 md:py-16", className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {showViewAll && (
            <Link
              href={viewAllLink}
              className="hidden sm:flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Product Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            const discount = product.originalPrice
              ? Math.round((1 - product.price / product.originalPrice) * 100)
              : 0;
            const isWishlisted = wishlisted.has(product.id);

            return (
              <Link
                key={product.id}
                href={product.link}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden hover:shadow-xl dark:hover:shadow-orange-500/20">
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

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2 z-10">
                        <div className={cn(
                          "px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg",
                          product.badgeColor || "bg-orange-500 dark:bg-orange-600"
                        )}>
                          {product.badge}
                        </div>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {discount > 0 && (
                      <div className="absolute top-2 right-2 z-10">
                        <div className="px-2 py-1 rounded-full bg-red-500 dark:bg-red-600 text-white text-xs font-bold shadow-lg">
                          -{discount}%
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className={cn(
                      "absolute top-2 right-2 z-10 flex flex-col gap-2 transition-all duration-300",
                      hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    )}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-700"
                        onClick={(e) => toggleWishlist(product.id, e)}
                      >
                        <Heart
                          className={cn(
                            "w-4 h-4",
                            isWishlisted
                              ? "fill-red-500 text-red-500"
                              : "text-gray-700 dark:text-gray-300"
                          )}
                        />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-700"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle quick view
                        }}
                      >
                        <Eye className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-700"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle share
                        }}
                      >
                        <Share2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </Button>
                    </div>

                    {/* Stock Indicator */}
                    {product.inStock && product.stockCount !== undefined && product.stockCount < 10 && (
                      <div className="absolute bottom-2 left-2 z-10">
                        <div className="px-2 py-1 rounded-full bg-red-500/90 dark:bg-red-600/90 text-white text-xs font-bold backdrop-blur-sm">
                          Only {product.stockCount} left
                        </div>
                      </div>
                    )}
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
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white mt-2"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle add to cart
                      }}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        {showViewAll && (
          <div className="mt-8 flex justify-center sm:hidden">
            <Link href={viewAllLink}>
              <Button
                variant="outline"
                className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

