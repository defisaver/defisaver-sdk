import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes32, uint256 } from '../../types';

/**
 * MidnightSupplyCollateralAction
 *
 * @category MidnightSupplyCollateral
 */
export class MidnightSupplyCollateralAction extends Action {
  /**
   * @param marketId Market id.
   * @param onBehalf Address to supply tokens on behalf of.
   * @param from Address from which to pull collateral asset.
   * @param amount Amount of tokens to supply.
   * @param collateralIndex Collateral index (0-based).
   */
  constructor(
    marketId: bytes32,
    onBehalf: EthAddress,
    from: EthAddress,
    amount: uint256,
    collateralIndex: uint256,
  ) {
    super(
      'MidnightSupplyCollateral',
      getAddr('MidnightSupplyCollateral'),
      ['bytes32', 'address', 'address', 'uint256', 'uint256'],
      [marketId, onBehalf, from, amount, collateralIndex],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}
