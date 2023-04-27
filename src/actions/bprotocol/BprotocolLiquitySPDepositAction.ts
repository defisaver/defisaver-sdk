import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * BprotocolLiquitySPDeposit - Action that deposits LUSD into Bprotocol
 * @dev LQTY rewards accrue over time and are paid out each time the user interacts with the protocol
 * @category Bprotocol
 */
export class BprotocolLiquitySPDepositAction extends Action {
  /**
   * @param lusdAmount Amount of LUSD to deposit into Bprotocol
   * @param from Address from where the LUSD is being pulled
   * @param lqtyTo Address that will recieve LQTY rewards
   */
  constructor(lusdAmount:uint256, from:EthAddress, lqtyTo:EthAddress) {
    super('BprotocolLiquitySPDeposit', getAddr('BprotocolLiquitySPDeposit'), ['uint256', 'address', 'address'], [lusdAmount, from, lqtyTo]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfo('LUSD').address;
    return [{ asset, owner: this.args[1] }];
  }
}
