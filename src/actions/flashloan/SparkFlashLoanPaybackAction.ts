import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Pays back a single flashloan from Spark with fee enabled
 *
 * @category Flashloans
 */
export class SparkFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount: uint256, tokenAddr: EthAddress) {
    super(tokenAddr, getAddr('FLSpark'), loanAmount);
  }
}