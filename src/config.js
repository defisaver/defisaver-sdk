const NETWORKS = {
  ethereum: {
    mainnet: {
      chainId: 1,
      name: 'Ethereum',
    },
    optimism: {
      chainId: 10,
      name: 'Optimism',
    },
    arbitrum: {
      chainId: 42161,
      name: 'Arbitrum',
    },
  },
};

const CONFIG = {
  chainId: NETWORKS.ethereum.mainnet.chainId,
};

const configure = (newConfig) => {
  if (!newConfig || typeof newConfig !== 'object') throw new Error('Object expected');

  const newKeys = Object.keys(newConfig);

  newKeys.forEach((key) => { CONFIG[key] = newConfig[key] });
};

module.exports = {
  configure,
  CONFIG,
  NETWORKS,
}
