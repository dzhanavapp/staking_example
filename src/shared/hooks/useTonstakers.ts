import { useEffect, useState } from 'react';

import { ton } from '../lib';

export const useTonstakers = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const onInit = async () => {
      console.log('Inited');
      ton.stakers.getAvailableBalance().then((res) => console.log(res / 10 ** 9, 'balance'));

      setIsReady(true);
    };
    ton.stakers.addEventListener('initialized', onInit);

    return () => ton.stakers.removeEventListener('initialized', onInit);
  }, []);

  return { tonstakers: ton.stakers, isReady };
};
