import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * ReflexerGenerateAction - Generated Dai from a Safe
 *
 * @category Reflexer
 */
export class ReflexerGenerateAction extends Action {
  /**
   * @param safeId
   * @param amount Amount of Rai to generate in wei
   * @param to Generated Rai will be sent to this address
   */
  constructor(safeId:uint256, amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('ReflexerGenerate', getAddr('ReflexerGenerate'), ['uint256', 'uint256', 'address'], [safeId, amount, to]);
  }
}