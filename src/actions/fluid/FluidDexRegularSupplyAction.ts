import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexRegularSupplyAction - Supply collateral to the Fluid DEX T3 vault.
 *
 * @category Fluid
 */
export class FluidDexRegularSupplyAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the collateral from.
   * @param nftId The NFT ID of the position.
   * @param supplyAmount Amount of collateral to deposit.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
    supplyAmount: uint256,
  ) {
    super(
      'FluidDexSupply',
      getAddr('FluidDexSupply'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256'],
      ],
      [vault, from, nftId, supplyAmount, ['0', '0', '0']],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4][0],
      this.args[4][1],
      this.args[4][2],
    ];
  }
}
