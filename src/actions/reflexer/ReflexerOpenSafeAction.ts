import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * ReflexerOpenSafeAction
 */
export default class ReflexerOpenSafeAction extends Action {
  /**
   * @param adapterAddr {EthAddress}
   */
  constructor(adapterAddr:EthAddress) {
    super('ReflexerOpen', getAddr('ReflexerOpen'), ['address'], [adapterAddr]);
  }
}