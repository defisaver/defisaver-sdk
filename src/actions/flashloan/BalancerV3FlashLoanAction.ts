import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a flashloan from BalancerV3
 *
 * @category Flashloans
 */
export class BalancerV3FlashLoanAction extends Action implements FlashLoanId {
  public flashLoanId = 10;

  /**
   * @param tokens
   * @param loanAmounts
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(
    tokens: Array<EthAddress>,
    loanAmounts: Array<uint256>,
    flParamGetterAddr: EthAddress = getAddr('Empty'),
    flParamGetterData: bytes = [],
  ) {
    super(
      'FLAction',
      getAddr('FLAction'),
      [
        'address[]',
        'uint256[]',
        'uint256[]',
        'address',
        'address',
        'bytes',
        'bytes',
      ],
      [
        tokens,
        loanAmounts,
        [],
        getAddr('Empty'),
        flParamGetterAddr,
        flParamGetterData,
        [],
      ],
    );
  }
}
