import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * Pays back a flashloan from GHO
 *
 * @category Flashloans
 */
export class GhoFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   */
  constructor(loanAmount:uint256) {
    super(getAddr('GHO'), getAddr('FLGho'), loanAmount);
  }
}
