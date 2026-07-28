import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes32, uint256 } from '../../types';

const offerFillsParamType = 'tuple(tuple(tuple(uint256,address,address,tuple(address,uint256,uint256,address)[],uint256,uint256,address,address),bool,address,uint256,uint256,uint256,bytes32,address,bytes,address,address,bool,uint128,uint128,uint256),bytes,uint256)[]';

/**
 * MidnightBorrowFromOrdersAction - Borrow from one or more Midnight offers.
 *
 * @category MidnightBorrowFromOrders
 */
export class MidnightBorrowFromOrdersAction extends Action {
  /**
   * @param marketId Market id.
   * @param onBehalf Address to borrow tokens on behalf of. Defaults to the user's wallet if not provided.
   * @param to Address to send the borrowed tokens to.
   * @param amount Amount of tokens to borrow.
   * @param maxUnits Maximum number of units to take from the orders (slippage protection).
   * @param offerFills Array of offer fills to borrow from.
   */
  constructor(
    marketId: bytes32,
    onBehalf: EthAddress,
    to: EthAddress,
    amount: uint256,
    maxUnits: uint256,
    offerFills: Array<any>,
  ) {
    super(
      'MidnightBorrowFromOrders',
      getAddr('Empty'),
      ['bytes32', 'address', 'address', 'uint256', 'uint256', offerFillsParamType],
      [marketId, onBehalf, to, amount, maxUnits, offerFills],
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
