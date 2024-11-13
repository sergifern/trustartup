import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Globe, Users2, Briefcase, TrendingUp, Newspaper, ShieldCheck, Share2, Calendar, Construction, ShieldAlert } from "lucide-react";
import Areas from "@/components/areas";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchDoc, fetchDomain } from '@/lib/data';
import { NewTwitterIcon, TelegramIcon, Linkedin02Icon } from "hugeicons-react";

export default async function CompanyProfile({
  params 
}: {
  params: { id: string };
}) {
  const company = await fetchDoc(params.id);
  const { domain }= await fetchDomain(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  {company.name}
                </h1>
                </div>
                <div className="flex items-center gap-1">
                 <p 
                 className={`font-medium text-sm ${
                    domain.status === 'verified' ? 'text-emerald-600' : 'text-muted-foreground'
                  }`}
                  >
                  {params.id}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {domain.status === 'verified' ? (
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        <>
                        <p>{domain.status === 'verified' ? "Domain owner verified by Context" : "Domain owner not verified yet"}</p>
                        <Link href={`https://app.ctx.xyz/domains/${params.id}`} target="_blank" className="text-violet-600 dark:text-violet-400 hover:underline">
                          View more
                        </Link>
                        </>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground">{company.description}</p>
              </div>
            </div>
            <Areas areas={company.areas} />
          </div>
          <div className="flex flex-row gap-2 items-end">
            <Link href={`https://trulink.ctx.xyz/${params.id}`} target="_blank">
              <div className="flex items-center space-x-2 p-2 cursor-pointer ">
                  <Share2 className="text-violet-600 dark:text-violet-300 text-lg" />
                  <div>
                    <h3 className="text-sm font-medium hover:text-violet-600 text-gray-900 dark:text-gray-100">Share the Trulink</h3>
                  </div>
              </div>
            </Link>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-md hover:shadow-violet-300">
                Subscribe on Telegram
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">         
           <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Founded</span>
            </div>
            <p className="font-semibold">{company.foundation}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Stage</span>
            </div>
            <p className="font-semibold">{company.stage}</p>
          </Card>
          <Card className="hidden p-4 bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20">
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
            <p className="font-semibold">{company.teamSize}</p>
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
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="news">
                Updates
                { company.updates && company.updates.length > 0 &&
                <span className="ml-1 h-4 w-4 items-baseline rounded-full bg-violet-400 text-white text-xs font-bold">
                  {company.updates.length}
                </span>}
            </TabsTrigger>          
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-muted-foreground">
                {company.longDescription}
              </p>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-violet-200/50 dark:border-violet-800/50">
                <div className="flex items-center gap-3">
                  {company.social && company.social?.x && (
                    <Link
                      href={company.social.x}
                      target="_blank"
                    >
                      <NewTwitterIcon
                        className="text-muted-foreground hover:text-blue-400 transition-colors"
                        width={18}
                        height={18} />
                    </Link>
                  )}
                  {company.social && company.social?.telegram && (
                    <Link
                      href={company.social.telegram}
                      target="_blank"
                    >
                      <TelegramIcon
                        className="text-muted-foreground hover:text-blue-400 transition-colors"
                        width={22}
                        height={22} />
                    </Link>
                  )}
                  {company.social && company.social?.linkedin && (
                    <Link
                      href={company.social.linkedin}
                      target="_blank"
                    >
                      <Linkedin02Icon
                        className="text-muted-foreground hover:text-blue-400 transition-colors"
                        width={20}
                        height={20} />
                    </Link>
                  )}
                  <Link href={company.website} target="_blank" className="text-muted-foreground hover:text-blue-400 transition-colors">
                    {company.website}
                  </Link>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Leadership Team</h3>
              {company.team && company.team.length > 0 ? (
                <div className="space-y-4">
                  {company.team.map((member: any) => (
                    <div className="grid gap-4">
                      <div key={member.name} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <Users2 className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="font-medium">{member.name}</p>
                          { member.domain && 
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Link href={`https://app.ctx.xyz/domains/${member.domain}`} target="_blank">
                                      <Image src={'/img/ctx-icon-dark.svg'} alt="ctx" width={20} height={20} />
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <>
                                    <p>User with Domain registered at Context</p>
                                    </>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                          }
                        </div>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(156,81,244,0.05)_50%,transparent_75%)] animate-pulse" />
                  <div className="relative flex items-start gap-6 p-6 rounded-lg border border-dashed border-violet-200 dark:border-violet-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          <Users2 className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">No members found</h4>
                        <p className="text-sm text-muted-foreground">
                          {company.name} team is not currently registered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-4">
            <Card className="p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                  <Construction className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Under Construction
                </h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  We're building something special! Soon you'll be able to track the latest partners working together with {company.name} right here.
                </p>
                <div className="inline-flex items-center rounded-full px-4 py-1 bg-violet-100/50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-300 text-sm">
                  <span>Check back soon</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="investors" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Funding History</h3>
              {company.investors && company.investors.length > 0 ? (
                <div className="space-y-4">
                  {company.investors.map((investment: any) => (
                    <div key={investment.round} className="flex items-center justify-between p-4 rounded-lg bg-violet-50 dark:bg-violet-900/20">
                      <div>
                        <p className="font-medium">{investment.name}</p>
                        <p className="text-sm text-muted-foreground">{investment.round}</p>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{investment.amount}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(156,81,244,0.05)_50%,transparent_75%)] animate-pulse" />
                  <div className="relative flex items-start gap-6 p-6 rounded-lg border border-dashed border-violet-200 dark:border-violet-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">$</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">No investment found</h4>
                        <p className="text-sm text-muted-foreground">
                          {company.name} has not yet received external funding or is not currently registered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent News</h3>
              {company.updates && company.updates.length > 0 ? (
                <div className="space-y-4">
                  {company.news && company.news.map((item: any) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <Newspaper className="h-5 w-5 text-violet-600" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(156,81,244,0.05)_50%,transparent_75%)] animate-pulse" />
                  <div className="relative flex items-start gap-6 p-6 rounded-lg border border-dashed border-violet-200 dark:border-violet-800">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          <Newspaper className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">No news found</h4>
                        <p className="text-sm text-muted-foreground">
                          {company.name} has not shared any updates yet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="space-y-4">
                {company.news && company.news.map((item: any) => (
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