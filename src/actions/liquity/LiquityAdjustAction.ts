import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

/**
 * LiquityAdjustAction - Adjust action for Liquity
 *
 * @category Liquity
 */
export class LiquityAdjustAction extends Action {
  /**
   * @param maxFeePercentage Highest borrowing fee to accept
   * @param collAmount Amount of collateral (weth) to deposit
   * @param lusdAmount Amount of LUSD tokens to borrow
   * @param collChange Whether to supply or withdraw collateral
   * @param debtChange Whether to borrow or repay LUSD
   * @param from Address where to pull the tokens from
   * @param to Address that will receive the borrowed tokens
   * @param upperHint Address in the linked list to use as an upper limit
   * @param lowerHint Address in the linked list to use as a lower limit
   */
  constructor(
    maxFeePercentage: uint256,
    collAmount: uint256,
    lusdAmount: uint256,
    collChange: uint8,
    debtChange: uint8,
    from: EthAddress,
    to: EthAddress,
    upperHint: EthAddress,
    lowerHint: EthAddress,
  ) {
    requireAddress(from);
    requireAddress(to);
    super(
      'LiquityAdjust',
      getAddr('LiquityAdjust'),
      ['uint256', 'uint256', 'uint256', 'uint8', 'uint8', 'address', 'address', 'address', 'address'],
      [maxFeePercentage, collAmount, lusdAmount, collChange, debtChange, from, to, upperHint, lowerHint],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[5],
      this.args[6],
    ];
  }
}
