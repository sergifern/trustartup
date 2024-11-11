export default function MarketsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Markets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["DeFi", "NFTs", "Gaming", "Infrastructure", "Privacy", "DAOs", "Layer 2", "Web3 Social", "Metaverse"].map((market) => (
          <div key={market} className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">{market}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Explore companies and investments in {market.toLowerCase()}.
            </p>
            <div className="text-sm text-muted-foreground">
              {Math.floor(Math.random() * 1000)} companies
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}