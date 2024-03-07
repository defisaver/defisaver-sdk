import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, int256 } from '../../types';
import { controllerToDebtAssetMap } from '../../utils/llamalend-utils';

/**
 * LlamaLendPaybackAction - Action that pays back debt asset to a llamalend position
 *
 * @category LlamaLend
 */
export class LlamaLendPaybackAction extends Action {
  /**
   * address controllerAddress - Address of the llamalend market controller
   * address from - Address from which to pull debt asset, will default to proxy
   * address onBehalfOf - Address for which we are paying back debt, will default to proxy
   * address to - Address that will receive the debt asset and collateral asset if close, will default to proxy
   * uint256 debtAmount - Amount of debt asset to payback
   * int256 maxActiveBand - Don't allow active band to be higher than this (to prevent front-running the repay)
   */
  /// @dev debtAmount must be non-zero
  /// @dev if debtAmount >= debt will repay whole debt and close the position, transfering collateral
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    onBehalfOf: EthAddress,
    to: EthAddress,
    debtAmount: uint256,
    maxActiveBand: int256,
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
      asset: controllerToDebtAssetMap[this.args[0] as keyof typeof controllerToDebtAssetMap],
    }];
  }
}
