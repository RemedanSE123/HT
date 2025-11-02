"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Box,
  Check,
  Cube,
  Gauge,
  PackageCheck,
  Ruler,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import {
  BADGE_STYLES,
  getProductById,
  getSimilarProducts,
  PRODUCTS,
  type Product,
} from "@/components/features/products/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const DEFAULT_PRODUCT = PRODUCTS[0];

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductById(params.id) ?? DEFAULT_PRODUCT;
  const [activeImage, setActiveImage] = useState(
    product.media.gallery[0] ?? product.media.primary,
  );
  const [selectedSize, setSelectedSize] = useState(product.variant.sizes[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(
    product.variant.colors[0]?.name ?? "",
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  useEffect(() => {
    setActiveImage(product.media.gallery[0] ?? product.media.primary);
    setSelectedSize(product.variant.sizes[0] ?? "");
    setSelectedColor(product.variant.colors[0]?.name ?? "");
    setQuantity(1);
    setSelectedAccessories([]);
  }, [product]);

  const accessoriesTotal = useMemo(() => {
    return product.accessories
      .filter((accessory) => selectedAccessories.includes(accessory.id))
      .reduce((sum, accessory) => sum + accessory.price, 0);
  }, [product.accessories, selectedAccessories]);

  const bundleTotal = useMemo(() => {
    return product.price * quantity + accessoriesTotal;
  }, [product.price, quantity, accessoriesTotal]);

  const similarItems = useMemo(() => {
    const matches = getSimilarProducts(product.category, product.id);
    if (matches.length > 0) {
      return matches;
    }

    return PRODUCTS.filter((candidate) => candidate.id !== product.id).slice(0, 4);
  }, [product]);

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((previous) =>
      previous.includes(id)
        ? previous.filter((accessoryId) => accessoryId !== id)
        : [...previous, id],
    );
  };

  const decrementQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const incrementQuantity = () => {
    setQuantity((value) => Math.min(10, value + 1));
  };

  return (
    <section className="space-y-10 pb-16">
      <header className="space-y-3">
        <Badge variant="outline" className="rounded-full border-dashed">
          Phase 6 · Immersive Product Story
        </Badge>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Product · {product.brand}</p>
            <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Explore cinematic media, smart variant selection, and AI-assisted buying intelligence tailored for modern commerce.
            </p>
          </div>
          <Button variant="ghost" className="self-start rounded-full text-xs font-medium uppercase tracking-wide text-primary">
            <Sparkles className="size-4" />
            <span>AI Merchandising Prototype</span>
          </Button>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="space-y-5 p-6">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-background/80 shadow-inner">
                  <Image
                    src={activeImage}
                    alt={product.name}
                    width={960}
                    height={720}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  <div className="absolute left-6 top-6 flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-full bg-background/80 text-xs font-medium">
                      <Cube className="mr-1 size-3.5" /> 360° studio set
                    </Badge>
                    <Badge variant="outline" className="rounded-full border-white/30 bg-black/40 text-white">
                      {product.category}
                    </Badge>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute right-6 top-6 gap-2 rounded-full border-white/40 bg-black/50 text-white backdrop-blur"
                  >
                    <Box className="size-4" />
                    View 360° (Prototype)
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-4">
                  {product.media.gallery.map((image) => {
                    const isActive = image === activeImage;

                    return (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(image)}
                        className={cn(
                          "relative overflow-hidden rounded-2xl border transition-all",
                          isActive
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-transparent hover:border-primary/40",
                        )}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} angle`}
                          width={240}
                          height={180}
                          className="h-24 w-full object-cover"
                        />
                        {isActive && (
                          <span className="absolute right-3 top-3 inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Check className="size-4" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-primary/40 bg-background/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Immersive media</p>
                    <p className="text-sm text-muted-foreground">
                      Tap through staging angles · 360° spin and AR overlays coming soon.
                    </p>
                  </div>
                  <Button type="button" variant="secondary" size="sm" className="rounded-full">
                    <Cube className="mr-2 size-4" /> Launch AR Try-On
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Sparkles className="size-5 text-primary" /> AI summarized reviews
              </CardTitle>
              <CardDescription>
                Key sentiments distilled from {product.reviewsCount.toLocaleString()} verified shoppers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border bg-muted/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Pros</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Cinematic display fidelity</li>
                    <li>✓ AI automations reduce daily setup</li>
                    <li>✓ Premium materials and build</li>
                  </ul>
                </div>
                <div className="rounded-2xl border bg-muted/20 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Watch outs</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Limited stock for select variants</li>
                    <li>• Advanced settings require onboarding</li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <ReviewStat label="Picture" score={9.3} />
                <ReviewStat label="Ease of setup" score={8.9} />
                <ReviewStat label="Value" score={9.1} />
              </div>
              <p className="text-sm text-muted-foreground">
                “Shoppers highlight the adaptive picture modes and responsive smart controls. Most recommend pairing with the suggested accessories for the full experience.”
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-6 p-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    {product.brand}
                  </Badge>
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
                  <p className="text-2xl font-semibold">${product.price.toLocaleString()}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="size-4 text-amber-500" />
                      {product.rating.toFixed(1)} ({product.reviewsCount.toLocaleString()} reviews)
                    </span>
                    <span className="flex items-center gap-1">
                      <Truck className="size-4" />
                      {product.deliveryEstimate}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Size</h2>
                  <Button type="button" variant="ghost" size="sm" className="gap-2 rounded-full text-xs font-semibold">
                    <Ruler className="size-4" /> Size guide / Fit assistant
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variant.sizes.map((size) => {
                    const isActive = size === selectedSize;
                    return (
                      <Button
                        key={size}
                        type="button"
                        variant={isActive ? "secondary" : "outline"}
                        size="sm"
                        className="rounded-xl px-4"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    );
                  })}
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Color</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.variant.colors.map((color) => {
                      const isActive = color.name === selectedColor;
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setSelectedColor(color.name)}
                          className={cn(
                            "flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm transition",
                            isActive
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/60",
                          )}
                        >
                          <span
                            className="inline-flex size-5 rounded-full border"
                            style={{ backgroundColor: color.swatch }}
                          />
                          {color.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quantity</h2>
                  <div className="flex items-center gap-3">
                    <Button type="button" variant="outline" size="icon" className="rounded-full" onClick={decrementQuantity}>
                      –
                    </Button>
                    <span className="min-w-[48px] text-center text-lg font-semibold">{quantity}</span>
                    <Button type="button" variant="outline" size="icon" className="rounded-full" onClick={incrementQuantity}>
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                    <PackageCheck className="size-6 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Delivery prediction</p>
                      <p className="text-xs text-muted-foreground">Smart routing estimates arrival by {product.deliveryEstimate}.</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-full border-primary/40 bg-white/70">
                    <Gauge className="mr-1 size-3.5" /> Confidence 92%
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="flex-1 rounded-xl py-6 text-base font-semibold">
                  Add to cart · ${bundleTotal.toLocaleString()}
                </Button>
                <Button variant="secondary" className="flex-1 rounded-xl py-6 text-base font-semibold">
                  Buy now
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Secured checkout with AI-assisted order tracking and proactive delivery updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Box className="size-5 text-primary" /> Accessories bundle suggestion
              </CardTitle>
              <CardDescription>
                Pair with curated add-ons to unlock the full experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {product.accessories.map((accessory) => {
                  const isSelected = selectedAccessories.includes(accessory.id);
                  return (
                    <button
                      key={accessory.id}
                      type="button"
                      onClick={() => toggleAccessory(accessory.id)}
                      className={cn(
                        "flex items-center gap-4 rounded-2xl border p-3 text-left transition",
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/40",
                      )}
                    >
                      <span className="relative inline-flex size-16 overflow-hidden rounded-xl border bg-muted/40">
                        <Image
                          src={accessory.image}
                          alt={accessory.name}
                          width={80}
                          height={80}
                          className="size-full object-cover"
                        />
                      </span>
                      <div className="flex flex-1 items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">{accessory.name}</p>
                          <p className="text-xs text-muted-foreground">${accessory.price.toLocaleString()}</p>
                        </div>
                        <Badge variant={isSelected ? "secondary" : "outline"} className="rounded-full">
                          {isSelected ? "Added" : "Add"}
                        </Badge>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-dashed bg-muted/40 p-4">
                <div>
                  <p className="text-sm font-semibold">Bundle total</p>
                  <p className="text-xs text-muted-foreground">
                    Includes base configuration and selected accessories.
                  </p>
                </div>
                <p className="text-lg font-semibold">${bundleTotal.toLocaleString()}</p>
              </div>

              <Button type="button" variant="outline" className="w-full rounded-xl">
                Add bundle to cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Similar items</h2>
            <p className="text-sm text-muted-foreground">
              You might also like these from the {product.category.toLowerCase()} lineup.
            </p>
          </div>
          <Button variant="ghost" className="gap-2 rounded-full">
            Explore collection
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <Carousel className="relative">
          <CarouselContent>
            {similarItems.map((item) => (
              <CarouselItem key={item.id} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full overflow-hidden border-border/70">
                  <CardContent className="space-y-4 p-4">
                    <div className="relative h-44 w-full overflow-hidden rounded-2xl border bg-muted/40">
                      <Image
                        src={item.media.primary}
                        alt={item.name}
                        width={360}
                        height={240}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.badges.slice(0, 2).map((badge) => (
                          <Badge
                            key={badge}
                            className={cn("rounded-full px-3 py-1 text-xs", BADGE_STYLES[badge])}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm font-semibold leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground">${item.price.toLocaleString()}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      View details
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>

        <div className="rounded-2xl border border-dashed border-muted-foreground/40 p-5 text-center text-sm text-muted-foreground">
          Infinite scroll placeholder – additional recommendations stream in as shoppers engage with more content.
        </div>
      </section>
    </section>
  );
}

function ReviewStat({ label, score }: { label: string; score: number }) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-3">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-xl font-semibold">{Math.round(score * 10) / 10}</span>
        <span className="text-xs text-muted-foreground">/10</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${Math.min(100, Math.round((score / 10) * 100))}%` }}
        />
      </div>
    </div>
  );
}