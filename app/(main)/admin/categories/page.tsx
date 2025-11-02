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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  Edit3,
  FolderTree,
  Layers3,
  Plus,
  Trash2,
} from "lucide-react";

const categories = [
  {
    name: "Living Spaces",
    status: "Active",
    children: [
      { name: "Lounge", status: "Active" },
      { name: "Dining", status: "Active" },
      { name: "Sleep", status: "Draft" },
    ],
  },
  {
    name: "Smart Home",
    status: "Active",
    children: [
      { name: "Lighting", status: "Active" },
      { name: "Climate", status: "Active" },
      { name: "Security", status: "Active" },
    ],
  },
  {
    name: "Experiential",
    status: "Draft",
    children: [
      { name: "Wellness", status: "Active" },
      { name: "Artisanal", status: "Draft" },
    ],
  },
];

export default function Page() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary">
            Information architecture
          </Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Category manager</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Shape the product universe with a holographic tree view and rapid editorial controls.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 text-sm">
              <Plus className="size-4" />
              Add category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new category</DialogTitle>
              <DialogDescription>
                Nest within an existing branch or create a top-level experience.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="categoryName">Category name</Label>
                <Input id="categoryName" placeholder="e.g. Immersive Living" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="parentCategory">Parent category</Label>
                <Input id="parentCategory" placeholder="Optional" />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/10 px-4 py-3 text-sm">
                <span>Publish immediately</span>
                <Switch defaultChecked />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Create category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FolderTree className="size-5 text-primary" />
              Category tree
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-xs text-primary">
              Drag-and-drop enabled in full experience. Use controls to stage experiments.
            </div>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name} className="rounded-2xl border border-border/60 bg-muted/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{category.name}</p>
                      <span className="text-xs text-muted-foreground">{category.children.length} subcategories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          category.status === "Active"
                            ? "border-emerald-400/60 text-emerald-500"
                            : "border-amber-400/60 text-amber-500",
                        )}
                      >
                        {category.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Edit3 className="size-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 border-l border-border/40 pl-6">
                    {category.children.map((child) => (
                      <li key={child.name} className="flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-background/60 px-4 py-2 text-sm">
                        <span>{child.name}</span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            child.status === "Active"
                              ? "border-emerald-400/60 text-emerald-500"
                              : "border-amber-400/60 text-amber-500",
                          )}
                        >
                          {child.status}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers3 className="size-5 text-primary" />
              Governance notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-border/60 bg-muted/10 p-4">
              <p className="font-medium text-foreground">Seasonal spotlight</p>
              <p className="text-xs text-muted-foreground">
                Elevate experiential subcategories ahead of festive calendar by activating AR showcases.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/10 p-4">
              <p className="font-medium text-foreground">A/B sandbox</p>
              <p className="text-xs text-muted-foreground">
                Duplicate trees to experiment with navigation flows across mobile, kiosk, and holographic storefronts.
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="outline" className="gap-2 text-sm">
              <Edit3 className="size-4" />
              Open sandbox
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

