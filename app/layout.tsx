import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Toaster } from "@/components/ui/toaster";
import { Database, Twitter, Github, Linkedin, Hash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockBase - Decentralized Company Intelligence",
  description: "Discover and track companies, investments, and trends in the Web3 ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <MainNav />
            <main className="">{children}</main>
            <footer className="border-t md:py-0 container mx-auto py-8 bg-gradient-to-b from-background to-violet-50/20 dark:to-violet-950/20">
            <div className="container flex flex-col md:flex-row items-start justify-between gap-8 p-8">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Blockbase. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link 
                      href="https://twitter.com/web3crunchbase" 
                      target="_blank"
                      className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link 
                      href="https://github.com/web3crunchbase" 
                      target="_blank"
                      className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link 
                      href="https://linkedin.com/company/web3crunchbase" 
                      target="_blank"
                      className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link 
                      href="https://farcaster.xyz/web3crunchbase" 
                      target="_blank"
                      className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Hash className="h-4 w-4" />
                      <span className="sr-only">Farcaster</span>
                    </Link>
                    <div className="border-l pl-4 ml-2">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-blue-950 dark:text-slate-200">Powered by</span>
                    <Image 
                      src="/img/logo-dark.svg" 
                      alt="Logo" 
                      width={100} 
                      height={64} 
                      className="pb-1 dark:hidden"
                    />
                    <Image 
                      src="/img/logo-white.svg" 
                      alt="Logo" 
                      width={100} 
                      height={64} 
                      className="pb-1 hidden dark:block"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built on Context DNS3, this platform leverages decentralized data storage to ensure 
                    organizational sovereignty. All company and investment data is stored on-chain, 
                    enabling transparent, verifiable, and self-governed information management by the 
                    organizations themselves. This approach ensures data integrity and gives 
                    organizations full control over their digital presence.
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}