import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidVaultT1WithdrawAction - Withdraw assets from Fluid Vault T1 (1_col:1_debt)
 *
 * @category Fluid
 */
export class FluidVaultT1WithdrawAction extends Action {
  /**
   * @param vault The address of the Fluid Vault T1
   * @param nftId ID of the NFT representing the position
   * @param amount Amount to withdraw. Pass type(uint256).max to withdraw all.
   * @param to Address to send the withdrawn assets to
   * @param wrapWithdrawnEth Whether to wrap the withdrawn ETH into WETH if the withdrawn asset is ETH.
   */
  constructor(
    vault: EthAddress,
    nftId: uint256,
    amount: uint256,
    to: EthAddress,
    wrapWithdrawnEth: boolean,
  ) {
    super(
      'FluidVaultT1Withdraw',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256', 'address', 'bool'],
      [vault, nftId, amount, to, wrapWithdrawnEth],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}
