import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { controllerToAssetMap } from '../../utils/curveusd-utils';


/**
 * CurveUsdAdjustAction - Action that supplies collateral to a curveusd position and borrows more crvUSD
 *
 * @category CurveUsd
 */
export class CurveUsdAdjustAction extends Action {
  /**
   * address controllerAddress - Address of the curveusd market controller
   * address from - Address from which to pull collateral asset, will default to proxy
   * address to - Address which will receive borrowed crvUSD
   * uint256 supplyAmount - Amount of collateral asset to supply (can be zero, can be max.uint)
   * uint256 borrowAmount - Amount of debt asset to borrow (must be non-zero)
   */
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    to: EthAddress,
    supplyAmount: uint256,
    borrowAmount: uint256,
  ) {
    super(
      'CurveUsdAdjust',
      getAddr('CurveUsdAdjust'),
      ['address', 'address', 'address', 'uint256', 'uint256'],
      [controllerAddress, from, to, supplyAmount, borrowAmount],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[1],
      asset: controllerToAssetMap[this.args[0] as keyof typeof controllerToAssetMap],
    }];
  }
}