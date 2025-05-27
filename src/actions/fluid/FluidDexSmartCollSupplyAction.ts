import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexSmartCollSupplyAction - Supply collateral to the Fluid DEX with smart collateral (T2, T4).
 *
 * @category Fluid
 */
export class FluidDexSmartCollSupplyAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the collateral from.
   * @param nftId The NFT ID of the position.
   * @param supplyVariableData Variable data for supply action
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
    supplyVariableData: Array<any>,
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
      [vault, from, nftId, '0', supplyVariableData],
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
