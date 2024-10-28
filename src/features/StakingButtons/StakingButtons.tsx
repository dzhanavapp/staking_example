import { toast } from 'sonner';
import { useTonstakers } from '../../shared/hooks';
import { cn } from '../../shared/lib';
import { Button } from '../../shared/ui';
import styles from './StakingButtons.module.css';

type Props = {
  className?: string;
  amount: number;
  disabled?: boolean;
};

export const StakingButtons = ({ className, amount, disabled = false }: Props) => {
  const { tonstakers, isReady } = useTonstakers();

  const stake = async () => {
    try {
      await tonstakers.stake(amount);
      toast.error(`Success. Staked ${amount.toFixed(2)} TON`);
    } catch {
      toast.error('Error. Try later');
    }
  };

  const unstake = async () => {
    try {
      await tonstakers.unstake(amount);
      toast.error(`Success. Untaked ${amount.toFixed(2)} TON`);
    } catch {
      toast.error('Error. Try later');
    }
  };
  return (
    <div
      className={cn(className, styles.wrapper, {
        [styles.disabled]: disabled || !isReady,
      })}
    >
      <Button onClick={stake}>Stake</Button>
      <Button onClick={unstake}>Unstake</Button>
    </div>
  );
};
