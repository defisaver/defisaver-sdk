const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MakerUnwindGUni
 */
class MakerUnwindGUniAction extends Action {
  /**
   */
  constructor(daiAmount, mcdManager, vaultId, sendDaiTo) {
    super('McdUnwindGUni', getAddr('McdUnwindGUni'), [['uint256', 'address', 'uint256', 'address']], [[daiAmount, mcdManager, vaultId, sendDaiTo]] );
  }
}

module.exports = MakerUnwindGUniAction;
