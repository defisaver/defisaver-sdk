const dfs = require('../index.js');
const {assert} = require('chai');

describe('DFS', () => {
  it('Exports constructors', () => {
    assert.containsAllKeys(dfs, ['Action', 'Recipe', 'actions']);
  })
})
