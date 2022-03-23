const Action = require('./src/Action');
const Recipe = require('./src/Recipe');
const DfsWeb3 = require('./src/DfsWeb3');
const {
  configure, getNetworkData, CONFIG, NETWORKS,
} = require('./src/config');

const actions = require('./src/actions/');
const utils = require('./src/utils/');
const { actionAddresses } = require('./src/addresses');

module.exports = {
  Action,
  Recipe,
  DfsWeb3,
  actions,
  utils,
  configure,
  getNetworkData,
  networks: NETWORKS,
  actionAddressesAllChains: actionAddresses,
  actionAddresses: actionAddresses[CONFIG.chainId],
}
