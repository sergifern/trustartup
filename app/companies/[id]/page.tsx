"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Globe, Users2, Briefcase, TrendingUp, Newspaper, ShieldCheck, Share2 } from "lucide-react";

export default function CompanyProfile() {
  const company = {
    name: "DeFi Protocol X",
    logo: "https://images.unsplash.com/photo-1644658722874-00c1baf86d6e?q=80&w=100&h=100&auto=format&fit=crop",
    description: "Leading DeFi protocol revolutionizing decentralized lending and borrowing",
    founded: 2021,
    location: "Singapore",
    employees: "51-200",
    website: "https://defiprotocolx.io",
    funding: "$45M",
    stage: "Series B",
    industries: ["DeFi", "Lending", "Blockchain"],
    investors: [
      { name: "Crypto Ventures", amount: "$20M", round: "Series B" },
      { name: "Web3 Capital", amount: "$15M", round: "Series A" },
      { name: "Blockchain Fund", amount: "$10M", round: "Seed" },
    ],
    team: [
      { name: "Sarah Chen", role: "CEO & Co-founder" },
      { name: "Alex Kumar", role: "CTO & Co-founder" },
      { name: "Maria Garcia", role: "Head of Product" },
    ],
    news: [
      { title: "DeFi Protocol X Launches New Lending Platform", date: "2024-03-15" },
      { title: "Series B Funding Round Closed", date: "2024-02-01" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  {company.name}
                </h1>
                <p className="text-muted-foreground">{company.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {company.industries.map((industry) => (
                <span key={industry} className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 text-sm">
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex gap-3">
              <Button variant="link" className="border-violet-200 dark:border-violet-800">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-1" /> Verify on Context
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                Subscribe on Telegram
              </Button>
            </div>
            <div className="flex items-center space-x-2 p-2 cursor-pointer ">
              <Share2 className="text-violet-600 dark:text-violet-300 text-lg" />
              <div>
                <h3 className="text-sm font-medium hover:text-violet-600 text-gray-900 dark:text-gray-100">Share the verified Context LinkTree</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Stage</span>
            </div>
            <p className="font-semibold">{company.stage}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-violet-600" />
              <span className="text-sm text-muted-foreground">Total Funding</span>
            </div>
            <p className="font-semibold">{company.funding}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Users2 className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-muted-foreground">Team Size</span>
            </div>
            <p className="font-semibold">{company.employees}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-pink-600" />
              <span className="text-sm text-muted-foreground">Location</span>
            </div>
            <p className="font-semibold">{company.location}</p>
          </Card>
        </div>
        

        {/* Detailed Information */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-violet-100/50 dark:bg-violet-900/20">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="news">
                Updates
                <span className="ml-1 h-4 w-4 items-baseline rounded-full bg-violet-400 text-white text-xs font-bold">
                  2
                </span>
            </TabsTrigger>          
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground">
                {company.description} Founded in {company.founded}, the company has quickly become a leading player in the DeFi space, 
                offering innovative solutions for decentralized finance.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Leadership Team</h3>
              <div className="grid gap-4">
                {company.team.map((member) => (
                  <div key={member.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      <Users2 className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="investors" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Funding History</h3>
              <div className="space-y-4">
                {company.investors.map((investment) => (
                  <div key={investment.round} className="flex items-center justify-between p-4 rounded-lg bg-violet-50 dark:bg-violet-900/20">
                    <div>
                      <p className="font-medium">{investment.name}</p>
                      <p className="text-sm text-muted-foreground">{investment.round}</p>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{investment.amount}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent News</h3>
              <div className="space-y-4">
                {company.news.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <Newspaper className="h-5 w-5 text-violet-600" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
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