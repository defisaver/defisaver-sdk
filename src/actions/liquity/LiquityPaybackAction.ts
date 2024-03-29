import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityPaybackAction - Repays LUSD to the trove
 *
 * @category Liquity
 */
export class LiquityPaybackAction extends Action {
  /**
   * @param lusdAmount Amount of LUSD tokens to repay
   * @param from Address where the tokens are pulled from
   * @param upperHint Address in the linked list to use as an upper limit
   * @param lowerHint Address in the linked list to use as a lower limit
   */
  constructor(lusdAmount:uint256, from:EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
    requireAddress(from);
    super('LiquityPayback',
      getAddr('LiquityPayback'),
      ['uint256', 'address', 'address', 'address'],
      [lusdAmount, from, upperHint, lowerHint]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('LUSD').address, owner: this.args[1] }];
  }
}
