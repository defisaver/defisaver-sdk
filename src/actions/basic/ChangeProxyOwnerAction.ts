import Action from "../../Action";
import { getAddr } from "../../addresses.js";
import {EthAddress} from '../../types';

/**
 * ChangeProxyOwnerAction - Changes EOA which owns the proxy that is being called
 */
export default class ChangeProxyOwnerAction extends Action {
  /**
   * @param newOwner {Address} Address of new owner
   */
  constructor(newOwner:EthAddress) {
    super("ChangeProxyOwner", getAddr("ChangeProxyOwner"), ["address"], [...arguments]);
  }
}