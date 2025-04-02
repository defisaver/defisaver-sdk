import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexOpenAction - Open a new position in the Fluid DEX vault.
 *
 * @category FluidDexOpen
 */
export class FluidDexOpenAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the collateral from.
   * @param to Address to send the borrowed assets to.
   * @param supplyAmount Amount of collateral to deposit. Used if vault is T3.
   * @param supplyVariableData Variable data for supply action. Used if vault is T2 or T4.
   * @param borrowAmount Amount of debt to borrow. Used if vault is T2.
   * @param borrowVariableData Variable data for borrow action. Used if vault is T3 or T4.
   * @param wrapBorrowedEth Whether to wrap the borrowed ETH into WETH if one of the borrowed assets is ETH.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    to: EthAddress,
    supplyAmount: uint256,
    supplyVariableData: Array<any>,
    borrowAmount: uint256,
    borrowVariableData: Array<any>,
    wrapBorrowedEth: boolean,
  ) {
    super(
      'FluidDexOpen',
      getAddr('FluidDexOpen'),
      [
        'address',
        'address',
        'address',
        'uint256',
        ['uint256', 'uint256', 'uint256'],
        'uint256',
        ['uint256', 'uint256', 'uint256'],
        'bool',
      ],
      [vault, from, to, supplyAmount, supplyVariableData, borrowAmount, borrowVariableData, wrapBorrowedEth],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4][0],
      this.args[4][1],
      this.args[4][2],
      this.args[5],
      this.args[6][0],
      this.args[6][1],
      this.args[6][2],
      this.args[7],
    ];
  }
}
