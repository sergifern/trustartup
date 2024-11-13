//const API_HOST = 'http://localhost:8080';
const API_HOST = 'https://api.ctx.xyz';
const ITEMS_PER_PAGE = 10;

type TDomain = {
  name: string;
  tld: string;
  owner: string;
  created: string;
  updated: string;
  status: string;
  fullDomain: string;
};

export async function fetchAllDomains(
  tld: string,
) {
  try {
    const res = await fetch(
      `${API_HOST}/v1/public/tld/domains/${tld}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 } 
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error in fetchAllDocuments: ', err);
    throw new Error(`An error occurred while trying to fetch documents data`);
  }
}

export async function fetchDoc(path: string) {
  //noStore();
  try {
    console.log('fetching doc', path);
    const res = await fetch(
      `${API_HOST}/v1/public/rpc/${path}?ctx=true`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 } 
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error in fetchDocumentData: ', err);
    throw new Error(`An error occurred while trying to fetch document data`);
  }
}

export async function fetchStartups() {
  try {
    const { domains } = await fetchAllDomains('startup');
    const startups = await Promise.all(
      domains.map(async (domain: TDomain) => {
        try {
          const data = await fetchDoc(`${domain.name}/`);
          return {
            id: domain.fullDomain,
            ...data,
            domainInfo: domain,
          };
        } catch (err) {
          console.warn(`Error fetching document for ${domain.name}:`, err);
          return null;
        }
      })
    );
    const filteredStartups = startups.filter(
      (startup) => startup !== null && startup.error == null
    );

    const reorderedStartups = filteredStartups.sort((a, b) => {
      if (a.name.toLowerCase().includes('context')) return -1;
      if (b.name.toLowerCase().includes('context')) return 1;
      return 0;
    });

    return reorderedStartups;
  } catch (err) {
    console.error('Error in fetchStartups:', err);
    throw new Error(`An error occurred while trying to fetch startup data`);
  }
}


export async function fetchDomain(name: string) {
  try {
    console.log('fetching doc', name);
    const res = await fetch(
      `${API_HOST}/v1/public/domains/${name}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 } 
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error in fetchDocumentData: ', err);
    throw new Error(`An error occurred while trying to fetch document data`);
  }
}