import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerDsrDepositAction - Supply DAI to Maker DSR
 *
 * @category Maker
 */
export class MakerDsrDepositAction extends Action {
  /**
   * @param amount Amount of DAI to deposit
   * @param from Tokens will be supplied from this address
   */
  constructor(amount:uint256, from:EthAddress) {
    super('McdDsrDeposit', getAddr('McdDsrDeposit'), ['uint256', 'address'], [amount, from]);
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('DAI').address, owner: this.args[1] }];
  }
}