import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * ReflexerOpenSafeAction
 * 
 * @category Reflexer
 */
export class ReflexerOpenSafeAction extends Action {
  /**
   * @param adapterAddr
   */
  constructor(adapterAddr:EthAddress) {
    super('ReflexerOpen', getAddr('ReflexerOpen'), ['address'], [adapterAddr]);
  }
}