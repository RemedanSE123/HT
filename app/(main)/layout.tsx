import type { ReactNode } from "react";

import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-background">
      <Header />
      <div className="flex-1 w-full">
        {children}
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}

