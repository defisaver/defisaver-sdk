import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * MorphoAaveV3PaybackAction - Payback token to Morpho AaveV3
 *
 * @category Morpho
 */
export class MorphoAaveV3LSVPaybackAction extends Action {
  /**
     * @param emodeId Type of emode we are entering in, each one is different deployment on Morpho
     * @param tokenAddr - Address of tokenAddr (underlying)
     * @param amount - Token amount
     * @param from - Tokens will be sent from this address
     * @param onBehalf - For what user we are paying back the debt, defaults to proxy
     */
  constructor(
    emodeId: uint256,
    tokenAddr: EthAddress,
    amount: uint256,
    from: EthAddress,
    onBehalf: EthAddress = getAddr('Empty'),
  ) {
    super(
      'MorphoAaveV3LSVPayback',
      getAddr('MorphoAaveV3LSVPayback'),
      ['uint256', 'address', 'uint256', 'address', 'address'],
      [emodeId, tokenAddr, amount, from, onBehalf],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[1], owner: this.args[3] }];
    return [];
  }
}