import { useQuery } from '@tanstack/react-query';
import { useTonConnectUI } from '@tonconnect/ui-react';

const fetchWalletBalance = async (address?: string, chain?: string) => {
  if (!address) return 0;

  const balanceUrl =
    chain === '-3'
      ? 'https://testnet.toncenter.com/api/v2/getAddressBalance?address=' + address
      : 'https://toncenter.com/api/v2/getAddressBalance?address=' + address;

  const balanceResponse = await fetch(balanceUrl);
  const balanceData = (await balanceResponse.json()) as { result: string };

  return Number(balanceData.result) / 10 ** 9;
};

export const useTonBalanceQuery = () => {
  const [connector] = useTonConnectUI();
  const wallet = connector.wallet;

  const query = useQuery({
    queryKey: ['ton-balance', wallet],
    queryFn: () => fetchWalletBalance(wallet?.account.address, wallet?.account.chain),
    enabled: Boolean(wallet),
  });

  return {
    ...query,
    balance: query?.data || 0,
  };
};
