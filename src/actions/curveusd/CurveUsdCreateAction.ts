import { compare } from '@defisaver/tokens/esm/utils';
import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { curveusdMarkets } from '../../utils/curveusd-utils';

/**
 * CurveUsdCreateAction - Action that creates a curveusd position on behalf of proxy
 *
 * @category CurveUsd
 */
export class CurveUsdCreateAction extends Action {
  /**
   * address controllerAddress - Address of the curveusd market controller
   * address from - Address from which to pull collateral asset, will default to proxy
   * address to - Address that will receive the borrowed crvUSD, will default to proxy
   * uint256 collateralAmount - Amount of collateral asset to supply
   * uint256 debtAmount - Amount of crvUSD to borrow
   * uint256 nBands - Number of bands in which the collateral will be supplied
   */
  /// @dev both collateralAmount and debtAmount must be non-zero and can be maxUint
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    to: EthAddress,
    collateralAmount: uint256,
    debtAmount: uint256,
    nBands: uint256,
  ) {
    requireAddress(to);
    super(
      'CurveUsdCreate',
      getAddr('CurveUsdCreate'),
      ['address', 'address', 'address', 'uint256', 'uint256', 'uint256'],
      [controllerAddress, from, to, collateralAmount, debtAmount, nBands],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[1],
      asset: getAssetInfo(
        Object.entries(curveusdMarkets).filter(([, { controllerAddress }]) => compare(controllerAddress, this.args[0]))[0][0],
      ).address,
    }];
  }
}