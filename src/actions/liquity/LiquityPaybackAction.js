const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityPaybackAction - Repays LUSD to the trove
 */
class LiquityPaybackAction extends Action {
  /**
   * @param lusdAmount Amount of LUSD tokens to repay
   * @param from Address where the tokens are pulled from
   */
  constructor(lusdAmount, from, upperHint, lowerHint) {
    requireAddress(from);
    super('LiquityPayback',
        getAddr('LiquityPayback'),
        ['uint256','address', 'address','address'],
        [lusdAmount, from, upperHint, lowerHint]
    );
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('LUSD').address, owner: this.args[1]}];
  }
}

module.exports = LiquityPaybackAction;
