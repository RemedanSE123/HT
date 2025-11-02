"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  ChevronDown,
  Clock,
  Flame,
  Image as ImageIcon,
  Mic,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tag,
  Truck,
} from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  rating: number;
  deliveryTime: "Same Day" | "2-Day" | "1 Week";
  discount: number;
  image: string;
  tags: string[];
};

type FilterKey = "price" | "brand" | "rating" | "delivery" | "discount";
type FilterMode = "single" | "multi";

type FilterGroup = {
  key: FilterKey;
  label: string;
  options: string[];
  mode: FilterMode;
};

type FilterState = Record<FilterKey, string[]>;

type SortValue =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "delivery"
  | "discount";

type SortOption = {
  value: SortValue;
  label: string;
};

const PRODUCT_CATALOG: Product[] = [
  {
    id: 1,
    name: "LuxTek 55\" 4K Smart TV",
    price: 799,
    brand: "LuxTek",
    rating: 4.6,
    deliveryTime: "2-Day",
    discount: 15,
    image: "/4k-smart-tv-55-inch.jpg",
    tags: ["smart tv", "4k", "home theater"],
  },
  {
    id: 2,
    name: "AeroPulse Noise Cancelling Headphones",
    price: 249,
    brand: "AeroPulse",
    rating: 4.7,
    deliveryTime: "Same Day",
    discount: 20,
    image: "/wireless-noise-cancelling-headphones.jpg",
    tags: ["audio", "wireless", "travel"],
  },
  {
    id: 3,
    name: "ZenFit Pro Smartwatch",
    price: 199,
    brand: "ZenFit",
    rating: 4.4,
    deliveryTime: "2-Day",
    discount: 12,
    image: "/fitness-smartwatch.png",
    tags: ["wearables", "fitness", "health"],
  },
  {
    id: 4,
    name: "PureBrew Smart Coffee Maker",
    price: 349,
    brand: "PureBrew",
    rating: 4.2,
    deliveryTime: "1 Week",
    discount: 18,
    image: "/smart-coffee-maker.jpg",
    tags: ["kitchen", "smart home", "appliances"],
  },
  {
    id: 5,
    name: "HomeEase Robotic Vacuum Cleaner",
    price: 599,
    brand: "HomeEase",
    rating: 4.6,
    deliveryTime: "2-Day",
    discount: 25,
    image: "/smart-robot-vacuum-cleaner.jpg",
    tags: ["cleaning", "smart home", "vacuum"],
  },
  {
    id: 6,
    name: "AeroPulse PulseFlex Gaming Mouse",
    price: 129,
    brand: "AeroPulse",
    rating: 4.3,
    deliveryTime: "Same Day",
    discount: 10,
    image: "/gaming-mouse.png",
    tags: ["gaming", "peripherals", "rgb"],
  },
  {
    id: 7,
    name: "NordicGlow Smart Bulb Pack",
    price: 89,
    brand: "HomeEase",
    rating: 4.1,
    deliveryTime: "Same Day",
    discount: 35,
    image: "/smart-bulbs.jpg",
    tags: ["lighting", "smart home", "energy saving"],
  },
  {
    id: 8,
    name: "LuxTek Ultra Theater Soundbar",
    price: 1099,
    brand: "LuxTek",
    rating: 4.5,
    deliveryTime: "1 Week",
    discount: 22,
    image: "/sleek-soundbar.png",
    tags: ["audio", "home theater", "dolby atmos"],
  },
  {
    id: 9,
    name: "PureBrew FlexiBlend Stand Mixer",
    price: 499,
    brand: "PureBrew",
    rating: 4.0,
    deliveryTime: "2-Day",
    discount: 15,
    image: "/stand-mixer.png",
    tags: ["kitchen", "baking", "appliances"],
  },
  {
    id: 10,
    name: "ZenFit Balance Smart Scale",
    price: 149,
    brand: "ZenFit",
    rating: 4.2,
    deliveryTime: "2-Day",
    discount: 18,
    image: "/premium-yoga-mat.png",
    tags: ["wellness", "health", "smart home"],
  },
];

