const Action = require("../../Action");
const {requireAddress} = require("../../utils/general.js");
const { getAddr } = require('../../addresses.js');

/**
 *  AaveCollateralSwitchAction - Claims stkAave from incentives controller
 */
class AaveCollateralSwitchAction extends Action {
  constructor(market, tokens, useAsCollateral) {
    super(
      'AaveCollateralSwitch',
      getAddr('AaveCollateralSwitch'),
      [['address', 'address[]', 'bool[]']],
      [[...arguments]],
    );
    this.mappableArgs = [
  ];
  }
}

module.exports = AaveCollateralSwitchAction;
