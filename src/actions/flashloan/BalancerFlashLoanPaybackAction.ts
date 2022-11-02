import SendTokenAction from "../basic/SendTokenAction";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a flashloan from Balancer
 */
export default class BalancerFlashLoanPaybackAction extends SendTokenAction {
   /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
    constructor(loanAmount:uint256, tokenAddr:EthAddress) {
      super(tokenAddr, getAddr('FLBalancer'), loanAmount);
    }
}