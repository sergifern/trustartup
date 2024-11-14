import { fetchOrganizations } from '@/lib/data';
import Link from 'next/link';
import Areas from '@/components/areas';
import { Building2, ArrowUpRight, Users2, Briefcase, ShieldCheck } from "lucide-react";

export default async function CompaniesPage() {
  const data = await fetchOrganizations('startup');
  console.log(data);

  return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50/50 via-background to-background dark:from-violet-950/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Companies
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Discover innovative projects and companies building the future of Web3.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((company) => (
              <Link 
                key={company.id}
                href={`/companies/${company.id}`}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white to-violet-50/50 dark:from-gray-950 dark:to-violet-950/20 border border-violet-200/50 dark:border-violet-800/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-h-[5rem] flex flex-col">
                      <div className="flex flex-row items-center gap-2">
                        <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {company.name}
                          {company.domainInfo.status === 'verified' && <ShieldCheck className="h-4 w-4 text-emerald-600" />}   
                          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h3>
                        </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {company.description}
                      </p>
                    </div>
                  </div>
                  <Areas areas={company.areas} />

                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-violet-200/50 dark:border-violet-800/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users2 className="h-4 w-4" />
                      <span>{company.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{company.stage}</span>
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