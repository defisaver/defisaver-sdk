import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CompoundBorrowAction - Borrow tokens from Compound
 * 
 * @category CompundV2
 */
export class CompoundBorrowAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param to {EthAddress}
   */
  constructor(cTokenAddr:EthAddress, amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('CompBorrow', getAddr('CompBorrow'), ['address','uint256','address'], [...arguments]);
  }
}