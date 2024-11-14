"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Briefcase, TrendingUp, Globe, PieChart, BarChart } from "lucide-react";

export default function InvestorProfile() {
  const investor = {
    name: "Web3 Capital",
    logo: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=100&h=100&auto=format&fit=crop",
    description: "Leading venture capital firm focused on Web3 and blockchain investments",
    founded: 2018,
    location: "Singapore",
    aum: "$500M",
    investments: 45,
    focus: ["DeFi", "Infrastructure", "Web3 Gaming"],
    portfolio: [
      { name: "DeFi Protocol X", amount: "$20M", stage: "Series B" },
      { name: "NFT Platform Y", amount: "$15M", stage: "Series A" },
      { name: "Web3 Infrastructure Z", amount: "$10M", stage: "Seed" },
    ],
    stats: {
      avgDealSize: "$12M",
      exitCount: 5,
      activeInvestments: 32,
    },
    sectors: [
      { name: "DeFi", percentage: 40 },
      { name: "Infrastructure", percentage: 30 },
      { name: "Gaming", percentage: 20 },
      { name: "Other", percentage: 10 },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {investor.name}
                </h1>
                <p className="text-muted-foreground">{investor.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {/*investor.focus.map((area) => (
                <span key={area} className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 text-sm">
                  {area}
                </span>
              ))*/}
            </div>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
            Connect
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-muted-foreground">AUM</span>
            </div>
            <p className="font-semibold">{investor.aum}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Investments</span>
            </div>
            <p className="font-semibold">{investor.investments}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <BarChart className="h-4 w-4 text-cyan-600" />
              <span className="text-sm text-muted-foreground">Avg Deal Size</span>
            </div>
            <p className="font-semibold">{investor.stats.avgDealSize}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Location</span>
            </div>
            <p className="font-semibold">{investor.location}</p>
          </Card>
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="sectors">Sectors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground">
                {investor.description} Founded in {investor.founded}, the firm has established itself as a key player
                in the Web3 investment landscape with a strong track record of successful exits and continued growth.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Investment Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Active Investments</p>
                  <p className="text-xl font-semibold">{investor.stats.activeInvestments}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Exits</p>
                  <p className="text-xl font-semibold">{investor.stats.exitCount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Deal Size</p>
                  <p className="text-xl font-semibold">{investor.stats.avgDealSize}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio Companies</h3>
              <div className="space-y-4">
                {investor.portfolio.map((company) => (
                  <div key={company.name} className="flex items-center justify-between p-4 rounded-lg bg-violet-50 dark:bg-violet-900/20">
                    <div>
                      <p className="font-medium">{company.name}</p>
                      <p className="text-sm text-muted-foreground">{company.stage}</p>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{company.amount}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="sectors" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Investment Sectors</h3>
              <div className="space-y-4">
                {investor.sectors.map((sector) => (
                  <div key={sector.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{sector.name}</span>
                      <span className="text-muted-foreground">{sector.percentage}%</span>
                    </div>
                    <div className="h-2 bg-violet-100 dark:bg-violet-900/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
                        style={{ width: `${sector.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}