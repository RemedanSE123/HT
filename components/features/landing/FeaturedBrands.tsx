"use client";

import { motion } from "framer-motion";

const brands = [
  "NovaSphere Labs",
  "Lumen Living",
  "Circuit Threads",
  "Aurora Dynamics",
  "Quantum Brew",
  "Orbit Mobility",
  "Synapse Studio",
  "Parallel Atelier",
];

const repeatedBrands = [...brands, ...brands];

export function FeaturedBrands() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl dark:bg-zinc-950/60">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Featured futuristic brands
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Partnering with pioneers designing the next retail frontier.
          </p>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <motion.div
          className="flex min-w-max items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          {repeatedBrands.map((brand, index) => (
            <motion.span
              key={`${brand}-${index}`}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80 backdrop-blur-lg dark:border-white/5 dark:bg-white/5"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />
      </div>
    </section>
  );
}


