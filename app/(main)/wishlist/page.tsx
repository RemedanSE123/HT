"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FolderPlus, MoreVertical, Share2, Sparkles, Trash2 } from "lucide-react";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type WishlistItem = {
  id: string;
  productId: string;
  folder: string;
  priceAlert: boolean;
};

const INITIAL_FOLDERS = ["Favorites", "Gifts", "Studio" as const];

const INITIAL_ITEMS: WishlistItem[] = PRODUCTS.slice(0, 6).map((product, index) => ({
  id: `${product.id}-${index}`,
  productId: product.id,
  folder: index % 2 === 0 ? "Favorites" : "Gifts",
  priceAlert: index % 3 === 0,
}));

export default function WishlistPage() {
  const [folders, setFolders] = useState<string[]>(() => [...INITIAL_FOLDERS]);
  const [items, setItems] = useState<WishlistItem[]>(INITIAL_ITEMS);
  const [activeFolder, setActiveFolder] = useState<string>(folders[0] ?? "All");
  const [newFolderName, setNewFolderName] = useState("");

  const productsById = useMemo(() => {
    return new Map(PRODUCTS.map((product) => [product.id, product]));
  }, []);

  const filteredItems = items.filter((item) =>
    activeFolder === "All" ? true : item.folder === activeFolder,
  );

  const createFolder = () => {
    const value = newFolderName.trim();
    if (!value || folders.includes(value)) return;
    setFolders((current) => [...current, value]);
    setActiveFolder(value);
    setNewFolderName("");
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const togglePriceAlert = (id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, priceAlert: !item.priceAlert } : item,
      ),
    );
  };

  const moveItemToFolder = (id: string, folder: string) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, folder } : item)),
    );
  };

  return (
    <section className="space-y-10 pb-16">
      <header className="space-y-3">
        <Badge variant="outline" className="rounded-full border-dashed">
          Phase 8 · Wishlist operating system
        </Badge>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Curated wishlist</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Organize future purchases by vibe, share collections, and enable smart price alerts.
            </p>
          </div>
          <Button type="button" variant="ghost" className="gap-2 rounded-full text-xs font-semibold uppercase tracking-wide text-primary">
            <Sparkles className="size-4" /> Predictive gifting insights
          </Button>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                8.2 Folder system
              </CardTitle>
              <CardDescription>Segment wishlists by theme, recipient, or project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant={activeFolder === "All" ? "secondary" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveFolder("All")}
                >
                  All ({items.length})
                </Button>
                {folders.map((folder) => (
                  <Button
                    key={folder}
                    type="button"
                    variant={activeFolder === folder ? "secondary" : "outline"}
                    className="rounded-full"
                    onClick={() => setActiveFolder(folder)}
                  >
                    {folder}
                    <Badge variant="secondary" className="ml-2 rounded-full">
                      {items.filter((item) => item.folder === folder).length}
                    </Badge>
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Input
                  value={newFolderName}
                  onChange={(event) => setNewFolderName(event.target.value)}
                  placeholder="Create new folder"
                  className="rounded-xl"
                />
                <Button type="button" className="w-full rounded-xl" onClick={createFolder}>
                  <FolderPlus className="mr-2 size-4" /> Add folder
                </Button>
              </div>

              <Button type="button" variant="outline" className="w-full rounded-xl">
                <Share2 className="mr-2 size-4" /> Share wishlist link
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Price change alerts
              </CardTitle>
              <CardDescription>Toggle to receive adaptive pricing notifications per item.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredItems.map((entry) => {
                const product = productsById.get(entry.productId);
                if (!product) return null;

                return (
                  <div key={entry.id} className="flex items-center justify-between rounded-2xl border bg-muted/20 px-4 py-3">
                    <span className="text-sm font-medium">{product.name}</span>
                    <Switch checked={entry.priceAlert} onCheckedChange={() => togglePriceAlert(entry.id)} />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                Wishlist items
              </CardTitle>
              <CardDescription>Apple-inspired grid with hover depth and quick actions.</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredItems.length === 0 ? (
                <p className="rounded-2xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                  No items in this folder yet. Add products from the catalog to curate your set.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredItems.map((entry) => {
                    const product = productsById.get(entry.productId);
                    if (!product) return null;

                    return (
                      <Card
                        key={entry.id}
                        className="group relative overflow-hidden rounded-3xl border border-muted/20 bg-background/80 shadow-lg transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl"
                      >
                        <CardContent className="space-y-4 p-5">
                          <div className="relative h-48 w-full overflow-hidden rounded-2xl border bg-muted/40">
                            <Image
                              src={product.media.primary}
                              alt={product.name}
                              width={480}
                              height={320}
                              className="size-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <Badge className="absolute left-4 top-4 rounded-full bg-background/80">
                              {product.brand}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">{entry.folder}</p>
                                <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button type="button" variant="ghost" size="icon" className="rounded-full">
                                    <MoreVertical className="size-4" />
                                    <span className="sr-only">Wishlist item actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                  <DropdownMenuLabel>Move to folder</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  {folders.map((folder) => (
                                    <DropdownMenuItem key={folder} onSelect={() => moveItemToFolder(entry.id, folder)}>
                                      {folder}
                                    </DropdownMenuItem>
                                  ))}
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive" onSelect={() => removeItem(entry.id)}>
                                    <Trash2 className="mr-2 size-4" /> Remove
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                            <div className="flex items-center justify-between text-sm font-semibold text-primary">
                              ${product.price.toLocaleString()}
                              <Badge variant={entry.priceAlert ? "secondary" : "outline"} className="rounded-full">
                                {entry.priceAlert ? "Alert on" : "Alert off"}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t bg-muted/20 p-4">
                          <Button type="button" variant="secondary" size="sm" className="rounded-full">
                            View product
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="rounded-full text-destructive hover:text-destructive"
                            onClick={() => removeItem(entry.id)}
                          >
                            Remove
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}