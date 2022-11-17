/* Export types here */
import type {
  EthAddress,
  Config, Network, Networks,
  AccessList, AccessListItem, AccessLists,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
} from './src/types';

export type {
  EthAddress,
  Config, Network, Networks,
  AccessList, AccessListItem, AccessLists,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
};

/* Export methods, classes and other here */
import { Action } from './src/Action';
import { ActionWithL2 } from './src/ActionWithL2';
import { Recipe } from './src/Recipe';
import { Strategy } from './src/Strategy';
import { DfsWeb3 } from './src/DfsWeb3';

import * as actions from './src/actions';
import * as triggers from './src/triggers';
import * as utils from './src/utils';

import { configure, getNetworkData, CONFIG, NETWORKS as networks } from './src/config';
import { actionAddresses as _actionAddresses, otherAddresses as _otherAddresses, getAddr } from './src/addresses';

const actionAddressesAllChains = _actionAddresses;
const actionAddresses = (chainId = null) => _actionAddresses[chainId || CONFIG.chainId];

const otherAddressesAllChains = _otherAddresses
const otherAddresses = (chainId = null) => _otherAddresses[chainId || CONFIG.chainId];

export {
  Action, ActionWithL2, Recipe, Strategy, DfsWeb3,
  actions, triggers, utils,
  configure, getNetworkData, CONFIG, networks,
  actionAddresses, actionAddressesAllChains, otherAddresses, otherAddressesAllChains, getAddr
};

export default {
  Action, ActionWithL2, Recipe, Strategy, DfsWeb3,
  actions, triggers, utils,
  configure, getNetworkData, CONFIG, networks,
  actionAddresses, actionAddressesAllChains, getAddr
};
