import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoSupplyAction - Supply token to morpho
 *
 * @category Morpho
 */
export class MorphoSupplyAction extends Action {
  /**
   * @param tokenAddr - Address of tokenAddr
   * @param amount - Token amount
   * @param from - Tokens will be sent from this address
   * @param onBehalf - Tokens will be supplied to this address' position (defaults to sender's proxy)
   */
  constructor(tokenAddr:EthAddress, amount:uint256, from:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
    super('MorphoSupply', getAddr('MorphoSupply'), ['address', 'uint256', 'address', 'address'], [tokenAddr, amount, from, onBehalf]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[0], owner: this.args[2] }];
    return [];
  }
}
