"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "TechMax", logo: "/hiba-trading-logo.png" },
  { name: "ProStyle", logo: "/hiba-trading-logo.png" },
  { name: "HomePlus", logo: "/hiba-trading-logo.png" },
  { name: "FitZone", logo: "/hiba-trading-logo.png" },
  { name: "GamePro", logo: "/hiba-trading-logo.png" },
  { name: "BookWorld", logo: "/hiba-trading-logo.png" },
  { name: "CameraPlus", logo: "/hiba-trading-logo.png" },
  { name: "BeautyLab", logo: "/hiba-trading-logo.png" }
];

const repeatedBrands = [...brands, ...brands];

export function FeaturedBrands() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Brands
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Trusted partners offering premium products
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8">
          <motion.div
            className="flex min-w-max items-center gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          >
            {repeatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center min-w-[150px]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}
