import { useTonConnectModal } from '@tonconnect/ui-react';
import { Button } from '../../shared/ui';

export const ConnectWallet = () => {
  const { open } = useTonConnectModal();
  return <Button onClick={open}>Connect Wallet</Button>;
};
