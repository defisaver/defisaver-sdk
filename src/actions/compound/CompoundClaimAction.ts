import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * CompoundClaimAction - Claims Comp tokens for the specified address
 * 
 * @category CompundV2
 */
export class CompoundClaimAction extends Action {
  /**
   * @param cSupplyAddresses {EthAddress[]}
   * @param cBorrowAddresses {EthAddress[]}
   * @param from {EthAddress}
   * @param to {EthAddress}
   */
  constructor(cSupplyAddresses:Array<EthAddress>, cBorrowAddresses:Array<EthAddress>, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('CompClaim', getAddr('CompClaim'), ["address[]", "address[]", "address", "address"], [...arguments]);

    this.mappableArgs = [
      this.args[2],
      this.args[3],
    ];
  }
}