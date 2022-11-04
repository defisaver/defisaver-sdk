import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses';
import {EthAddress} from '../../types';

/**
 * CompoundClaimAction - Claims Comp tokens for the specified address
 * 
 * @category CompundV2
 */
export class CompoundClaimAction extends Action {
  /**
   * @param cSupplyAddresses 
   * @param cBorrowAddresses
   * @param from
   * @param to
   */
  constructor(cSupplyAddresses:Array<EthAddress>, cBorrowAddresses:Array<EthAddress>, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('CompClaim', getAddr('CompClaim'), ["address[]", "address[]", "address", "address"], [cSupplyAddresses, cBorrowAddresses, from, to]);

    this.mappableArgs = [
      this.args[2],
      this.args[3],
    ];
  }
}