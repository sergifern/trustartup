import { fetchAllDomains } from '@/lib/data';
import Link from 'next/link';

export default async function CompaniesPage() {
  const {domains} = await fetchAllDomains('startup');
  console.log(domains);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain: any) => (
          <Link href={`/companies/${domain.id}`}>
            <div key={domain.id} className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-2">{domain.fullDomain}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {domain.description}
              </p>
              <div className="text-sm text-muted-foreground">
                Founded: {domain.founded} • {domain.stage}
              </div>
            </div>
          </Link>
        ))}

        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Company {i + 1}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Building innovative solutions in the Web3 space.
            </p>
            <div className="text-sm text-muted-foreground">
              Founded: 2024 • Series A
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}