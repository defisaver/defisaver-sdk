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
   * @param assetIds
   * @param useAsCollateral
   */
  constructor(market, arrayLength, assetIds, useAsCollateral) {
    super(
      'AaveV3CollateralSwitch',
      getAddr('AaveV3CollateralSwitch'),
      [['address', 'uint8', 'uint16[]', 'bool[]']],
      [[market, arrayLength, assetIds, useAsCollateral]],
    );
  }
}

module.exports = AaveV3CollateralSwitchAction;
