import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { controllerToCollateralAssetMap, controllerToCollateralAssetPerChainIdMap } from '../../utils/llamalend-utils';


/**
 * LlamaLendSupplyAction - Action that supplies collateral to a llamalend position
 *
 * @category LlamaLend
 */
export class LlamaLendSupplyAction extends Action {
  /**
   * address controllerAddress - Address of the llamalend market controller
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
      'LlamaLendSupply',
      getAddr('LlamaLendSupply'),
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
      asset: controllerToCollateralAssetPerChainIdMap[CONFIG.chainId][this.args[0]],
    }];
  }
}