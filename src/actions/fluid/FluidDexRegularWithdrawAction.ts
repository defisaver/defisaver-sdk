import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexRegularWithdrawAction - Withdraw assets from the Fluid DEX T3 vault.
 *
 * @category Fluid
 */
export class FluidDexRegularWithdrawAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param to Address to send the withdrawn assets to.
   * @param nftId The NFT ID of the position.
   * @param withdrawAmount Amount of collateral to withdraw.
   * @param wrapWithdrawnEth Whether to wrap the withdrawn ETH into WETH if one of the withdrawn assets is ETH.
   */
  constructor(
    vault: EthAddress,
    to: EthAddress,
    nftId: uint256,
    withdrawAmount: uint256,
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
      [vault, to, nftId, withdrawAmount, ['0', '0', '0', '0'], wrapWithdrawnEth],
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
