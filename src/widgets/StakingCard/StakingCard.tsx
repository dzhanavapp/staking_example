import { useTonAddress } from '@tonconnect/ui-react';
import { ConnectWallet, StakingButtons } from '../../features';

import styles from './StakingCard.module.css';

import { useState } from 'react';
import { useTonBalanceQuery } from '../../shared/hooks';
import { Input } from '../../shared/ui';

const COMISSION = 1.3;

export const StakingCard = () => {
  const address = useTonAddress();
  const { balance } = useTonBalanceQuery();

  const [amount, setAmount] = useState('1');

  const isEnoughBalance = balance - COMISSION >= Number(amount);

  return (
    <div>
      <div className={styles.card}>
        <span>Your balance {balance.toFixed(2)} TON</span>
        <Input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          type='number'
          step={0.1}
        />
        {address ? (
          <StakingButtons
            disabled={!isEnoughBalance}
            amount={Number(amount)}
          />
        ) : (
          <ConnectWallet />
        )}
      </div>

      {!isEnoughBalance && <span className={styles.error}>Not enough balance</span>}
    </div>
  );
};
