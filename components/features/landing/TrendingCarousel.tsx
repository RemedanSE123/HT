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
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl dark:bg-zinc-950/60">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Live trending products
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
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
      className="group relative flex h-64 w-72 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 p-4 text-white shadow-xl"
      whileHover={{ rotateX: -6, rotateY: 6, translateY: -12 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex items-center justify-between text-xs text-blue-200/80">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 uppercase tracking-wide">
          Live
        </span>
        <span>{category}</span>
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
        <h3 className="text-lg font-semibold leading-tight">{name}</h3>
        <div className="flex items-center justify-between text-sm text-blue-100/90">
          <span>{price}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-blue-300">
            3D preview
            <span aria-hidden className="inline-flex size-2 rounded-full bg-blue-400" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

