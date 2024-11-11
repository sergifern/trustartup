import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Building2, TrendingUp, Users2 } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container mx-auto relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Discover
                </span>{" "}
                <span className="inline-block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  the Web3 Ecosystem
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Track companies, investments, and market trends in the decentralized economy.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/companies">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-600/20">
                  Browse Companies
                </Button>
              </Link>
              <Link href="/investors">
                <Button variant="outline" size="lg" className="border-violet-200 dark:border-violet-800 hover:bg-violet-100/20">
                  View Investors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-violet-200/30 dark:border-violet-800/30 bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Building2 className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">2,500+</div>
              <div className="text-sm text-muted-foreground">Companies Listed</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Users2 className="h-8 w-8 mb-2 text-violet-600 dark:text-violet-400" />
              <div className="text-2xl font-bold bg-gradient-to-br from-violet-600 to-purple-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <TrendingUp className="h-8 w-8 mb-2 text-purple-600 dark:text-purple-400" />
              <div className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">$25B+</div>
              <div className="text-sm text-muted-foreground">Total Investments</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <BarChart3 className="h-8 w-8 mb-2 text-pink-600 dark:text-pink-400" />
              <div className="text-2xl font-bold bg-gradient-to-br from-pink-600 to-rose-600 bg-clip-text text-transparent">12</div>
              <div className="text-sm text-muted-foreground">Market Sectors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Explore the Ecosystem
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border-violet-200/50 dark:border-violet-800/50">
            <Building2 className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-lg mb-2">Companies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Discover innovative Web3 startups and established players. Track their growth, funding rounds, and market impact.
            </p>
            <Link href="/companies" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View Companies →
            </Link>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border-violet-200/50 dark:border-violet-800/50">
            <Users2 className="h-8 w-8 mb-4 text-violet-600 dark:text-violet-400" />
            <h3 className="font-semibold text-lg mb-2">Investors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Connect with leading VCs and angel investors. Explore investment portfolios and funding strategies.
            </p>
            <Link href="/investors" className="text-sm text-violet-600 dark:text-violet-400 hover:underline">
              View Investors →
            </Link>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border-violet-200/50 dark:border-violet-800/50">
            <TrendingUp className="h-8 w-8 mb-4 text-purple-600 dark:text-purple-400" />
            <h3 className="font-semibold text-lg mb-2">Markets</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with market trends, sector analysis, and emerging opportunities in the Web3 space.
            </p>
            <Link href="/markets" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
              Explore Markets →
            </Link>
          </Card>
        </div>
      </div>

      {/* Latest Activity Section */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Latest Activity
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border-violet-200/50 dark:border-violet-800/50">
            <h3 className="font-semibold text-lg mb-4">Recent Funding Rounds</h3>
            <div className="space-y-4">
              {[
                { company: "DeFi Protocol X", amount: "$12M Series A" },
                { company: "NFT Platform Y", amount: "$8M Seed" },
                { company: "Web3 Infrastructure Z", amount: "$25M Series B" },
              ].map((round, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="font-medium">{round.company}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{round.amount}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border-violet-200/50 dark:border-violet-800/50">
            <h3 className="font-semibold text-lg mb-4">Trending Markets</h3>
            <div className="space-y-4">
              {[
                { market: "DeFi", growth: "+15% MoM" },
                { market: "Gaming", growth: "+25% MoM" },
                { market: "Infrastructure", growth: "+10% MoM" },
              ].map((trend, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="font-medium">{trend.market}</span>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400">{trend.growth}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}