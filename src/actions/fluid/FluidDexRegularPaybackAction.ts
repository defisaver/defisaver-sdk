import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexRegularPaybackAction - Payback debt on the Fluid DEX T2 vault.
 *
 * @category Fluid
 */
export class FluidDexRegularPaybackAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the debt tokens from.
   * @param nftId The NFT ID of the position.
   * @param paybackAmount The amount of debt to payback.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
    paybackAmount: uint256,
  ) {
    super(
      'FluidDexPayback',
      getAddr('FluidDexPayback'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256', 'uint256'],
      ],
      [vault, from, nftId, paybackAmount, ['0', '0', '0', '0']],
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
    ];
  }
}
