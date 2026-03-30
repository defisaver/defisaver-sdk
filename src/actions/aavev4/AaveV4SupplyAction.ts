import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4SupplyAction
 *
 * @category AaveV4
 */
export class AaveV4SupplyAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to supply tokens on behalf of. Defaults to the user's wallet if not provided.
   * @param from Address from which to pull collateral asset.
   * @param reserveId Reserve id.
   * @param amount Amount of tokens to supply.
   * @param useAsCollateral Whether to use the tokens as collateral.
   * @param tokenAddress Address of the token to approve. Optional, as it is only used for token approval, not part of encoding.
   *
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    from: EthAddress,
    reserveId: uint256,
    amount: uint256,
    useAsCollateral: boolean,
    tokenAddress: EthAddress = getAddr('Empty'),
  ) {
    super(
      'AaveV4Supply',
      getAddr('AaveV4Supply'),
      ['address', 'address', 'address', 'uint256', 'uint256', 'bool'],
      [spoke, onBehalf, from, reserveId, amount, useAsCollateral],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.tokenForApproval, owner: this.args[2] }];
    return [];
  }
}
