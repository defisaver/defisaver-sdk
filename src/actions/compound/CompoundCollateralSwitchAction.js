const Action = require("../../Action");
const {requireAddress} = require("../../utils/general.js");
const { getAddr } = require('../../addresses.js');

/**
 *  CompoundCollateralSwitchAction - Compound enable/disable cToken usage as collateral
 */
class CompoundCollateralSwitchAction extends Action {
  constructor(cTokens, useAsCollateral) {
    super(
      'CompCollateralSwitch',
      getAddr('CompCollateralSwitch'),
      [['address[]', 'bool[]']],
      [[...arguments]],
    );
    this.mappableArgs = [
  ];
  }
}

module.exports = CompoundCollateralSwitchAction;
