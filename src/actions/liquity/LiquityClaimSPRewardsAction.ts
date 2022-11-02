import LiquitySPWithdrawAction from './LiquitySPWithdrawAction';
import { requireAddress } from '../../utils/general';
import {EthAddress} from '../../types';

/**
 * LiquityClaimSPRewardsAction - Claims rewards from LUSD Stability Pool
 */
export default class LiquityClaimSPRewardsAction extends LiquitySPWithdrawAction {
    /**
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(wethTo:EthAddress, lqtyTo:EthAddress) {
      requireAddress(wethTo);
      requireAddress(lqtyTo);
      super("0", wethTo, wethTo, lqtyTo);
    }
}