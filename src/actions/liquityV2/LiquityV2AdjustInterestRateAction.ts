import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2AdjustInterestRateAction - Adjusts the interest rate for a specific trove
 *
 * @category LiquityV2
 */
export class LiquityV2AdjustInterestRateAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param troveId id of the trove to adjust the interest rate for
   * @param newAnnualInterestRate the new annual interest rate
   * @param upperHint upper hint for trove positioning
   * @param lowerHint lower hint for trove positioning
   * @param maxUpfrontFee maximum upfront fee the user is willing to pay
   */
  constructor(
    market: EthAddress,
    troveId: uint256,
    newAnnualInterestRate: uint256,
    upperHint: uint256,
    lowerHint: uint256,
    maxUpfrontFee: uint256,
  ) {
    super(
      'LiquityV2AdjustInterestRate',
      getAddr('LiquityV2AdjustInterestRate'),
      [
        'address',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
      ],
      [
        market,
        troveId,
        newAnnualInterestRate,
        upperHint,
        lowerHint,
        maxUpfrontFee,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }
}
