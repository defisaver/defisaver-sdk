import SendTokenAction from "../basic/SendTokenAction";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a flashloan from Euler
 */
export default class EulerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(tokenAddr, getAddr('FLEuler'), loanAmount);
  }
}