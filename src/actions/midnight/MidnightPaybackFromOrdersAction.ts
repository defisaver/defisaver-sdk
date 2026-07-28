import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes32, uint256 } from '../../types';

const offerFillsParamType = 'tuple(tuple(tuple(uint256,address,address,tuple(address,uint256,uint256,address)[],uint256,uint256,address,address),bool,address,uint256,uint256,uint256,bytes32,address,bytes,address,address,bool,uint128,uint128,uint256),bytes,uint256)[]';

/**
 * MidnightPaybackFromOrdersAction - Pay back debt through one or more Midnight offers.
 *
 * @category MidnightPaybackFromOrders
 */
export class MidnightPaybackFromOrdersAction extends Action {
  /**
   * @param marketId Market id.
   * @param onBehalf Address whose debt is repaid. Defaults to the user's wallet if not provided.
   * @param from Address from which to pull the payback tokens.
   * @param amount Amount of tokens to spend. Send type(uint).max to pay back the whole debt.
   * @param minUnits Minimum number of debt units to repay (slippage protection).
   * @param offerFills Array of offer fills to pay back from.
   */
  constructor(
    marketId: bytes32,
    onBehalf: EthAddress,
    from: EthAddress,
    amount: uint256,
    minUnits: uint256,
    offerFills: Array<any>,
  ) {
    super(
      'MidnightPaybackFromOrders',
      getAddr('Empty'),
      ['bytes32', 'address', 'address', 'uint256', 'uint256', offerFillsParamType],
      [marketId, onBehalf, from, amount, minUnits, offerFills],
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
