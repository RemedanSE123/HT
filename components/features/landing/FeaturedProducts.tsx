"use client";

import { ProductGrid } from "./ProductGrid";

const featuredProducts = [
  {
    id: 1,
    name: "Ultra Premium Wireless Headphones",
    brand: "SoundMax Elite",
    image: "/wireless-noise-cancelling-headphones.jpg",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviews: 892,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 32,
    link: "/products/1",
    category: "Audio"
  },
  {
    id: 2,
    name: "8K OLED Smart TV 75 inch",
    brand: "VisionTech Pro",
    image: "/4k-smart-tv-55-inch.jpg",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviews: 445,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 15,
    link: "/products/2",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Ultra Gaming Laptop RTX 4090",
    brand: "GameMaster Pro",
    image: "/modern-gaming-console.png",
    price: 3499,
    originalPrice: 4499,
    rating: 4.8,
    reviews: 321,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 8,
    link: "/products/3",
    category: "Computers"
  },
  {
    id: 4,
    name: "Luxury Smart Watch Premium",
    brand: "FitPro Elite",
    image: "/fitness-smartwatch.png",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 678,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 42,
    link: "/products/4",
    category: "Wearables"
  },
  {
    id: 5,
    name: "Cinema Camera Professional",
    brand: "PhotoPro Max",
    image: "/professional-chef-knife-set.jpg",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 234,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 12,
    link: "/products/5",
    category: "Photography"
  },
  {
    id: 6,
    name: "Studio Quality Earbuds",
    brand: "AudioMax Pro",
    image: "/wireless-earbuds.png",
    price: 249,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1567,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 78,
    link: "/products/6",
    category: "Audio"
  },
  {
    id: 7,
    name: "AI Smart Home System",
    brand: "HomeTech Ultimate",
    image: "/smart-coffee-maker.jpg",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 456,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 25,
    link: "/products/7",
    category: "Smart Home"
  },
  {
    id: 8,
    name: "Wireless Fast Charger Pro",
    brand: "PowerTech Max",
    image: "/portable-bluetooth-speaker.jpg",
    price: 79,
    originalPrice: 129,
    rating: 4.6,
    reviews: 2134,
    badge: "Featured",
    badgeColor: "bg-purple-500",
    inStock: true,
    stockCount: 198,
    link: "/products/8",
    category: "Accessories"
  }
];

export function FeaturedProducts() {
  return (
    <ProductGrid
      title="Featured Products"
      subtitle="Handpicked premium selections just for you"
      products={featuredProducts}
      showViewAll={true}
      viewAllLink="/products?filter=featured"
      className="bg-gray-50 dark:bg-gray-800"
    />
  );
}
