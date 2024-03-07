import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LlamaLendBorrowAction - Action that borrows debt asset from proxy llamalend position
 *
 * @category LlamaLend
 */
export class LlamaLendBorrowAction extends Action {
  /**
   * address controllerAddress - Address of the llamalend market controller
   * address to - Address that will receive the borrowed debt asset, will default to proxy
   * uint256 debtAmount - Amount of debt asset to borrow
   */
  /// @dev debtAmount must be non-zero
  /// @dev if debtAmount == uintMax will borrow as much as the collateral will support
  constructor(
    controllerAddress: EthAddress,
    to: EthAddress,
    debtAmount: uint256,
  ) {
    super(
      'LlamaLendBorrow',
      getAddr('LlamaLendBorrow'),
      ['address', 'address', 'uint256'],
      [controllerAddress, to, debtAmount],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}