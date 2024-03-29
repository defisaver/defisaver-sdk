import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * LidoWrapAction - Turns WETH or StEth into WStEth
 *
 * @category Lido
 */
export class LidoWrapAction extends Action {
  /**
   * @param amount amount to pull and stake
   * @param from tokens will be taken from this address
   * @param to WStEth will be sent to this address
   * @param useEth true for using WETH, false for using stEth
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress, useEth:boolean) {
    requireAddress(to);
    super('LidoWrap', getAddr('LidoWrap'), ['uint256', 'address', 'address', 'bool'], [amount, from, to, useEth]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    if (this.args[3]) {
      return [{ asset: getAssetInfo('WETH').address, owner: this.args[1] }];
    }
    return [{ asset: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84', owner: this.args[1] }];
  }
}