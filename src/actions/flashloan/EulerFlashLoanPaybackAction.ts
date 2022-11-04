import {SendTokenAction} from "../basic/SendTokenAction";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a flashloan from Euler
 * 
 * @category Flashloans
 */
export class EulerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(tokenAddr, getAddr('FLEuler'), loanAmount);
  }
}