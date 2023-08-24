import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { controllerToAssetMap } from '../../utils/curveusd-utils';


/**
 * CurveUsdSupplyAction - Action that supplies collateral to a curveusd position
 *
 * @category CurveUsd
 */
export class CurveUsdSupplyAction extends Action {
  /**
   * address controllerAddress - Address of the curveusd market controller
   * address from - Address from which to pull collateral asset, will default to proxy
   * address onBehalfOf - Address for which we are supplying, will default to proxy
   * uint256 collateralAmount - Amount of collateral asset to supply
   */
  /// @dev collateralAmount must be non-zero, can be maxUint
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    onBehalfOf: EthAddress,
    collateralAmount: uint256,
  ) {
    super(
      'CurveUsdSupply',
      getAddr('CurveUsdSupply'),
      ['address', 'address', 'address', 'uint256'],
      [controllerAddress, from, onBehalfOf, collateralAmount],
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