"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { BotMessageSquare } from "lucide-react";
import { Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const navigation = [
  { name: "Companies", href: "/companies" },
  { name: "Investors", href: "/investors" },
  { name: "Markets", href: "/markets" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Blockbase</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.startsWith(item.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bot className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-600" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Web3 Intelligence AI
                </DialogTitle>
                <DialogDescription className="space-y-4 pt-4">
                  <p>
                    Coming soon! Our advanced AI chatbot will be your personal guide to the Web3 ecosystem.
                  </p>
                  <div className="rounded-lg bg-violet-50 dark:bg-violet-900/20 p-4 text-sm">
                    <p className="font-medium mb-2">Features to expect:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Real-time insights from verified onchain data</li>
                      <li>• Deep analysis of Web3 projects and investments</li>
                      <li>• Market trends and prediction modeling</li>
                      <li>• Custom reports and analytics</li>
                    </ul>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" className="border-violet-200 dark:border-violet-800 hover:bg-violet-100/20">
            Add your Company
          </Button>
        </div>
      </div>
    </header>
  );
}