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

    this.mappableArgs = [
      this.args[0][0],
    ];
  }
}

module.exports = ReflexerOpenSafeAction;
