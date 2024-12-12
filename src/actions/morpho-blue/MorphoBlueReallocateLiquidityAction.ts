import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBlueReallocateLiquidityAction - Action that bundles calls to Morpho Blue Public Allocator to reallocate liquidity for additional borrowing
 *
 * @category MorphoBlue
 */
export class MorphoBlueReallocateLiquidityAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken for target market to borrow from
   * @param collateralToken -  MarketParams collateralToken for target market to borrow from
   * @param oracle -  MarketParams oracle for target market to borrow from
   * @param irm -  MarketParams irm for target market to borrow from
   * @param lltv -  MarketParams lltv for target market to borrow from
   * @param vaults - Array of vaults to reallocate liquidity from
   * @param withdrawals - Array of withdrawals for each vault
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    vaults: EthAddress[],
    withdrawals: Array<Array<any>>,
  ) {
    super(
      'MorphoBlueReallocateLiquidity',
      getAddr('Empty'),
      [
        ['address', 'address', 'address', 'address', 'uint256'], // MarketParams
        'address[]', // vaults
        'tuple(tuple(address,address,address,address,uint256),uint256)[][]', // withdrawals
      ],
      [
        [loanToken, collateralToken, oracle, irm, lltv], // MarketParams
        vaults,
        withdrawals,
      ],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }

  async getAssetsToApprove() {
    return [];
  }
}
