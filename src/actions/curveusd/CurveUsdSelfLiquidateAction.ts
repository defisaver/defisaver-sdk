import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, int256 } from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdSelfLiquidateAction extends Action {
  /**
  @param controllerAddress Address of the curveusd market controller
  @param minCrvUsdExpected Minimum amount of crvUsd as collateral for the user to have
  @param from Address from which to pull crvUSD if needed
  @param to Address that will receive the crvUSD and collateral asset
  */
  constructor(
    controllerAddress: EthAddress,
    minCrvUsdExpected: uint256,
    from: EthAddress,
    to: EthAddress,
  ) {
    super(
      'CurveUsdSelfLiquidate',
      getAddr('CurveUsdSelfLiquidate'),
      ['address', 'uint256', 'address', 'address'],
      [controllerAddress, minCrvUsdExpected, from, to],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[2],
      asset: getAssetInfo('crvUSD').address,
    }];
  }
}
