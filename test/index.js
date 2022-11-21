const dfs = require('../umd');
const {assert} = require('chai');

describe('DFS', () => {
  it('Exports constructors', () => {
    assert.containsAllKeys(dfs, [
      'Action', 'Recipe', 'actions', 'actionAddresses', 'utils', 'DfsWeb3', 'configure', 'getNetworkData', 'networks',
      'actionAddressesAllChains',
    ]);
  })
})
