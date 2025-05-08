import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2BorrowAction - Borrows BOLD from a trove
 *
 * @category LiquityV2
 */
export class LiquityV2BorrowAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param to address to which to send the borrowed BOLD
   * @param troveId id of the trove to borrow from
   * @param amount BOLD amount to borrow
   * @param maxUpfrontFee maximum upfront fee user is willing to pay
   */
  constructor(
    market: EthAddress,
    to: EthAddress,
    troveId: uint256,
    amount: uint256,
    maxUpfrontFee: uint256,
  ) {
    super(
      'LiquityV2Borrow',
      getAddr('LiquityV2Borrow'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        'uint256',
      ],
      [
        market,
        to,
        troveId,
        amount,
        maxUpfrontFee,
      ],
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
