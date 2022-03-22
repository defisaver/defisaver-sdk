const Action = require("../../Action");
const {requireAddress} = require("../../utils/general.js");
const { getAddr } = require('../../addresses.js');

/**
 *  AaveV3CollateralSwitchAction - Aave enable/disable token usage as collateral for AaveV3 position
 */
class AaveV3CollateralSwitchAction extends Action {
    /**
   * @param market {EthAddress}
   * @param arrayLength
   * @param tokens
   * @param useAsCollateral
   */
  constructor(market, arrayLength, tokens, useAsCollateral) {
    super(
      'AaveV3CollateralSwitch',
      getAddr('AaveV3CollateralSwitch'),
      [['address', 'uint8', 'address[]', 'bool[]']],
      [[market, arrayLength, tokens, useAsCollateral]],
    );
  }
}

module.exports = AaveV3CollateralSwitchAction;
