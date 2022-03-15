const Action = require('./src/Action');
const Recipe = require('./src/Recipe');
const DfsWeb3 = require('./src/DfsWeb3');
const { configure, CONFIG, NETWORKS } = require('./src/config');

const actions = require('./src/actions/');
const utils = require('./src/utils/');
const { actionAddresses, getAddr } = require('./src/addresses');

module.exports = {
  Action,
  Recipe,
  DfsWeb3,
  actions,
  utils,
  configure,
  getAddr,
  networks: NETWORKS,
  actionAddresses: actionAddresses[CONFIG.chainId],
}
