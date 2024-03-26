import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Generalized Flashloan Payback
 *
 * @category Flashloans
 */
export class FLPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount: uint256, tokenAddr: EthAddress) {
    super(tokenAddr, getAddr('FLActionTEMP'), loanAmount);
  }
}
