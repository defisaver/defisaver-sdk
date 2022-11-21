import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Pays back a single flashloan from Aave v2
 *
 * @category Flashloans
 */
export class AaveV2FlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount: uint256, tokenAddr: EthAddress) {
    super(tokenAddr, getAddr('FLAaveV2'), loanAmount);
  }
}