const BRAND_OPTIONS = Array.from(
  new Set(PRODUCT_CATALOG.map((product) => product.brand)),
).sort();

const FILTER_GROUPS: FilterGroup[] = [
  {
    key: "price",
    label: "Price",
    mode: "single",
    options: ["Under $100", "$100 - $500", "$500 - $1000", "Above $1000"],
  },
  {
    key: "brand",
    label: "Brand",
    mode: "multi",
    options: BRAND_OPTIONS,
  },
  {
    key: "rating",
    label: "Rating",
    mode: "single",
    options: ["4★ & up", "3★ & up"],
  },
  {
    key: "delivery",
    label: "Delivery time",
    mode: "single",
    options: ["Same Day", "2-Day", "1 Week"],
  },
  {
    key: "discount",
    label: "Discount",
    mode: "single",
    options: ["10%+", "20%+", "30%+"],
  },
];

const SORT_OPTIONS: SortOption[] = [
  { value: "relevance", label: "Best match" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Customer rating" },
  { value: "delivery", label: "Fastest delivery" },
  { value: "discount", label: "Biggest savings" },
];

const TRENDING_KEYWORDS = [
  "smart home bundles",
  "noise cancelling",
  "luxury kitchen",
  "gaming essentials",
  "wellness tech",
  "eco lighting",
];

const PREDICTIVE_SUGGESTIONS = [
  "smart tv with dolby atmos",
  "wireless headphones for travel",
  "robot vacuum with mopping",
  "smartwatch with body temperature tracking",
  "coffee maker with built-in grinder",
  "gaming mouse with customizable dpi",
  "smart bulbs with voice control",
  "stand mixer for sourdough",
  "home theater surround setup",
  "fitness tracker with sleep insights",
];

const INITIAL_HISTORY = [
  "luxtek 4k tv",
  "robot vacuum",
  "smartwatch deals",
  "gaming accessories",
  "smart bulbs bundle",
  "coffee maker with grinder",
];

const DELIVERY_ORDER: Record<Product["deliveryTime"], number> = {
  "Same Day": 0,
  "2-Day": 1,
  "1 Week": 2,
};

const PRICE_MATCHERS: Record<string, (price: number) => boolean> = {
  "Under $100": (price) => price < 100,
  "$100 - $500": (price) => price >= 100 && price <= 500,
  "$500 - $1000": (price) => price > 500 && price <= 1000,
  "Above $1000": (price) => price > 1000,
};

const parseLeadingNumber = (option: string) => {
  const match = option.match(/\d+/);
  return match ? Number(match[0]) : null;
};

const createEmptyFilters = (): FilterState => ({
  price: [],
  brand: [],
  rating: [],
  delivery: [],
  discount: [],
});

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>(() => createEmptyFilters());
  const [sort, setSort] = useState<SortValue>("relevance");
  const [history, setHistory] = useState<string[]>(INITIAL_HISTORY);

  const normalizedQuery = query.trim().toLowerCase();

  const predictiveResults = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return PREDICTIVE_SUGGESTIONS.filter((suggestion) =>
      suggestion.toLowerCase().includes(normalizedQuery),
    ).slice(0, 5);
  }, [normalizedQuery]);

  const youMayMean = useMemo(() => {
    if (!normalizedQuery) {
      return TRENDING_KEYWORDS.slice(0, 3);
    }

    const [firstWord] = normalizedQuery.split(" ");
    const alternatives = PREDICTIVE_SUGGESTIONS.filter((suggestion) => {
      const lower = suggestion.toLowerCase();
      return lower !== normalizedQuery && lower.includes(firstWord ?? "");
    }).slice(0, 3);

    if (alternatives.length) {
      return alternatives;
    }

    return TRENDING_KEYWORDS.slice(0, 3);
  }, [normalizedQuery]);

  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [product.name, product.brand, ...product.tags].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );

      if (!matchesQuery) {
        return false;
      }

      if (filters.price.length) {
        const matchesPrice = filters.price.some((option) =>
          PRICE_MATCHERS[option]?.(product.price),
        );

        if (!matchesPrice) {
          return false;
        }
      }

      if (filters.brand.length && !filters.brand.includes(product.brand)) {
        return false;
      }

      if (filters.rating.length) {
        const matchesRating = filters.rating.some((option) => {
          const value = parseLeadingNumber(option);
          return value ? product.rating >= value : true;
        });

        if (!matchesRating) {
          return false;
        }
      }

      if (filters.delivery.length && !filters.delivery.includes(product.deliveryTime)) {
        return false;
      }

      if (filters.discount.length) {
        const matchesDiscount = filters.discount.some((option) => {
          const value = parseLeadingNumber(option);
          return value ? product.discount >= value : true;
        });

        if (!matchesDiscount) {
          return false;
        }
      }

      return true;
    });
  }, [filters, normalizedQuery]);

  const sortedProducts = useMemo(() => {
    const results = [...filteredProducts];

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
      case "delivery":
        results.sort(
          (a, b) => DELIVERY_ORDER[a.deliveryTime] - DELIVERY_ORDER[b.deliveryTime],
        );
        break;
      case "discount":
        results.sort((a, b) => b.discount - a.discount);
        break;
      default:
        break;
    }

    return results;
  }, [filteredProducts, sort]);

  const activeSort = SORT_OPTIONS.find((option) => option.value === sort);
  const resultsCount = sortedProducts.length;
  const displayQuery = query.trim();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!displayQuery) {
      return;
    }

    setHistory((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.toLowerCase() === displayQuery.toLowerCase(),
      );

      if (existingIndex === 0) {
        return prev;
      }

      const updated =
        existingIndex > -1
          ? [displayQuery, ...prev.filter((_, index) => index !== existingIndex)]
          : [displayQuery, ...prev];

      return updated.slice(0, 8);
    });
  };

  const toggleFilter = (key: FilterKey, option: string, mode: FilterMode) => {
    setFilters((previous) => {
      const next = { ...previous };
      const current = new Set(previous[key]);

      if (mode === "single") {
        next[key] = current.has(option) ? [] : [option];
        return next;
      }

      if (current.has(option)) {
        current.delete(option);
      } else {
        current.add(option);
      }

      next[key] = Array.from(current);
      return next;
    });
  };

  const clearFilters = () => {
    setFilters(createEmptyFilters());
  };

  const handleSuggestionClick = (value: string) => {
    setQuery(value);
  };

  return (
    <section className="space-y-8 pb-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Smart search</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Discover products with conversational intent, visual matches, and predictive insights.
        </p>
      </header>

      <Card className="border-primary/20 bg-primary/5 py-8">
        <CardContent className="space-y-6">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search for products, categories, or ask in natural language..."
                  className="h-14 rounded-2xl border-2 border-primary/20 bg-background pr-44 text-base shadow-sm focus-visible:border-primary focus-visible:ring-0"
                />
                <div className="absolute inset-y-1 right-1 flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-lg"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Mic className="size-5" />
                    <span className="sr-only">Start voice search</span>
                  </Button>
                  <Button type="submit" size="lg" className="h-12 rounded-xl px-6">
                    Search
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 lg:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="gap-2 rounded-xl px-5"
                    >
                      <Clock className="size-5" />
                      History
                      <ChevronDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    <DropdownMenuLabel>Recent searches</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {history.length === 0 && (
                      <DropdownMenuItem disabled>No saved searches yet</DropdownMenuItem>
                    )}
                    {history.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        onSelect={() => handleSuggestionClick(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      disabled={history.length === 0}
                      onSelect={() => setHistory([])}
                    >
                      Clear history
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-xl px-5"
                >
                  <ImageIcon className="size-5" />
                  Upload image
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Tip: You can try prompts like “Show me smart home bundles under $500” or “Find gaming gear that delivers in 2 days”.
            </p>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-dashed border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Sparkles className="size-5 text-primary" /> You may mean
            </CardTitle>
            <CardDescription>
              Quick disambiguation suggestions based on similar searches.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {youMayMean.map((alternative) => (
              <Button
                key={alternative}
                type="button"
                variant="secondary"
                size="sm"
                className="rounded-full"
                onClick={() => handleSuggestionClick(alternative)}
              >
                {alternative}
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Sparkles className="size-5 text-primary" /> Predictive results
            </CardTitle>
            <CardDescription>
              AI-powered completions update as you type.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {!normalizedQuery && (
              <p className="text-sm text-muted-foreground">
                Start typing above to see predictive ideas.
              </p>
            )}
            {normalizedQuery && predictiveResults.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No direct matches yet—keep refining your phrasing.
              </p>
            )}
            {predictiveResults.map((suggestion) => (
              <Button
                key={suggestion}
                type="button"
                variant="ghost"
                className="w-full justify-between rounded-xl px-4"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <span className="text-left">{suggestion}</span>
                <ArrowUpDown className="size-4 text-muted-foreground" />
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="border-dashed border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Flame className="size-5 text-primary" /> Trending keywords
            </CardTitle>
            <CardDescription>
              Popular discovery queries from shoppers this week.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {TRENDING_KEYWORDS.map((keyword) => (
              <Badge
                key={keyword}
                variant="outline"
                className="cursor-pointer rounded-full border-dashed px-3 py-1 text-sm hover:border-primary hover:text-primary"
                onClick={() => handleSuggestionClick(keyword)}
              >
                #{keyword}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <SlidersHorizontal className="size-5 text-primary" /> Refine results
              </CardTitle>
              <CardDescription>Apply smart filters to tailor your feed.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {FILTER_GROUPS.map((group) => (
                <div key={group.key} className="space-y-3">
                  <div className="text-sm font-medium">{group.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((option) => {
                      const isActive = filters[group.key].includes(option);

                      return (
                        <Button
                          key={option}
                          type="button"
                          variant={isActive ? "secondary" : "outline"}
                          size="sm"
                          className="rounded-full"
                          onClick={() => toggleFilter(group.key, option, group.mode)}
                        >
                          {option}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="justify-end">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
                onClick={clearFilters}
              >
                Reset filters
              </Button>
            </CardFooter>
          </Card>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-base font-semibold">
                {resultsCount} {resultsCount === 1 ? "result" : "results"}
                {displayQuery ? ` for “${displayQuery}”` : ""}
              </p>
              <p className="text-sm text-muted-foreground">
                Sorted by {activeSort?.label.toLowerCase()} • Filters: {Object.values(filters).flat().length || "none"}
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="min-w-[220px] justify-between gap-2 rounded-xl"
                >
                  Sort: {activeSort?.label}
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuLabel>Sort results</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {SORT_OPTIONS.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onSelect={() => setSort(option.value)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {sortedProducts.length === 0 ? (
            <Card className="border-dashed border-primary/20">
              <CardHeader>
                <CardTitle className="text-base font-semibold">No matches yet</CardTitle>
                <CardDescription>
                  Try adjusting your filters or explore trending searches above.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="space-y-4 pt-6">
                    <div className="relative overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{product.brand}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-semibold">${product.price.toLocaleString()}</span>
                        <span className="flex items-center gap-1 text-amber-500">
                          <Star className="size-4 fill-current" />
                          {product.rating.toFixed(1)}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Truck className="size-4" />
                          {product.deliveryTime}
                        </span>
                      </div>
                      <Badge variant="secondary" className="inline-flex items-center gap-1 rounded-full">
                        <Tag className="size-3.5" />
                        {product.discount}% off
                      </Badge>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="rounded-full">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="button" className="w-full rounded-xl">
                      View details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          <div className="rounded-2xl border border-dashed border-muted-foreground/40 p-6 text-center text-sm text-muted-foreground">
            Infinite scroll placeholder – more results load as shoppers keep exploring.
          </div>
        </div>
      </div>
    </section>
  );
}

