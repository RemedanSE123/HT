"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Hiba Trading transformed our business with their exceptional wholesale platform. Fast delivery and premium quality products every time.",
    name: "Sarah Johnson",
    role: "Business Owner, Johannesburg",
    rating: 5,
    location: "South Africa"
  },
  {
    quote: "As an international customer, I'm impressed by the seamless shopping experience and excellent customer service. Highly recommended!",
    name: "Michael Chen",
    role: "Retailer, Cape Town",
    rating: 5,
    location: "South Africa"
  },
  {
    quote: "The quality and variety of products available is outstanding. Our customers love everything we source from Hiba Trading.",
    name: "Amina Patel",
    role: "Store Manager, Durban",
    rating: 5,
    location: "South Africa"
  },
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Trusted by businesses and customers worldwide
          </p>
        </div>

        <div className="relative rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Customer Testimonials
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Real feedback from satisfied customers
              </p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, indicatorIndex) => (
                <button
                  key={indicatorIndex}
                  onClick={() => setIndex(indicatorIndex)}
                  className={cn(
                    "size-2 rounded-full transition-all duration-300",
                    index === indicatorIndex 
                      ? "w-8 bg-orange-500 dark:bg-orange-600" 
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${indicatorIndex + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex h-full flex-col justify-between gap-6"
              >
                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                  "{testimonials[index].quote}"
                </blockquote>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[index].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[index].name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonials[index].rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    {Array.from({ length: 5 - testimonials[index].rating }).map((_, starIndex) => (
                      <Star key={`empty-${starIndex}`} className="size-5 text-gray-300 dark:text-gray-600" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
