export {Action} from './src/Action';
export {ActionWithL2} from './src/ActionWithL2';
export {Recipe} from './src/Recipe';
export {Strategy} from './src/Strategy';
export {DfsWeb3} from './src/DfsWeb3';
import { configure, getNetworkData, CONFIG, NETWORKS } from './src/config';
export {configure, getNetworkData, CONFIG, NETWORKS};

export * from './src/actions';
export * from './src/triggers';
export * from './src/utils';
import { actionAddresses as _actionAddresses} from './src/addresses';

export const actionAddressesAllChains = _actionAddresses;
export const actionAddresses= (chainId = null) => _actionAddresses[chainId || CONFIG.chainId];
