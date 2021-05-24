const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquitySupplyAction - supply collateral
 */
class LiquitySupplyAction extends Action {
  /**
   * @param
   */
  constructor(collAmount, from, upperHint, lowerHint) {
    requireAddress(from);
    super('LiquitySupply',
        getAddr('LiquitySupply'),
        ['uint256','address', 'address','address'],
        [collAmount, from, upperHint, lowerHint]
    );
  }
}

module.exports = LiquitySupplyAction;
