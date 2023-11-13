import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerDsrWithdrawAction - Withdraw DAI from Maker DSR
 *
 * @category Maker
 */
export class MakerDsrWithdrawAction extends Action {
  /**
   * @param amount Amount of DAI to withdraw
   * @param to Tokens will be withdrawn to this address
   */
  constructor(amount:uint256, to:EthAddress) {
    super('McdDsrWithdraw', getAddr('McdDsrWithdraw'), ['uint256', 'address'], [amount, to]);
  }

  async getAssetsToApprove() {
    return [];
  }
}