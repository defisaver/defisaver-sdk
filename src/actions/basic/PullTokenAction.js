const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');
const {getAssetInfoByAddress} = require("@defisaver/tokens");

/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 */
class PullTokenAction extends Action {
  /**
   * @param token {string} Token address
   * @param from {string} Transfer sender
   * @param amount {string} Transfer amount (-1 for whole sender balance)
   */
  constructor(token, from, amount) {
    requireAddress(from);
    super(
      'PullToken',
      getAddr('PullToken'),
      [[
        "address",
        "address",
        "uint",
      ]],
      [[...arguments]]
    );
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[1]}];
    return [];
  }
}

module.exports = PullTokenAction;
