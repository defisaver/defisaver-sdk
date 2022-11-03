import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * ReflexerGenerateAction - Generated Dai from a Safe
 * 
 * @category Reflexer
 */
export class ReflexerGenerateAction extends Action {
  /**
   * @param safeId {SafeId}
   * @param amount {string} Amount of Rai to generate in wei
   * @param to {EthAddress} Generated Rai will be sent to this address
   */
  constructor(vaultId:uint256, amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('ReflexerGenerate', getAddr('ReflexerGenerate'), ['uint256','uint256','address'], [vaultId, amount, to]);
  }
}