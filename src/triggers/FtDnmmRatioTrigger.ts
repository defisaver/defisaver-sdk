import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * FtDnmmRatioTrigger - Trigger based on the ftDNMM account-wide ratio (health factor)
 *
 * @category Triggers
 */
export class FtDnmmRatioTrigger extends Action {
  /**
   * @param user - Address of the user (smart wallet) whose ftDNMM account is checked
   * @param ratio - Ratio (health factor, 1e18 precision) that represents the triggerable point
   * @param state - If the current ratio should be higher (OVER) or lower (UNDER) than ratio
   */
  constructor(
    user:EthAddress,
    ratio:uint256,
    state:uint8,
  ) {
    super(
      'FtDnmmRatioTrigger',
      getAddr('Empty'),
      [['address', 'uint256', 'uint8']],
      [[user, ratio, state]]);
  }
}
