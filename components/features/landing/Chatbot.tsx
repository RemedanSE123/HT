"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-28 right-4 z-50 sm:bottom-16 sm:right-10 lg:right-16">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="assistant"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="pointer-events-auto mb-4 w-80 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 text-white shadow-2xl"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Hiba AI Concierge</p>
                <p className="text-xs text-zinc-400">
                  Ask about products, fulfillment, or commerce insights.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 rounded-full text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                ×
              </Button>
            </div>
            <div className="space-y-3 text-sm text-blue-100/90">
              <AssistantBubble>
                Hi! I can guide you through immersive product demos, AI
                merchandising, or logistics automation.
              </AssistantBubble>
              <AssistantBubble variant="ghost">
                Try: “Design a launch campaign for a new sustainable furniture
                line.”
              </AssistantBubble>
            </div>
            <form className="mt-4 space-y-2">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3">
                <Input
                  placeholder="Type your question..."
                  className="border-none bg-transparent text-sm text-white placeholder:text-zinc-400 focus-visible:ring-0"
                />
                <Button type="submit" size="icon" variant="ghost" className="text-blue-300">
                  <Send className="size-4" />
                </Button>
              </div>
              <p className="text-[11px] text-zinc-500">
                Prototype only. Responses are simulated for demo purposes.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_-20px] shadow-blue-600/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.96 }}
        aria-expanded={isOpen}
        aria-label="Open AI assistant"
      >
        <MessageCircle className="size-5" />
        AI Assistant
      </motion.button>
    </div>
  );
}

interface AssistantBubbleProps {
  children: ReactNode;
  variant?: "default" | "ghost";
}

function AssistantBubble({ children, variant = "default" }: AssistantBubbleProps) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        variant === "default"
          ? "border-blue-500/20 bg-blue-500/20"
          : "border-white/10 bg-white/5 text-blue-200"
      }`}
    >
      {children}
    </div>
  );
}


