import { TonConnectButton } from '@tonconnect/ui-react';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>Tonstakers</span>

      <TonConnectButton />
    </header>
  );
};
