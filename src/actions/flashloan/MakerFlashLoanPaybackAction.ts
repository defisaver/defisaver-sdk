import SendTokenAction from "../basic/SendTokenAction";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a flashloan from Maker
 */
export default class MakerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(getAddr('DAI'), getAddr('FLMaker'), loanAmount);
  }
}