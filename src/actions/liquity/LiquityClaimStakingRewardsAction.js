const LiquityUnstakeAction = require('./LiquityUnstakeAction');
const { requireAddress } = require('../../utils/general');

/**
 * LiquityClaimStakingRewardsAction - Claims rewards from LQTYStaking
 */
class LiquityClaimStakingRewardsAction extends LiquityUnstakeAction {
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

module.exports = LiquityClaimStakingRewardsAction;
