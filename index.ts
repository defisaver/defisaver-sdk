import Action from './src/Action';
import Recipe from './src/Recipe';
import Strategy from './src/Strategy';
import DfsWeb3 from './src/DfsWeb3';
import { configure, getNetworkData, CONFIG, NETWORKS } from './src/config';

export * from './src/actions';
import triggers from './src/triggers';
import utils from './src/utils';
import { actionAddresses } from './src/addresses';

export default {
  Action,
  Recipe,
  Strategy,
  DfsWeb3,

  triggers,
  utils,

  configure,
  getNetworkData,
  networks: NETWORKS,
  actionAddressesAllChains: actionAddresses,
  actionAddresses: (chainId = null) => actionAddresses[chainId || CONFIG.chainId],
}
