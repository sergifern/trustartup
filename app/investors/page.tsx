import { fetchAllDomains } from '@/lib/data';

export default async function InvestorsPage() {
  const {domains} = await fetchAllDomains('vc');
  console.log(domains);
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Investors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain: any) => (
          <div key={domain.id} className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">{domain.fullDomain}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {domain.description}
            </p>
            <div className="text-sm text-muted-foreground">
              Founded: {domain.founded} • {domain.stage}
            </div>
          </div>
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Investor {i + 1}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leading Web3 venture capital firm.
            </p>
            <div className="text-sm text-muted-foreground">
              Portfolio: {Math.floor(Math.random() * 50)} companies
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}