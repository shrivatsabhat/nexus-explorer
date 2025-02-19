import axios from 'axios';

export function fetchMetrics(url) {
  return axios.get(
    `${url || process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/system/get/metrics`,
    { headers: { 'Cache-Control': 'max-age=300' } }
  );
}

export function fetchInfo(url) {
  return axios.get(
    `${url || process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/system/get/info`
  );
}

export function fetchMining(url) {
  return axios.get(
    `${url || process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/ledger/get/info`
  );
}

export function fetchMarket() {
  return axios.get(`${process.env.NEXT_PUBLIC_COINGECKO_BASE_URL}/coins/nexus`);
}

export async function fetchRecentBlocks(MAX_ROWS = 6) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/ledger/list/blocks?verbose=summary&limit=${MAX_ROWS}`
  );
  return res.data.result;
}

export async function fetchTransaction(txid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/ledger/get/transaction?hash=${txid}`
  );
  const resp = await res.json();
  return resp.result;
}

export async function fetchBlock(height) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXUS_BASE_URL}/ledger/get/block?verbose=summary&height=${height}`
  );
  const resp = await res.json();
  return resp.result;
}

export async function fetchRichlist(
  url = process.env.NEXT_PUBLIC_NEXUS_BASE_URL,
  page = 0,
  limit = 111
) {
  // * to consider the users who have moved their balance to trust
  // * query for both trust and normal accounts
  const json = JSON.stringify({
    page: page,
    sort: 'total',
    order: 'desc',
    limit: limit,
    where: 'results.token=0',
  });

  const page0 = await axios.post(
    `${url}/register/list/finance:accounts,finance:trust`,
    json,
    {
      headers: {
        'Cache-Control': 'max-age=300',
        'Content-Type': 'application/json',
      },
    }
  );

  return { data: [...page0.data.result] };
}
