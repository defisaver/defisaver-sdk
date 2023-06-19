import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CurveUsdWithdrawAction - Action that withdraws collateral from proxy curveusd position
 *
 * @category CurveUsd
 */
export class CurveUsdWithdrawAction extends Action {
  /**
   * address controllerAddress - Address of the curveusd market controller
   * address to - Address that will receive the withdrawn collateral, will default to proxy
   * uint256 collateralAmount - Amount of collateral to withdraw
   */
  /// @dev collateralAmount must be non-zero
  /// @dev if collateralAmount == uintMax will withdraw as much as the debt will allow
  constructor(
    controllerAddress: EthAddress,
    to: EthAddress,
    collateralAmount: uint256,
  ) {
    super(
      'CurveUsdWithdraw',
      getAddr('CurveUsdWithdraw'),
      ['address', 'address', 'uint256'],
      [controllerAddress, to, collateralAmount],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}
