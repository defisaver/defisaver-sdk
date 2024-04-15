import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, int256 } from '../../types';

/**
 * LlamaLendPaybackAction - Action that pays back debt asset to a llamalend position
 *
 * @category LlamaLend
 */
export class LlamaLendPaybackAction extends Action {
  /// @dev debtAmount must be non-zero
  /// @dev if debtAmount >= debt will repay whole debt and close the position, transfering collateral
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    onBehalfOf: EthAddress,
    to: EthAddress,
    debtAmount: uint256,
    maxActiveBand: int256,
    debtAsset: EthAddress,
  ) {
    super(
      'LlamaLendPayback',
      getAddr('LlamaLendPayback'),
      ['address', 'address', 'address', 'address', 'uint256', 'int256'],
      [controllerAddress, from, onBehalfOf, to, debtAmount, maxActiveBand],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[1],
      asset: this.args[6],
    }];
  }
}
