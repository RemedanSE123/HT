"use client";

import { ProductGrid } from "./ProductGrid";

const bestSellers = [
  {
    id: 1,
    name: "Premium Wireless Headphones Pro",
    brand: "SoundMax",
    image: "/wireless-noise-cancelling-headphones.jpg",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1240,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 45,
    link: "/products/1",
    category: "Audio"
  },
  {
    id: 2,
    name: "4K Ultra HD Smart TV 55 inch",
    brand: "VisionTech",
    image: "/4k-smart-tv-55-inch.jpg",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 892,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 23,
    link: "/products/2",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Pro Gaming Laptop RTX 4070",
    brand: "GameMaster",
    image: "/modern-gaming-console.png",
    price: 1999,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 654,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 12,
    link: "/products/3",
    category: "Computers"
  },
  {
    id: 4,
    name: "Smart Fitness Watch Series 9",
    brand: "FitPro",
    image: "/fitness-smartwatch.png",
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 1123,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 67,
    link: "/products/4",
    category: "Wearables"
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
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 28,
    link: "/products/5",
    category: "Photography"
  },
  {
    id: 6,
    name: "Noise Cancelling Earbuds",
    brand: "AudioMax",
    image: "/wireless-earbuds.png",
    price: 149,
    originalPrice: 249,
    rating: 4.6,
    reviews: 2341,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 89,
    link: "/products/6",
    category: "Audio"
  },
  {
    id: 7,
    name: "Smart Home Hub Premium",
    brand: "HomeTech",
    image: "/smart-coffee-maker.jpg",
    price: 199,
    originalPrice: 349,
    rating: 4.9,
    reviews: 567,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 34,
    link: "/products/7",
    category: "Smart Home"
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    brand: "PowerTech",
    image: "/portable-bluetooth-speaker.jpg",
    price: 49,
    originalPrice: 79,
    rating: 4.5,
    reviews: 1234,
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    inStock: true,
    stockCount: 156,
    link: "/products/8",
    category: "Accessories"
  }
];

export function BestSellers() {
  return (
    <ProductGrid
      title="Best Sellers"
      subtitle="Top-rated products loved by our customers"
      products={bestSellers}
      showViewAll={true}
      viewAllLink="/products?filter=bestsellers"
      className="bg-white dark:bg-gray-900"
    />
  );
}
