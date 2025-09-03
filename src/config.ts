import Dec from 'decimal.js';
import { set as dfsTokensSetConfig } from '@defisaver/tokens';
import { Config, Network, Networks } from './types';

Dec.set({
  rounding: Dec.ROUND_DOWN,
  toExpPos: 9e15,
  toExpNeg: -9e15,
  precision: 100,
});

/**
 *
 * @type {Networks}
 */
export const NETWORKS : Networks = {
  ethereum: {
    chainId: 1,
    chainName: 'Ethereum Mainnet',
    blockExplorerUrls: ['https://etherscan.io/'],
    iconUrls: [],
    rpcUrls: [],
    nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
  },
  optimism: {
    chainId: 10,
    chainName: 'Optimism',
    blockExplorerUrls: ['https://optimistic.etherscan.io/'],
    iconUrls: ['https://gateway.optimism.io/favicon.ico'],
    rpcUrls: ['https://mainnet.optimism.io'],
    nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
  },
  arbitrum: {
    chainId: 42161,
    chainName: 'Arbitrum One',
    blockExplorerUrls: ['https://arbiscan.io/'],
    iconUrls: ['https://bridge.arbitrum.io/logo.png'],
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
  },
  base: {
    chainId: 8453,
    chainName: 'Base',
    blockExplorerUrls: ['https://basescan.io/'],
    iconUrls: ['https://bridge.base.org/icons/base.svg'],
    rpcUrls: [],
    nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
  },
  linea: {
    chainId: 59144,
    chainName: 'Linea',
    blockExplorerUrls: ['https://lineascan.build/'],
    iconUrls: ['https://bridge.base.org/icons/base.svg'],
    rpcUrls: [],
    nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
  },
};

/**
 *
 */
export const CONFIG : Config = {
  chainId: NETWORKS.ethereum.chainId,
  testingMode: false,
};

/**
 *
 * @param chainId
 */
export const getNetworkData = (chainId:number) : Network => {
  const networkData : Network | undefined = Object.values(NETWORKS).find((network) => network.chainId === +chainId);

  if (!networkData) throw new Error(`Cannot find network data for chainId: ${chainId}`);

  return networkData;
};

/**
 *
 * @param config
 */
export const configure = (config : Config) => {
  if (!config || typeof config !== 'object') throw new Error('Object expected');

  const newKeys : Array<string> = Object.keys(config);

  newKeys.forEach((key) => {
    CONFIG[key as keyof Config] = config[key as keyof Config];
    if (key === 'chainId') dfsTokensSetConfig('network', config[key]);
  });
};

export const actionsWithSwap = [
  {
    name: 'DFSSell',
    swapArgIndex: 0,
  },
  {
    name: 'LlamaLendBoost',
    swapArgIndex: 2,
  },
  {
    name: 'LlamaLendLevCreate',
    swapArgIndex: 5,
  },
  {
    name: 'LlamaLendRepay',
    swapArgIndex: 2,
  },
  {
    name: 'LlamaLendSelfLiquidateWithColl',
    swapArgIndex: 4,
  },
];

export const txSaverSupportedActions = [
  ...actionsWithSwap,
];
