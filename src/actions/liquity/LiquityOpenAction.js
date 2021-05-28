const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityOpenAction - Opens up a trove
 */
class LiquityOpenAction extends Action {
  /**
   * @param maxFeePercentage Highest borrowing fee to accept
   * @param collAmount Amount of WETH tokens to deposit as collateral
   * @param lusdAmount Amount of LUSD tokens to borrow
   * @param from Address where the tokens are pulled from
   * @param to Address that will receive borrowed tokens
   */
  constructor(maxFeePercentage, collAmount, lusdAmount, from, to, upperHint, lowerHint) {
    requireAddress(from);
    requireAddress(to);
    super('LiquityOpen',
      getAddr('LiquityOpen'),
      ['uint256','uint256', 'uint256', 'address','address', 'address','address'],
      [maxFeePercentage, collAmount, lusdAmount, from, to, upperHint, lowerHint]
    );
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('WETH').address, owner: this.args[3]}];
  }
}

module.exports = LiquityOpenAction;
