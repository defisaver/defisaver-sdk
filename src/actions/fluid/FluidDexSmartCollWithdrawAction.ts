import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexSmartCollWithdrawAction - Withdraw assets from the Fluid DEX with smart collateral (T2, T4).
 *
 * @category Fluid
 */
export class FluidDexSmartCollWithdrawAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param to Address to send the withdrawn assets to.
   * @param nftId The NFT ID of the position.
   * @param withdrawVariableData Variable data for withdraw action.
   * @param wrapWithdrawnEth Whether to wrap the withdrawn ETH into WETH if one of the withdrawn assets is ETH.
   */
  constructor(
    vault: EthAddress,
    to: EthAddress,
    nftId: uint256,
    withdrawVariableData: Array<any>,
    wrapWithdrawnEth: boolean,
  ) {
    super(
      'FluidDexWithdraw',
      getAddr('FluidDexWithdraw'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256', 'uint256'],
        'bool',
      ],
      [vault, to, nftId, '0', withdrawVariableData, wrapWithdrawnEth],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4][0],
      this.args[4][1],
      this.args[4][2],
      this.args[4][3],
      this.args[5],
    ];
  }
}
