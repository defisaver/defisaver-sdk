import SendTokenAction from "../basic/SendTokenAction";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Pays back a single flashloan from Aave v2
 */
export default class AaveV2FlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress) {
    super(tokenAddr, getAddr('FLAaveV2'), loanAmount);
  }
}