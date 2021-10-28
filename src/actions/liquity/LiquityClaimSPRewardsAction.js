const LiquitySPWithdrawAction = require('./LiquitySPWithdrawAction');
const { requireAddress } = require('../../utils/general');

/**
 * LiquityClaimSPRewardsAction - Claims rewards from LUSD Stability Pool
 */
class LiquityClaimSPRewardsAction extends LiquitySPWithdrawAction {
    /**
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(wethTo, lqtyTo) {
      requireAddress(wethTo);
      requireAddress(lqtyTo);
      super("0", wethTo, wethTo, lqtyTo);
    }
}

module.exports = LiquityClaimSPRewardsAction;
