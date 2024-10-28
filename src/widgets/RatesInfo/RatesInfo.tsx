import { RATES } from '../../shared/hooks';
import { RatesInfoRow } from './ui';

export const RatesInfo = () => {
  return (
    <div>
      <RatesInfoRow asset={RATES.TON} />
      <RatesInfoRow asset={RATES.tsTON} />
    </div>
  );
};
