import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes32, uint256 } from '../../types';

/**
 * MidnightWithdrawCollateralAction
 *
 * @category MidnightWithdrawCollateral
 */
export class MidnightWithdrawCollateralAction extends Action {
  /**
   * @param marketId Market id.
   * @param onBehalf Address to withdraw tokens on behalf of.
   * @param to Address that will receive the withdrawn tokens.
   * @param amount Amount of tokens to withdraw. Send type(uint).max to withdraw whole amount.
   * @param collateralIndex Collateral index (0-based).
   */
  constructor(
    marketId: bytes32,
    onBehalf: EthAddress,
    to: EthAddress,
    amount: uint256,
    collateralIndex: uint256,
  ) {
    super(
      'MidnightWithdrawCollateral',
      getAddr('MidnightWithdrawCollateral'),
      ['bytes32', 'address', 'address', 'uint256', 'uint256'],
      [marketId, onBehalf, to, amount, collateralIndex],
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
