const dfs = require('../index.js');
const { expect } = require('chai');

describe('DFS', () => {
  it('Exports constructors', () => {
    expect(dfs).to.haveOwnProperty('Action');
    expect(dfs).to.haveOwnProperty('ActionSet');
    expect(dfs).to.haveOwnProperty('actions');
  })
})
