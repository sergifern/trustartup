"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bot, Menu, Building2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import { OrganizationForm } from "./org-form";

const navigation = [
  { name: "Companies", href: "/companies" },
  { name: "Investors", href: "/investors" },
  { name: "Markets", href: "/markets" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="flex flex-1 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold ml-4">trustartup</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

        <div className="flex items-center space-x-4">

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
                      <li>• Real-time insights from verified on-chain data</li>
                      <li>• Deep analysis of Web3 projects and investments</li>
                      <li>• Market trends and prediction modeling</li>
                      <li>• Custom reports and analytics</li>
                    </ul>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:flex items-center gap-2 border-violet-200 dark:border-violet-800">
                <Building2 className="h-4 w-4" />
                Add your organization
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Request access</DialogTitle>
                <DialogDescription>
                Submit your organization's details to be featured on Trustartup. To be approved, you must be invited by an organization already part of the platform. Each organization has a limited number of invitations to share. This process ensures a smooth and verifiable onboarding experience while managing high demand.                
                </DialogDescription>
              </DialogHeader>
              <OrganizationForm />
            </DialogContent>
          </Dialog>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg px-2 py-1 rounded-md transition-colors",
                      pathname === item.href 
                        ? "bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-100" 
                        : "hover:bg-violet-50 dark:hover:bg-violet-900/20"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start gap-2 border-violet-200 dark:border-violet-800">
                      <Building2 className="h-4 w-4" />
                      Add your organization
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add your organization</DialogTitle>
                      <DialogDescription>
                        Submit your organization's details to be featured on Trustartup.
                      </DialogDescription>
                    </DialogHeader>
                    <OrganizationForm />
                  </DialogContent>
                </Dialog>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}