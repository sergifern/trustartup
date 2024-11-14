import { fetchOrganizations } from '@/lib/data';
import { Badge } from "@/components/ui/badge";
import { Briefcase, ArrowUpRight, Building2, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";

const investors = [
  {
    id: 1,
    name: "Web3 Capital",
    description: "Leading venture capital firm focused on early-stage Web3 startups. Specializing in DeFi and infrastructure investments.",
    aum: "$500M",
    stage: "Series A-B",
    tags: ["DeFi", "Infrastructure", "Gaming"],
    portfolio: "45+ Companies",
    location: "Singapore",
  },
  {
    id: 2,
    name: "Blockchain Ventures",
    description: "Global investment firm backing the next generation of blockchain innovators. Focus on seed to Series A investments.",
    aum: "$250M",
    stage: "Seed-Series A",
    tags: ["NFT", "DeFi", "Web3"],
    portfolio: "30+ Companies",
    location: "London",
  },
  {
    id: 3,
    name: "Digital Assets Fund",
    description: "Strategic investor in breakthrough blockchain technologies. Supporting founders from inception to scale.",
    aum: "$750M",
    stage: "Series A-C",
    tags: ["Infrastructure", "Privacy", "DeFi"],
    portfolio: "60+ Companies",
    location: "New York",
  },
];

export default async function InvestorsPage() {
  //const {domains} = await fetchAllDomains('vc');
  //console.log(domains);
  const investors = await fetchOrganizations('vc');
  console.log(investors);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          Investors
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Discover leading venture capital firms and investors in the Web3 ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor) => (
            <Link 
              key={investor.id}
              href={''}
              className="cursor-not-allowed group relative overflow-hidden rounded-xl bg-gradient-to-b from-white to-emerald-50/50 dark:from-gray-950 dark:to-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-h-[5rem] flex flex-col">
                    <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {investor.name}
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {investor.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {/*investor.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary" 
                      className="bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                    >
                      {tag}
                    </Badge>
                  ))*/}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>{investor?.investments}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{investor?.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}