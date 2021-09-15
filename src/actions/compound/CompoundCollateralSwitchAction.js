const Action = require("../../Action");
const {requireAddress} = require("../../utils/general.js");
const { getAddr } = require('../../addresses.js');

/**
 *  CompoundCollateralSwitchAction - Claims stkAave from incentives controller
 */
class CompoundCollateralSwitchAction extends Action {
  constructor(tokens, useAsCollateral) {
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
