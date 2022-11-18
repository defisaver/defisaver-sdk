import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * YearnWithdrawAction - Burns yTokens and receive underlying tokens in return
 *
 * @category Yearn
 */
export class YearnWithdrawAction extends Action {
  /**
   * @param tokenAddr yToken address
   * @param amount amount of yTokens to burn
   * @param from yTokens will be taken from this address
   * @param to underlying tokens will be sent to this address
   */
  constructor(tokenAddr:EthAddress, amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('YearnWithdraw', getAddr('YearnWithdraw'), ['address', 'uint256', 'address', 'address'], [tokenAddr, amount, from, to]);
    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[0], owner: this.args[2], specialApproveLabel: 'yearn' }];
    return [];
  }
}