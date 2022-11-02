import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Transfers specified token from recipe (DsProxy) to specified address unwraps if Weth address
 * 
 * @category BasicActions
 */
export class SendTokenAndUnwrapAction extends Action {
  /**
   * @param token {string} Token address
   * @param to {string} Transfer recipient
   * @param amount {string} Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token:EthAddress, to:EthAddress, amount:uint256) {
    requireAddress(to);
    super(
      'SendTokenAndUnwrap',
      getAddr('SendTokenAndUnwrap'),
      [
        "address",
        "address",
        "uint",
      ],
      [...arguments]
    );
  }
}