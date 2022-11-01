const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * CBUpdateRebondSubAction - Updates rebond strategy subscription
 */
class CBUpdateRebondSubAction extends Action {
  /**
   * @param subId {string} Id of the subscription to update
   * @param bondId {string} Id of the bond in the strategy
   */
  constructor(subId, bondId) {
    super('CBUpdateRebondSub', getAddr('CBUpdateRebondSub'), ['uint256','uint256'], [...arguments]);
  }

}

module.exports = CBUpdateRebondSubAction;