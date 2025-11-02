"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Hiba Trading helped us launch a multi-sensory showroom experience in weeks instead of months.",
    name: "Selena Maris",
    role: "Chief Experience Officer, Lumen Living",
    rating: 5,
  },
  {
    quote:
      "Their AI commerce engine continuously adapts our catalog based on shopper intent and behavior.",
    name: "Devon Irie",
    role: "Founder, Quantum Brew Labs",
    rating: 5,
  },
  {
    quote:
      "From immersive 3D product narratives to predictive logistics, the platform elevates every touchpoint.",
    name: "Amina Sol",
    role: "VP Digital Retail, Synapse Studio",
    rating: 4,
  },
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 text-white shadow-2xl sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Voices from the future of retail</h2>
          <p className="mt-1 text-sm text-zinc-300">
            Leaders scaling immersive, data-driven commerce experiences.
          </p>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, indicatorIndex) => (
            <span
              key={indicatorIndex}
              className={`size-2 rounded-full transition ${
                index === indicatorIndex ? "bg-blue-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-8 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex h-full flex-col justify-between gap-6"
          >
            <blockquote className="text-lg leading-relaxed text-blue-100">
              “{testimonials[index].quote}”
            </blockquote>
            <div>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-base font-semibold">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: testimonials[index].rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-blue-400 text-blue-400" />
                ))}
                {Array.from({ length: 5 - testimonials[index].rating }).map((_, starIndex) => (
                  <Star key={`empty-${starIndex}`} className="size-4 text-blue-400/30" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


