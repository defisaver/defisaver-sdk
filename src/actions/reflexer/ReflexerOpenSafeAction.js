const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * ReflexerOpenSafeAction
 */
class ReflexerOpenSafeAction extends Action {
  /**
   * @param adapterAddr {EthAddress}
   */
  constructor(adapterAddr) {
    super('ReflexerOpen', getAddr('ReflexerOpen'), [['address']], [[adapterAddr]]);
  }
}

module.exports = ReflexerOpenSafeAction;
