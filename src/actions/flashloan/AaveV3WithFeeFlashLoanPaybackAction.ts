import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Pays back a single flashloan from Aave v3 with fee enabled
 *
 * @category Flashloans
 */
export class AaveV3WithFeeFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount: uint256, tokenAddr: EthAddress) {
    super(tokenAddr, getAddr('FLAaveV3WithFee'), loanAmount);
  }
}