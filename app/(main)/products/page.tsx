"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  BadgeCheck,
  ChevronDown,
  Filter,
  Sparkles,
  Timer,
} from "lucide-react";

import { BADGE_STYLES, PRODUCTS, type Product } from "@/components/features/products/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SortValue = "featured" | "price-asc" | "price-desc" | "rating";

const SORT_OPTIONS: { label: string; value: SortValue }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Customer Rating", value: "rating" },
];

const BADGE_FILTERS = ["Fast Delivery", "Bestseller", "Eco", "AI Recommended"] as const;

const getCategories = () =>
  Array.from(new Set(PRODUCTS.map((product) => product.category))).sort();

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [sort, setSort] = useState<SortValue>("featured");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    const results = PRODUCTS.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [product.name, product.brand, product.description, ...product.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      if (!matchesQuery) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      if (
        selectedBadges.length > 0 &&
        !selectedBadges.some((badge) => product.badges.includes(badge as any))
      ) {
        return false;
      }

      return true;
    });

    switch (sort) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        results.sort((a, b) => b.badges.length - a.badges.length);
        break;
    }

    return results;
  }, [normalizedQuery, selectedCategories, selectedBadges, sort]);

  const activeSort = SORT_OPTIONS.find((option) => option.value === sort);

  const toggleArrayValue = (value: string, state: string[], setter: (values: string[]) => void) => {
    setter(
      state.includes(value)
        ? state.filter((item) => item !== value)
        : [...state, value]
    );
  };

  return (
    <section className="space-y-10 pb-16">
      <header className="space-y-3">
        <Badge variant="outline" className="rounded-full border-dashed">
          Phase 6 · Immersive Commerce
        </Badge>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Product discovery</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Browse adaptive product cards with cinematic media, AI merchandising signals, and conversational quick view.
            </p>
          </div>
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
            <Sparkles className="size-4" /> Powered by AI merchandising
          </span>
        </div>
      </header>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search catalog, e.g. “8K TV with Dolby Atmos”"
                className="h-12 rounded-xl border-2 border-primary/20 bg-background pl-11 text-base"
              />
              <Filter className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {getCategories().map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant={selectedCategories.includes(category) ? "secondary" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => toggleArrayValue(category, selectedCategories, setSelectedCategories)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {BADGE_FILTERS.map((badge) => (
                <Badge
                  key={badge}
                  variant={selectedBadges.includes(badge) ? "secondary" : "outline"}
                  className={cn(
                    "cursor-pointer rounded-full border-dashed px-3 py-1 text-sm",
                    BADGE_STYLES[badge]
                  )}
                  onClick={() => toggleArrayValue(badge, selectedBadges, setSelectedBadges)}
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="min-w-[200px] justify-between rounded-xl"
                >
                  Sort: {activeSort?.label}
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {SORT_OPTIONS.map((option) => (
                  <DropdownMenuItem key={option.value} onSelect={() => setSort(option.value)}>
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-muted-foreground/40 p-6 text-center text-sm text-muted-foreground">
        Infinite scroll prototype · More products load automatically as the shopper explores.
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col justify-between overflow-hidden border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
      <CardContent className="space-y-4 p-6">
        <div style={{ perspective: "1600px" }}>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border/70 bg-muted/60 shadow-inner transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(8deg)_scale(1.02)]">
            <Image
              src={product.media.primary}
              alt={product.name}
              width={480}
              height={320}
              className="absolute inset-0 size-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={product.media.secondary}
              alt={`${product.name} alternate angle`}
              width={480}
              height={320}
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Badge className="absolute left-4 top-4 rounded-full bg-background/90">
              {product.brand}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {product.badges.map((badge) => (
              <Badge
                key={badge}
                className={cn("rounded-full px-3 py-1 text-xs font-medium", BADGE_STYLES[badge])}
              >
                {badge}
              </Badge>
            ))}
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-lg font-semibold">${product.price.toLocaleString()}</span>
            <span className="flex items-center gap-1 text-amber-500">
              <BadgeCheck className="size-4" />
              {product.rating.toFixed(1)} ({product.reviewsCount})
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Timer className="size-4" />
              {product.deliveryEstimate}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/30 p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="rounded-full">
              Quick view
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl rounded-3xl">
            <DialogHeader className="gap-3 text-left">
              <DialogTitle className="text-xl">{product.name}</DialogTitle>
              <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 md:grid-cols-[280px_1fr]">
              <div className="relative overflow-hidden rounded-2xl border bg-muted/60">
                <Image
                  src={product.media.primary}
                  alt={product.name}
                  width={360}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {product.highlights.join(" · ")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className={cn("rounded-full px-3 py-1 text-xs", BADGE_STYLES[badge])}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-lg font-semibold">${product.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">
                    {product.rating.toFixed(1)} · {product.reviewsCount} reviews
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Why shoppers love it</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <Button className="rounded-xl">View full details</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="secondary" size="sm" className="rounded-full">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

