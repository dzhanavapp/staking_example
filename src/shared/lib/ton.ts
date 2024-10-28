import { TonConnect } from '@tonconnect/ui-react';
import { Tonstakers } from 'tonstakers-sdk';

const connector = new TonConnect({
  manifestUrl: 'https://app.tonstakers.com/tonconnect-manifest.json',
});

type Connector = ConstructorParameters<typeof Tonstakers>[0]['connector'];

const stakers = new Tonstakers({
  connector: connector as unknown as Connector,
});

export const ton = {
  connector,
  stakers,
};
