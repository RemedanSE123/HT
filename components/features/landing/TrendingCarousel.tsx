"use client";

import { useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const trendingProducts = [
  {
    name: "Holographic Display Console",
    category: "Immersive Media",
    price: "$2,499",
    image: "/blender-3d-scene.png",
  },
  {
    name: "AI Concierge Speaker",
    category: "Smart Home",
    price: "$449",
    image: "/smart-bulbs.jpg",
  },
  {
    name: "Adaptive Wellness Mirror",
    category: "Health Tech",
    price: "$1,299",
    image: "/beauty-products-collection.png",
  },
  {
    name: "Ultra-Flex Ergonomic Chair",
    category: "Workspace",
    price: "$899",
    image: "/ergonomic-office-chair.png",
  },
  {
    name: "Quantum Soundbar",
    category: "Entertainment",
    price: "$699",
    image: "/sleek-soundbar.png",
  },
  {
    name: "Carbon Aero Bike",
    category: "Mobility",
    price: "$3,799",
    image: "/electric-scooter.png",
  },
];

const repeatedProducts = [...trendingProducts, ...trendingProducts];

export function TrendingCarousel() {
  const controls = useAnimation();

  const startAnimation = useCallback(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [controls, startAnimation]);

  const handleHoverStart = useCallback(() => {
    controls.stop();
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <section className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Live trending products
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Curated by the commerce AI from real-time demand signals.
          </p>
        </div>
      </div>

      <motion.div
        className="mt-6 overflow-hidden"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <motion.div className="flex min-w-max gap-6" animate={controls}>
          {repeatedProducts.map((product, index) => (
            <TrendingCard
              key={`${product.name}-${index}`}
              {...product}
              priority={index < trendingProducts.length}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

interface TrendingCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  priority?: boolean;
}

function TrendingCard({ name, category, price, image, priority }: TrendingCardProps) {
  return (
    <motion.article
      className="group relative flex h-64 w-72 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ rotateX: -6, rotateY: 6, translateY: -12 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex items-center justify-between text-xs text-orange-600 dark:text-orange-400">
        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 dark:bg-orange-900/30 px-2 py-0.5 uppercase tracking-wide">
          Live
        </span>
        <span className="text-gray-600 dark:text-gray-400">{category}</span>
      </div>

      <div className="relative mt-6 flex flex-1 items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={220}
          height={140}
          className="h-32 w-auto object-contain transition duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-tight text-gray-900 dark:text-white">{name}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-900 dark:text-white font-semibold">{price}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400">
            3D preview
            <span aria-hidden className="inline-flex size-2 rounded-full bg-orange-500 dark:bg-orange-400" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

