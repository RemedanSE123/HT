"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { categories } from "@/components/features/categories/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface PriceRange {
  min: number;
  max: number;
}

export default function CategoriesPage() {
  const [activeCategorySlug, setActiveCategorySlug] = useState(categories[0]?.slug);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: categories[0]?.priceRange[0] ?? 0,
    max: categories[0]?.priceRange[1] ?? 0,
  });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(() => Math.floor(categories[0]?.rating ?? 0));

  const activeCategory = useMemo(
    () => categories.find((category) => category.slug === activeCategorySlug) ?? categories[0],
    [activeCategorySlug]
  );

  useEffect(() => {
    if (!activeCategory) {
      return;
    }

    setPriceRange({
      min: activeCategory.priceRange[0],
      max: activeCategory.priceRange[1],
    });
    setSelectedBrands([]);
    setMinRating(Math.floor(activeCategory.rating));
  }, [activeCategory]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
  };

  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-col gap-3">
          <Badge className="w-fit bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg">
            Phase 4
          </Badge>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Categories</h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Navigate adaptive product territories engineered with immersive storytelling and precision filters.
            </p>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-muted-foreground/80">4.1 Category Grid</h2>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory?.slug === category.slug;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveCategorySlug(category.slug)}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-6 text-left shadow-lg shadow-blue-500/5 backdrop-blur-xl transition duration-300",
                  "hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  "dark:border-white/10 dark:bg-zinc-950/40",
                  isActive && "ring-2 ring-offset-2 ring-blue-500"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-60 transition duration-500",
                    `from-white via-white/0 to-white/0`,
                    `group-hover:opacity-90 ${category.gradient}`
                  )}
                />

                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-full bg-white/80 shadow-lg shadow-black/10">
                        <Icon className="size-5 text-blue-600" />
                      </span>
                      <span className="text-xl font-semibold leading-tight text-zinc-900 dark:text-white">
                        {category.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-blue-600">
                      <span>{category.itemCount}</span>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">items</span>
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground/60">
                    <span>Explore universe</span>
                    <span>Hover for depth →</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-muted-foreground/80">4.2 Category Detail View</h2>

          {activeCategory && (
            <div className="space-y-6">
              <article className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/60">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80",
                    activeCategory.gradient
                  )}
                />
                <div className="absolute -right-20 top-1/2 hidden h-72 w-72 -translate-y-1/2 overflow-hidden rounded-full border border-white/20 shadow-2xl shadow-black/30 sm:block">
                  <Image
                    src={activeCategory.heroImage}
                    alt={`${activeCategory.name} hero visual`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 200px, 280px"
                  />
                </div>

                <div className="relative space-y-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-white/80">
                      <Star className="size-4" />
                      <span>Immersive realm</span>
                    </div>
                    <h3 className="text-3xl font-semibold text-white drop-shadow-md">
                      {activeCategory.name}
                    </h3>
                    <p className="max-w-lg text-sm text-white/70">
                      {activeCategory.description}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 text-sm text-white/80 sm:grid-cols-3">
                    <div>
                      <dt className="font-medium uppercase tracking-wide text-white/60">Average rating</dt>
                      <dd className="flex items-center gap-2 text-base">
                        <span className="font-semibold">{activeCategory.rating.toFixed(1)}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={cn(
                                "size-4",
                                index < Math.round(activeCategory.rating)
                                  ? "fill-white text-white"
                                  : "text-white/30"
                              )}
                            />
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium uppercase tracking-wide text-white/60">Price spectrum</dt>
                      <dd className="text-base font-semibold">
                        ${activeCategory.priceRange[0].toLocaleString()} – ${" "}
                        {activeCategory.priceRange[1].toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium uppercase tracking-wide text-white/60">Brands</dt>
                      <dd className="flex flex-wrap gap-2">
                        {activeCategory.brands.map((brand) => (
                          <span
                            key={brand}
                            className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest"
                          >
                            {brand}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-6">
                  <section className="rounded-3xl border border-dashed border-white/30 bg-white/70 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/40">
                    <header className="mb-4 flex items-center justify-between">
                      <h4 className="text-lg font-semibold">Subcategories</h4>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">Modular pathways</span>
                    </header>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeCategory.subcategories.map((subcategory) => (
                        <div
                          key={subcategory}
                          className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-lg dark:border-white/10 dark:bg-zinc-950/60 dark:text-white"
                        >
                          <span>{subcategory}</span>
                          <span className="text-xs uppercase tracking-wide text-blue-500">View</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/50">
                    <header className="mb-5 flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">Quick shop preview</h4>
                        <p className="text-sm text-muted-foreground">Launch curated drops engineered for the category core.</p>
                      </div>
                      <span className="text-xs uppercase tracking-wide text-blue-600">Live stock</span>
                    </header>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {activeCategory.quickProducts.map((product) => (
                        <div
                          key={product.name}
                          className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white/70 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-zinc-950/50"
                        >
                          <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/20 shadow-inner">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                                {product.name}
                              </p>
                              {product.badge ? (
                                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                                  {product.badge}
                                </span>
                              ) : null}
                            </div>
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">Launch-ready</p>
                            <span className="text-sm font-semibold text-blue-600">{product.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="flex flex-col gap-5 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/60">
                  <header className="space-y-1">
                    <h4 className="text-lg font-semibold">Smart filter panel</h4>
                    <p className="text-sm text-muted-foreground">
                      Fine-tune discovery vectors across pricing, brand constellations, and rating thresholds.
                    </p>
                  </header>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
                        <span>Price range</span>
                        <span>
                          ${priceRange.min.toLocaleString()} – ${" "}
                          {priceRange.max.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <input
                          type="range"
                          min={activeCategory.priceRange[0]}
                          max={activeCategory.priceRange[1]}
                          value={priceRange.min}
                          onChange={(event) =>
                            setPriceRange((current) => ({
                              ...current,
                              min: Math.min(Number(event.target.value), current.max - 10),
                            }))
                          }
                          className="range"
                        />
                        <input
                          type="range"
                          min={activeCategory.priceRange[0]}
                          max={activeCategory.priceRange[1]}
                          value={priceRange.max}
                          onChange={(event) =>
                            setPriceRange((current) => ({
                              ...current,
                              max: Math.max(Number(event.target.value), current.min + 10),
                            }))
                          }
                          className="range"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Brands</p>
                      <div className="flex flex-wrap gap-3">
                        {activeCategory.brands.map((brand) => {
                          const isSelected = selectedBrands.includes(brand);
                          return (
                            <button
                              key={brand}
                              type="button"
                              onClick={() => handleBrandToggle(brand)}
                              className={cn(
                                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-sm transition",
                                isSelected
                                  ? "border-blue-500 bg-blue-500/10 text-blue-600"
                                  : "border-white/40 bg-white/60 text-muted-foreground hover:border-blue-500/70 hover:text-blue-600",
                                "dark:border-white/10 dark:bg-zinc-900"
                              )}
                            >
                              {brand}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Ratings</p>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setMinRating(index + 1)}
                            className="rounded-full p-1 transition"
                          >
                            <Star
                              className={cn(
                                "size-5",
                                index < minRating
                                  ? "fill-blue-500 text-blue-500"
                                  : "text-muted-foreground"
                              )}
                            />
                          </button>
                        ))}
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                          {minRating}+
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl"
                  >
                    Apply filters
                  </button>
                </aside>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

