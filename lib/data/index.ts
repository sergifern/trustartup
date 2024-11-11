const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:8080';
const ITEMS_PER_PAGE = 10;

export async function fetchAllDomains(
  tld: string,
  //currentPage?: number,
) {
  //noStore();
  //const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const res = await fetch(
      `${API_HOST}/v1/public/tld/domains/${tld}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error in fetchAllDocuments: ', err);
    throw new Error(`An error occurred while trying to fetch documents data`);
  }
}