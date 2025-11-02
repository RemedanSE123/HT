"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Home,
  LocateFixed,
  MapPin,
  Package,
  Percent,
  ShoppingCart,
  Sparkles,
  Star,
} from "lucide-react";

import { PRODUCTS } from "@/components/features/products/data";
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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type CheckoutStep = 1 | 2 | 3;

const CART_ITEMS = PRODUCTS.slice(0, 3).map((product, index) => ({
  id: `${product.id}-${index}`,
  product,
  quantity: index === 0 ? 1 : index === 1 ? 2 : 1,
}));

const UPSALE_ITEMS = PRODUCTS.slice(3, 6);

export default function CartPage() {
  const [items, setItems] = useState(CART_ITEMS);
  const [discountCode, setDiscountCode] = useState("AI-NOVEMBER");
  const [shippingZip, setShippingZip] = useState("10001");
  const [shippingMethod, setShippingMethod] = useState("express");
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(1);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items],
  );

  const shippingCost = shippingMethod === "express" ? 24 : shippingMethod === "priority" ? 12 : 0;
  const estimatedTax = subtotal * 0.08;
  const discountAmount = discountCode ? Math.min(subtotal * 0.1, 120) : 0;
  const total = subtotal + shippingCost + estimatedTax - discountAmount;

  const handleQuantityUpdate = (id: string, value: number) => {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(6, value)) }
          : item,
      ),
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((previous) => previous.filter((item) => item.id !== id));
  };

  const handleAddUpsell = (productId: string) => {
    const product = PRODUCTS.find((candidate) => candidate.id === productId);
    if (!product) return;

    setItems((previous) => {
      const existing = previous.find((item) => item.product.id === productId);
      if (existing) {
        return previous.map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: Math.min(6, item.quantity + 1),
              }
            : item,
        );
      }

      return [...previous, { id: `${product.id}-${Date.now()}`, product, quantity: 1 }];
    });
  };

  const proceedToNextStep = () => {
    setCheckoutStep((current) => Math.min(3, (current + 1) as CheckoutStep));
  };

  const goToPreviousStep = () => {
    setCheckoutStep((current) => Math.max(1, (current - 1) as CheckoutStep));
  };

  return (
    <section className="space-y-10 pb-20">
      <header className="space-y-3">
        <Badge variant="outline" className="rounded-full border-dashed">
          Phase 7 · Checkout intelligence
        </Badge>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Smart cart & checkout</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Tactile cart UI with predictive upsells, adaptive pricing, and a multi-step checkout blueprint.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <Sparkles className="size-4" /> AI merchandising layer
          </span>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col gap-1">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingCart className="size-5 text-primary" /> 7.1 Cart items
              </CardTitle>
              <CardDescription>
                Cinematic cards with quantities, dynamic totals, and removal actions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {items.length === 0 ? (
                <p className="rounded-2xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                  Your cart is feeling empty. Explore the catalog to add products.
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityUpdate}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3 border-t bg-muted/30 p-6 text-sm text-muted-foreground">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-foreground">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span>Estimated shipping</span>
                <span className="font-medium">${shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span>Estimated tax</span>
                <span className="font-medium">${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex flex-wrap items-center justify-between gap-3 text-emerald-600">
                  <span>Promotion applied</span>
                  <span className="font-semibold">- ${discountAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3 text-base font-semibold">
                <span>Total</span>
                <span>${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </CardFooter>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="size-5 text-primary" /> You forgot these!
                </CardTitle>
                <CardDescription>AI suggests complementary items to complete the set.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {UPSALE_ITEMS.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 rounded-2xl border p-3 transition hover:-translate-y-1 hover:border-primary/40"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border bg-muted/40">
                      <Image
                        src={product.media.primary}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-sm font-semibold leading-tight">{product.name}</p>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">${product.price.toLocaleString()}</span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Star className="size-4 text-amber-400" /> {product.rating.toFixed(1)}
                      </div>
                    </div>
                    <Button type="button" size="sm" className="rounded-full" onClick={() => handleAddUpsell(product.id)}>
                      Add
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    <Percent className="size-5" /> Smart discount suggestor
                  </CardTitle>
                  <CardDescription>
                    Unlock AI-curated promotions and loyalty boosts before checkout.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-primary">Earn an extra 5% off</p>
                    <p className="text-xs text-muted-foreground">
                      Apply code <span className="font-semibold">{discountCode}</span> to stack your loyalty unlock.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input value={discountCode} onChange={(event) => setDiscountCode(event.target.value)} placeholder="Enter promo code" />
                    <Button type="button" variant="secondary" className="rounded-xl">
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Suggestions adapt based on cart composition, stock velocity, and loyalty tier.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    <LocateFixed className="size-5" /> Shipping calculator
                  </CardTitle>
                  <CardDescription>
                    Preview arrival speed by zip code and fulfillment priority.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="zip">
                      Destination ZIP
                    </label>
                    <Input
                      id="zip"
                      value={shippingZip}
                      onChange={(event) => setShippingZip(event.target.value)}
                      placeholder="ZIP / Postal code"
                    />
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Choose priority</p>
                    <div className="grid gap-2">
                      {[
                        { id: "express", label: "Express (1-2 days)", price: 24 },
                        { id: "priority", label: "Priority (3-5 days)", price: 12 },
                        { id: "standard", label: "Standard (5-7 days)", price: 0 },
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setShippingMethod(option.id)}
                          className={cn(
                            "flex items-center justify-between rounded-2xl border px-4 py-2",
                            shippingMethod === option.id
                              ? "border-primary bg-primary/5"
                              : "border-muted hover:border-primary/40",
                          )}
                        >
                          <span>{option.label}</span>
                          <span>${option.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/20 p-4 text-xs text-muted-foreground">
                    Estimated delivery for {shippingZip}: <span className="font-semibold text-foreground">
                      {shippingMethod === "express"
                        ? "Arrives within 2 days"
                        : shippingMethod === "priority"
                          ? "Arrives later this week"
                          : "Estimated within 7 days"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="size-5 text-primary" /> 7.3 Checkout flow prototype
              </CardTitle>
              <CardDescription>
                Guided three-step journey with progress indicator and smooth transitions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <CheckoutProgress step={checkoutStep} />

              <div className="relative overflow-hidden rounded-3xl border bg-muted/20 p-6 shadow-inner">
                <div className="space-y-5 transition-all duration-500">
                  {checkoutStep === 1 && <ShippingStep />}
                  {checkoutStep === 2 && <PaymentStep />}
                  {checkoutStep === 3 && <ReviewStep total={total} />}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-full"
                  disabled={checkoutStep === 1}
                  onClick={goToPreviousStep}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className="rounded-full"
                  onClick={checkoutStep === 3 ? undefined : proceedToNextStep}
                >
                  {checkoutStep === 3 ? "Ready to place order" : "Continue"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="flex flex-col gap-3 p-6 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-wide">Checklist</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-500" /> Cart item cards with quantities & totals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-500" /> Upsell, discount intelligence, shipping calculator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-500" /> Multi-step checkout UI
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

type CartItemCardProps = {
  item: (typeof CART_ITEMS)[number];
  onQuantityChange: (id: string, value: number) => void;
  onRemove: (id: string) => void;
};

function CartItemCard({ item, onQuantityChange, onRemove }: CartItemCardProps) {
  const { product, quantity, id } = item;

  return (
    <div className="group grid gap-4 rounded-3xl border border-muted-foreground/20 bg-background/80 p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:grid-cols-[160px_1fr]">
      <div className="relative h-36 w-full overflow-hidden rounded-2xl border bg-muted/40">
        <Image
          src={product.media.primary}
          alt={product.name}
          width={320}
          height={240}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{product.brand}</p>
              <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
            </div>
            <Button type="button" variant="ghost" size="sm" className="rounded-full" onClick={() => onRemove(id)}>
              Remove
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => onQuantityChange(id, quantity - 1)}
            >
              –
            </Button>
            <span className="min-w-[48px] text-center text-lg font-semibold">{quantity}</span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => onQuantityChange(id, quantity + 1)}
            >
              +
            </Button>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Unit price</p>
            <p className="text-lg font-semibold text-foreground">${product.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutProgress({ step }: { step: CheckoutStep }) {
  const steps: { label: string; icon: React.ReactNode; value: CheckoutStep }[] = [
    { label: "Shipping", icon: <Home className="size-4" />, value: 1 },
    { label: "Payment", icon: <CreditCard className="size-4" />, value: 2 },
    { label: "Review", icon: <Package className="size-4" />, value: 3 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
        {steps.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <span className={cn("flex items-center gap-2 font-semibold", step === item.value && "text-primary") }>
              {item.icon}
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(step / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

function ShippingStep() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Step 1 · Shipping address</h3>
        <p className="text-sm text-muted-foreground">
          Enter destination details for predictive delivery windows and localized offers.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Full name" />
        <Input placeholder="Phone number" />
        <Input placeholder="Street address" className="md:col-span-2" />
        <Input placeholder="City" />
        <Input placeholder="State / Province" />
        <Input placeholder="Postal code" />
        <Input placeholder="Country" className="md:col-span-2" />
      </div>
    </div>
  );
}

function PaymentStep() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Step 2 · Payment method</h3>
        <p className="text-sm text-muted-foreground">
          Tokenized card vaulting, alternative wallets, and buy-now-pay-later options appear here.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input placeholder="Cardholder name" />
        <Input placeholder="Card number" />
        <Input placeholder="Expiry date" />
        <Input placeholder="Security code" />
      </div>
      <div className="rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/20 p-4 text-xs text-muted-foreground">
        Future integration: express checkout, stored cards, and loyalty-based payment incentives.
      </div>
    </div>
  );
}

function ReviewStep({ total }: { total: number }) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Step 3 · Review order</h3>
        <p className="text-sm text-muted-foreground">
          Confirm shipment details, payment method, and applied offers before placing the order.
        </p>
      </div>
      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Items total</span>
          <span>${(total / 1.08).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>Based on calculator</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax estimate</span>
          <span>Included</span>
        </div>
      </div>
      <div className="rounded-2xl border border-primary/40 bg-primary/5 p-4">
        <p className="text-sm font-semibold">Order total</p>
        <p className="text-2xl font-bold text-primary">${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
      </div>
      <Button type="button" className="w-full rounded-full">
        Place order (Prototype)
      </Button>
    </div>
  );
}

