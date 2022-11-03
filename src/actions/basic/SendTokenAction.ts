import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Transfers specified token from recipe (DsProxy) to specified address
 * 
 * @category BasicActions
 */
export class SendTokenAction extends Action {
  /**
   * @param token {string} Token address
   * @param to {string} Transfer recipient
   * @param amount {string} Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token: EthAddress, to: EthAddress, amount:uint256) {
    requireAddress(to);
    super(
      'SendToken',
      getAddr('SendToken'),
      [
        "address",
        "address",
        "uint",
      ],
      [...arguments]
    );
  }
}