"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  Boxes,
  CheckCircle2,
  ImagePlus,
  ListFilter,
  Plus,
  Search,
  Tags,
  Warehouse,
} from "lucide-react";

const products = [
  {
    sku: "SKU-GLC-048",
    name: "Gravity Lounge Chair",
    category: "Living",
    price: "AED 12,800",
    stock: "18",
    status: "In stock",
  },
  {
    sku: "SKU-ALB-213",
    name: "Adaptive Lighting Bundle",
    category: "Smart home",
    price: "AED 7,450",
    stock: "9",
    status: "Low stock",
  },
  {
    sku: "SKU-SOT-112",
    name: "Serenity Oil Trilogy",
    category: "Wellness",
    price: "AED 680",
    stock: "124",
    status: "In stock",
  },
  {
    sku: "SKU-QES-991",
    name: "Quantum Espresso Station",
    category: "Gourmet",
    price: "AED 18,300",
    stock: "12",
    status: "Critical",
  },
];

const statusTone: Record<string, string> = {
  "In stock": "bg-emerald-400/10 text-emerald-500",
  "Low stock": "bg-amber-400/10 text-amber-500",
  Critical: "bg-destructive/10 text-destructive",
};

export default function Page() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary">
            Merchandise governance
          </Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Product management</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Curate catalog entries, synchronize media, and orchestrate variant availability with stock intelligence.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2 text-sm">
            <ListFilter className="size-4" />
            Filters
          </Button>
          <Button className="gap-2 text-sm">
            <Plus className="size-4" />
            New product
          </Button>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Boxes className="size-5 text-primary" />
                Product catalog
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Search inventory across channels and accelerate edits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search by SKU, name, or tag" className="pl-9" />
              </div>
              <Button variant="outline" className="gap-2 text-sm">
                <Warehouse className="size-4" />
                Sync stock
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead className="sr-only">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.sku} className="bg-muted/20">
                    <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="text-muted-foreground">{product.category}</TableCell>
                    <TableCell>
                      <Badge className={cn("w-fit", statusTone[product.status] ?? "bg-muted text-muted-foreground")}>{product.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{product.price}</TableCell>
                    <TableCell className="text-right text-sm font-semibold text-primary">{product.stock}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-xs">
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            {products.length} products • Synced with boutique, warehouse, and AR showroom.
            <Button variant="link" className="px-0 text-xs text-primary">
              View archived SKUs
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Tags className="size-5 text-primary" />
              Create / edit product
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="productName">Product name</Label>
                <Input id="productName" placeholder="Gravity Lounge Chair" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="productSku">SKU</Label>
                <Input id="productSku" placeholder="SKU-XXX-000" className="font-mono text-xs" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="productPrice">Price (AED)</Label>
                <Input id="productPrice" placeholder="12,800" type="number" />
              </div>
            </div>

            <div className="grid gap-3">
              <Label>Images upload</Label>
              <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-center text-sm text-primary">
                <div className="flex flex-col items-center gap-2">
                  <ImagePlus className="size-8" />
                  Drag and drop or browse high-fidelity renders
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <Label>Variants</Label>
              <div className="grid gap-3 rounded-2xl border border-border/60 bg-muted/10 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Finish · Obsidian Black</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Finish · Arctic White</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Edit
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="gap-2 self-start text-xs">
                  <Plus className="size-4" />
                  Add variant
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              <Label>Stock control</Label>
              <div className="rounded-2xl border border-border/60 bg-muted/10 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Enable smart replenishment</span>
                  <Switch defaultChecked />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  AI-driven reorder points based on dynamic demand curves.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/50 bg-primary/5 p-4 text-xs text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Product passes holographic showcase requirements.
              </div>
              <p className="mt-2">
                Upload 8K renders to unlock immersive AR placement in the boutique app.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            <Button variant="ghost">Discard</Button>
            <Button>Save product</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

