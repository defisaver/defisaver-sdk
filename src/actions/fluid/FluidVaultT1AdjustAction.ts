import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

/**
 * FluidVaultT1AdjustAction - Adjust position on Fluid Vault T1 (1_col:1_debt)
 *
 * @category Fluid
 */
export class FluidVaultT1AdjustAction extends Action {
  /**
   * @param vault Address of the Fluid Vault T1
   * @param nftId ID of the NFT representing the position
   * @param collAmount Amount of collateral to supply/withdraw. In case of max withdraw, use type(uint256).max
   * @param debtAmount Amount of debt to payback/borrow
   * @param from Address to pull tokens from
   * @param to Address to send tokens to
   * @param sendWrappedEth Whether to wrap the ETH into WETH before sending to 'to' address
   * @param collAction Type of collateral action to perform. 0 for supply, 1 for withdraw
   * @param debtAction Type of debt action to perform. 0 for payback, 1 for borrow
   */
  constructor(
    vault: EthAddress,
    nftId: uint256,
    collAmount: uint256,
    debtAmount: uint256,
    from: EthAddress,
    to: EthAddress,
    sendWrappedEth: boolean,
    collAction: uint8,
    debtAction: uint8,
  ) {
    super(
      'FluidVaultT1Adjust',
      getAddr('FluidVaultT1Adjust'),
      ['address', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bool', 'uint8', 'uint8'],
      [vault, nftId, collAmount, debtAmount, from, to, sendWrappedEth, collAction, debtAction],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
      this.args[8],
    ];
  }
}
