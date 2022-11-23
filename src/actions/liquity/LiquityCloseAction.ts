import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * LiquityCloseAction - Closes trove
 *
 * @category Liquity
 */
export class LiquityCloseAction extends Action {
  /**
   * @param from Address that will supply the LUSD needed to repay the debt
   * @param to Address that will receive the freed collateral
   */
  constructor(from:EthAddress, to:EthAddress) {
    requireAddress(from);
    requireAddress(to);
    super('LiquityClose',
      getAddr('LiquityClose'),
      ['address', 'address'],
      [from, to]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('LUSD').address, owner: this.args[0] }];
  }
}