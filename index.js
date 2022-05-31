const Action = require('./src/Action');
const Recipe = require('./src/Recipe');
const Strategy = require('./src/Strategy');
const DfsWeb3 = require('./src/DfsWeb3');
const {
  configure, getNetworkData, CONFIG, NETWORKS,
} = require('./src/config');

const actions = require('./src/actions/');
const triggers = require('./src/triggers/');
const utils = require('./src/utils/');
const { actionAddresses } = require('./src/addresses');

module.exports = {
  Action,
  Recipe,
  Strategy,
  DfsWeb3,

  actions,
  triggers,
  utils,

  configure,
  getNetworkData,
  networks: NETWORKS,
  actionAddressesAllChains: actionAddresses,
  actionAddresses: () => actionAddresses[CONFIG.chainId],
}
