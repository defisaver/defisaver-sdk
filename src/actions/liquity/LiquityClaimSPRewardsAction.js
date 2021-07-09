const LiquitySPWithdrawAction = require('./LiquitySPWithdrawAction');
const { requireAddress } = require('../../utils/general');

/**
 * LiquityClaimSPRewardsAction - Claims rewards from LUSD Stability Pool
 */
class LiquityClaimSPRewardsAction extends LiquitySPWithdrawAction {
    /**
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
    constructor(wethTo, lusdTo) {
      requireAddress(wethTo);
      requireAddress(lusdTo);
      super("0", wethTo, wethTo, lusdTo);
    }
}

module.exports = LiquityClaimSPRewardsAction;
