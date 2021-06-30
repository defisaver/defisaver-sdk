const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerPaybackAction - Payback RAI to a Safe
 */
class ReflexerPaybackAction extends Action {
  /**
   * @param safeId {SafeId}
   * @param amount {string} Amount of RAI to be payed back in wei
   * @param from {EthAddress} RAI will be sent from this address
   */
  constructor(safeId, amount, from) {
    super('ReflexerPayback', getAddr('ReflexerPayback'), [['uint256','uint256','address']], [[safeId, amount, from]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('RAI').address, owner: this.args[2]}];
  }
}

module.exports = ReflexerPaybackAction;
