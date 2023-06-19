import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
import { EthAddress, uint256 } from '../../../types';

/**
 * MorphoAaveV3SupplyAction - Supply token to morpho aaveV3
 *
 * @category Morpho
 */
export class MorphoAaveV3SupplyAction extends Action {
  /**
   * @param emodeId Type of emode we are entering in, each one is different deployment on Morpho
   * @param tokenAddr - Address of tokenAddr (underlying)
   * @param amount - Token amount
   * @param from - Tokens will be sent from this address
   * @param onBehalf - For what user we are paying back the debt, defaults to proxy
   * @param supplyAsColl Whether to supplyAsCollateral or regular supply
   * @param maxIterations Max number of iterations for p2p matching, 0 will use default num of iterations
   */
  constructor(
    emodeId:uint256,
    tokenAddr:EthAddress,
    amount:uint256,
    from:EthAddress,
    onBehalf:EthAddress = getAddr('Empty'),
    supplyAsColl:boolean = true,
    maxIterations:uint256 = '4',
  ) {
    super(
      'MorphoAaveV3Supply',
      getAddr('MorphoAaveV3Supply'),
      ['uint256', 'address', 'uint256', 'address', 'address', 'bool', 'uint256'],
      [emodeId, tokenAddr, amount, from, onBehalf, supplyAsColl, maxIterations],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[1], owner: this.args[3] }];
    return [];
  }
}
