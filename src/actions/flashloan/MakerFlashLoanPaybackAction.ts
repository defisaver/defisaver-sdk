import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * Pays back a flashloan from Maker
 *
 * @category Flashloans
 */
export class MakerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   */
  constructor(loanAmount:uint256) {
    super(getAddr('DAI'), getAddr('FLMaker'), loanAmount);
  }
}
