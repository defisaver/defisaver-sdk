import {Action} from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * AaveWithdrawAction - Withdraw token from an aave position
 */
export default class AaveWithdrawAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param to {EthAddress} Tokens will be withdrawn to this address
   */
  constructor(market: EthAddress, tokenAddr: EthAddress, amount: string, to:EthAddress) {
    requireAddress(to);
    super('AaveWithdraw', getAddr('AaveWithdraw'), ['address','address','uint256','address'], [...arguments]);
  }
}