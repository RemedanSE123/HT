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
import { cn } from "@/lib/utils";
import { Building2, Edit3, MapPin, Plus, ShieldCheck, Trash2 } from "lucide-react";

const addresses = [
  {
    label: "Sky Residence",
    type: "Primary home",
    tags: ["Smart lock", "Valet drop", "Sensor sync"],
    description: "Sky Residences · Dubai Hills · Level 48",
    default: true,
  },
  {
    label: "Ocean Pavilion",
    type: "Weekend villa",
    tags: ["Fragrance staging", "Cold chain"],
    description: "Palm Jumeirah Crescent · Pavilion 9",
    default: false,
  },
  {
    label: "Atelier Nexus",
    type: "Design studio",
    tags: ["Signature pickup", "Art handling"],
    description: "Alserkal Avenue · Unit B12",
    default: false,
  },
];

export default function SavedAddressesPage() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Logistics DNA
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight">Saved addresses</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Curate delivery and pickup hubs with concierge-provisioned access levels.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 text-sm">
              <Plus className="size-4" />
              Add address
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add an address</DialogTitle>
              <DialogDescription>
                Store trusted destinations for seamless concierge scheduling and access control.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="addressLabel">Address label</Label>
                <Input id="addressLabel" placeholder="e.g. Sky Residence" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="addressLine">Address details</Label>
                <Input id="addressLine" placeholder="Building · Street · Level / Unit" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accessNotes">Concierge notes</Label>
                <textarea
                  id="accessNotes"
                  className="min-h-[100px] rounded-lg border border-border/60 bg-muted/10 px-3 py-2 text-sm"
                  placeholder="Access codes, parking instructions, ambient preferences..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save address</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {addresses.map((address) => (
          <Card
            key={address.label}
            className={cn(
              "border-border/60 bg-card/70 backdrop-blur transition-transform hover:-translate-y-1",
              address.default && "border-primary/60 shadow-lg"
            )}
          >
            <CardHeader className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-lg">{address.label}</CardTitle>
                <p className="text-xs text-muted-foreground">{address.type}</p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5" />
                Synced
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{address.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {address.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/40 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" />
                Tiered concierge access active
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit3 className="size-4" />
                  <span className="sr-only">Edit address</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="size-4" />
                  <span className="sr-only">Delete address</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
        <Card className="flex min-h-[260px] flex-col items-center justify-center gap-4 border-dashed border-primary/40 bg-primary/5 text-center">
          <Building2 className="size-10 text-primary" />
          <div className="space-y-2">
            <p className="text-lg font-semibold">Need another hub?</p>
            <p className="text-sm text-muted-foreground">
              Create bespoke delivery zones with environmental presets.
            </p>
          </div>
          <Button variant="secondary" className="gap-2">
            <Plus className="size-4" />
            Add address
          </Button>
        </Card>
      </div>
    </section>
  );
}

