const dfsTokensSetConfig = require("@defisaver/tokens").set;
/**
 *
 * @type {Networks}
 */
const NETWORKS = {
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
};

/**
 *
 * @type {Config}
 */
const CONFIG = {
  chainId: NETWORKS.ethereum.chainId,
};

/**
 *
 * @param {chainId} chainId
 * @returns {Network}
 */
const getNetworkData = (chainId) => {
  const networkData = Object.values(NETWORKS).find((network) => network.chainId === +chainId);

  if (!networkData) throw new Error(`Cannot find network data for chainId: ${chainId}`);

  return networkData;
}

/**
 *
 * @param {Config} config
 */
const configure = (config) => {
  if (!config || typeof config !== 'object') throw new Error('Object expected');

  const newKeys = Object.keys(config);

  newKeys.forEach((key) => {
    CONFIG[key] = config[key]
    if (key === 'chainId') dfsTokensSetConfig('network', config[key]);
  });
};

module.exports = {
  configure,
  CONFIG,
  NETWORKS,
  getNetworkData,
}
