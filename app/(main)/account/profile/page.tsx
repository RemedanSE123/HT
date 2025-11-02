import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, UploadCloud, UserRound } from "lucide-react";

export default function AccountProfilePage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <Badge variant="outline" className="border-primary/40 text-primary">
          Identity & preferences
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Update contact data, manage omnichannel preferences, and fine-tune your concierge experience.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader className="flex flex-col gap-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <UserRound className="size-5 text-primary" />
              Profile identity
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              This information is visible to concierge teams and used for proactive support.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <Avatar className="size-24 border border-primary/30 bg-primary/5">
                <AvatarImage src="/placeholder-user.jpg" alt="Amina Rahman" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="gap-2 text-sm">
                <UploadCloud className="size-4" />
                Upload new avatar
              </Button>
              <p className="text-xs text-muted-foreground">
                PNG or JPG · Max 5 MB · Futuristic frames auto-applied
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" placeholder="Amina Rahman" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" placeholder="amina.rahman@hibatrading.io" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" placeholder="+971 55 123 4567" type="tel" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Rahman Design Collective" />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="ghost">Reset</Button>
              <Button>Save changes</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader className="flex flex-col gap-4">
              <CardTitle className="text-lg">Security layers</CardTitle>
              <p className="text-sm text-muted-foreground">
                Control authentication pathways and configure trusted guardians.
              </p>
            </CardHeader>
            <CardContent className="grid gap-5">
              <div className="flex items-start justify-between gap-6 rounded-2xl border border-primary/10 bg-primary/5 p-5">
                <div>
                  <p className="font-medium">Biometric signature</p>
                  <p className="text-xs text-muted-foreground">
                    Face ID + voice match for concierge and store pickups.
                  </p>
                </div>
                <Switch defaultChecked aria-label="Toggle biometric signature" />
              </div>
              <div className="flex items-start justify-between gap-6 rounded-2xl border border-border/60 bg-muted/10 p-5">
                <div>
                  <p className="font-medium">Adaptive MFA</p>
                  <p className="text-xs text-muted-foreground">
                    Risk-based prompts blend OTP, passkeys, and concierge verification.
                  </p>
                </div>
                <Switch defaultChecked aria-label="Toggle adaptive MFA" />
              </div>
              <div className="flex items-start justify-between gap-6 rounded-2xl border border-border/60 bg-muted/10 p-5">
                <div>
                  <p className="font-medium">Trusted delegate</p>
                  <p className="text-xs text-muted-foreground">
                    Assign access to family or office manager for shared deliveries.
                  </p>
                </div>
                <Switch aria-label="Toggle trusted delegate" />
              </div>
              <Button variant="secondary" className="gap-2 self-start">
                <Shield className="size-4" />
                Configure backup codes
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader className="flex flex-col gap-4">
              <CardTitle className="text-lg">Experience preferences</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fine-tune how we communicate, deliver, and surprise you.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-3">
                <Label htmlFor="language">Primary language</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary">English</Badge>
                  <Badge variant="outline">Arabic</Badge>
                  <Badge variant="outline">French</Badge>
                </div>
              </div>
              <div className="grid gap-3">
                <Label>Concierge channels</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Holographic calls",
                    "Encrypted messaging",
                    "In-boutique meetups",
                    "Smart home assistant",
                  ].map((method) => (
                    <label
                      key={method}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/10 p-4 text-sm"
                    >
                      <span>{method}</span>
                      <Switch defaultChecked />
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Personal notes for concierge</Label>
                <textarea
                  id="notes"
                  placeholder="Preferred ambient scent, arrival rituals, VIP lounge access instructions..."
                  className="min-h-[120px] rounded-xl border border-border/60 bg-muted/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" className="text-sm">
                  Save preference profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

