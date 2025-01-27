import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidVaultT1PaybackAction - Payback debt to Fluid Vault T1 (1_col:1_debt)
 *
 * @category Fluid
 */
export class FluidVaultT1PaybackAction extends Action {
  /**
   * @param vault The address of the Fluid Vault T1
   * @param nftId ID of the NFT representing the position
   * @param amount Amount to payback
   * @param from Address to pull the tokens from
   */
  constructor(
    vault: EthAddress,
    nftId: uint256,
    amount: uint256,
    from: EthAddress,
  ) {
    super(
      'FluidVaultT1Payback',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256', 'address'],
      [vault, nftId, amount, from],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
