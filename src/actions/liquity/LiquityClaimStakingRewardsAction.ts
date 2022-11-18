import { LiquityUnstakeAction } from './LiquityUnstakeAction';
import { requireAddress } from '../../utils/general';
import { EthAddress } from '../../types';

/**
 * LiquityClaimStakingRewardsAction - Claims rewards from LQTYStaking
 *
 * @category Liquity
 */
export class LiquityClaimStakingRewardsAction extends LiquityUnstakeAction {
  /**
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
  constructor(wethTo:EthAddress, lusdTo:EthAddress) {
    requireAddress(wethTo);
    requireAddress(lusdTo);
    super('0', wethTo, wethTo, lusdTo);
  }
}