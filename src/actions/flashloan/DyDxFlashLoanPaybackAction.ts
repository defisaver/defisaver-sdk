import {SendTokenAction} from "../basic/SendTokenAction";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a flashloan from DyDx
 * 
 * @category Flashloans
 */
export class DyDxFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(tokenAddr, getAddr('FLDyDx'), loanAmount);
  }
}