import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LlamaLendWithdrawAction - Action that withdraws collateral from proxy llamalend position
 *
 * @category LlamaLend
 */
export class LlamaLendWithdrawAction extends Action {
  /**
   * address controllerAddress - Address of the llamalend market controller
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
      'LlamaLendWithdraw',
      getAddr('LlamaLendWithdraw'),
      ['address', 'address', 'uint256'],
      [controllerAddress, to, collateralAmount],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}
