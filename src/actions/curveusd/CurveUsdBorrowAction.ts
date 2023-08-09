import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CurveUsdBorrowAction - Action that borrows crvUSD from proxy curveusd position
 *
 * @category CurveUsd
 */
export class CurveUsdBorrowAction extends Action {
  /**
   * address controllerAddress - Address of the curveusd market controller
   * address to - Address that will receive the borrowed crvUSD, will default to proxy
   * uint256 debtAmount - Amount of crvUSD to borrow
   */
  /// @dev debtAmount must be non-zero
  /// @dev if debtAmount == uintMax will borrow as much as the collateral will support
  constructor(
    controllerAddress: EthAddress,
    to: EthAddress,
    debtAmount: uint256,
  ) {
    super(
      'CurveUsdBorrow',
      getAddr('CurveUsdBorrow'),
      ['address', 'address', 'uint256'],
      [controllerAddress, to, debtAmount],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}