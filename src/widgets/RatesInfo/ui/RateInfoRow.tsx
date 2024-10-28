import { useTonRatesQuery } from '../../../shared/hooks';

type Props = {
  asset: string;
};

export const RatesInfoRow = ({ asset }: Props) => {
  const { rates, isLoading } = useTonRatesQuery(asset);

  if (isLoading) return null;

  return (
    <div>
      1 {rates?.symbol} = {Number(rates?.dex_price_usd).toFixed(2)} USD
    </div>
  );
};
