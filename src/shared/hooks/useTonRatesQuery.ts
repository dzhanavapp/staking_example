import { useQuery } from '@tanstack/react-query';

export const RATES = {
  TON: '0:0000000000000000000000000000000000000000000000000000000000000000',
  tsTON: '0:bdf3fa8098d129b54b4f73b5bac5d1e1fd91eb054169c3916dfc8ccd536d1000',
} as const;

type Asset = {
  contract_address: string;
  symbol: string;
  display_name: string;
  priority: number;
  image_url: string;
  decimals: number;
  kind: string;
  deprecated: boolean;
  community: boolean;
  blacklisted: boolean;
  default_symbol: boolean;
  taxable: boolean;
  tags: string[];
  third_party_usd_price: string;
  third_party_price_usd: string;
  dex_usd_price: string;
  dex_price_usd: string;
};

const fetchRates = async (assetAddress: string) => {
  const response = await fetch(`https://api.ston.fi/v1/assets/${assetAddress}`);
  return (await response.json()).asset as Asset;
};

export const useTonRatesQuery = (assetAddress: string) => {
  const query = useQuery({
    queryKey: ['ton-rates', assetAddress],
    queryFn: () => fetchRates(assetAddress),
  });

  return {
    ...query,
    rates: query?.data,
  };
};
