import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * BprotocolLiquitySPWithdraw - Action that withdraws LUSD from Bprotocol
 * @dev LQTY rewards accrue over time and are paid out each time the user interacts with the protocol
 * @dev Idealy the WETH returned amount will be zero (shares paid out in LUSD in full) but depends on the protocol usage
 * @category Bprotocol
 */
export class BprotocolLiquitySPWithdrawAction extends Action {
  /**
   * @param shareAmount Amount of shares to burn
   * @param to Address that will recieve the LUSD and WETH withdrawn
   * @param lqtyTo Address that will recieve LQTY rewards
   */
  constructor(shareAmount:uint256, to:EthAddress, lqtyTo: EthAddress) {
    super('BprotocolLiquitySPWithdraw', getAddr('BprotocolLiquitySPWithdraw'), ['uint256', 'address', 'address'], [shareAmount, to, lqtyTo]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
