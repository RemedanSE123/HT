"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const banners = [
  {
    id: 1,
    title: "Flash Sale",
    subtitle: "Up to 80% Off - Limited Time",
    image: "/modern-electronics-store-display.jpg",
    link: "/products?category=sale",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Latest Products Just In",
    image: "/modern-electronics-store-display.jpg",
    link: "/products?category=new",
  },
  {
    id: 3,
    title: "Best Deals",
    subtitle: "Top Picks for You",
    image: "/modern-electronics-store-display.jpg",
    link: "/products?category=deals",
  },
];

export function LandingHero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="w-full bg-white dark:bg-zinc-900 py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={banner.id}>
                  <Link href={banner.link}>
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden group cursor-pointer shadow-lg">
                      <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                      <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-white z-10">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                          {banner.title}
                        </h2>
                        <p className="text-base md:text-xl text-gray-100 mb-4 drop-shadow-md">
                          {banner.subtitle}
                        </p>
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                          size="lg"
                        >
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>

          {/* Simple Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  current === index
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
