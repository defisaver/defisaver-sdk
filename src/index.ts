/* Export types here */
import type {
  EthAddress,
  Config, Network, Networks,
  AccessList, AccessListItem, AccessLists,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
} from './types';

export type {
  EthAddress,
  Config, Network, Networks,
  AccessList, AccessListItem, AccessLists,
  bytes32, bytes,
  uint256, uint160, uint128, uint80, uint64, uint24, uint16, uint8, int24,
};

/* Export methods, classes and other here */
import { Action } from './Action';
import { ActionWithL2 } from './ActionWithL2';
import { Recipe } from './Recipe';
import { Strategy } from './Strategy';
import { DfsWeb3 } from './DfsWeb3';

import * as actions from './actions';
import * as triggers from './triggers';
import * as utils from './utils';

import { configure, getNetworkData, CONFIG, NETWORKS as networks } from './config';
import { actionAddresses as _actionAddresses, otherAddresses as _otherAddresses, getAddr } from './addresses';

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
