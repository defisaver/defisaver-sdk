const Action = require("@defisaver/sdk/src/Action");
const {requireAddress} = require("@defisaver/sdk/src/utils/general");
const { getAddr } = require('../../addresses.js');

/**
 *  AaveClaimStkAaveAction - Claims stkAave from incentives controller
 */
class AaveClaimStkAaveAction extends Action {
  constructor(assets, amount, to) {
    requireAddress(to);
    super(
      'AaveClaimStkAave',
      getAddr('AaveClaimStkAave'),
      [['address[]', 'uint256', 'address']],
      [[...arguments]],
    );
    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
  ];
  }
}

module.exports = AaveClaimStkAaveAction;
