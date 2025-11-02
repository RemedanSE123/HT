"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Gamepad2,
  Book,
  Camera,
  Heart,
  Laptop,
  Headphones,
  Watch
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Electronics",
    // description: "Smartphones, Laptops & More",
    icon: Smartphone,
    href: "/products?category=electronics",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    name: "Fashion",
    // description: "Clothing & Accessories",
    icon: Shirt,
    href: "/products?category=fashion",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    name: "Home ",
    // description: "Furniture & Decor",
    icon: Home,
    href: "/products?category=home",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    name: "Sports ",
    // description: "Equipment & Gear",
    icon: Dumbbell,
    href: "/products?category=sports",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    name: "Gaming",
    // description: "Consoles & Accessories",
    icon: Gamepad2,
    href: "/products?category=gaming",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    name: "Books",
    // description: "All Genres Available",
    icon: Book,
    href: "/products?category=books",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
  },
  {
    name: "Photography",
    // description: "Cameras & Lenses",
    icon: Camera,
    href: "/products?category=photography",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
  },
  {
    name: "Health ",
    // description: "Personal Care",
    icon: Heart,
    href: "/products?category=beauty",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20"
  }
];

export function CategoryQuickIcons() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Browse our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map(({ name,  icon: Icon, href, color, bgColor }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={href}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className={cn(
                  "p-3 rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110",
                  color,
                  "text-white"
                )}>
                  <Icon className="size-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {name}
                  </h3>
               
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
