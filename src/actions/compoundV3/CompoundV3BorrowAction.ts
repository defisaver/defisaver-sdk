import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CompoundV3BorrowAction - Borrow base tokens from CompoundV3
 *
 * @category CompundV3
 */
export class CompoundV3BorrowAction extends Action {
  /**
     * @param market Comet proxy address of the market
     * @param amount Wei amount in underlying asset decimals
     * @param to Address where we send the borrowed tokens
     * @param onBehalf Address from which we are borrowing the tokens
     */
  constructor(market:EthAddress, amount:uint256, to:EthAddress, onBehalf:EthAddress) {
    requireAddress(to);
    super('CompV3Borrow', getAddr('CompV3Borrow'), ['address', 'uint256', 'address', 'address'], [market, amount, to, onBehalf]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}