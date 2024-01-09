import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';

/**
 * Gets a flashloan from MorphoBlue
 *
 * @category Flashloans
 */
export class MorphoBlueFlashLoanAction extends Action {
  /**
   * @param token
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(token:EthAddress, amount:uint256, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes = []) {
    super(
      'FLMorphoBlue',
      getAddr('FLMorphoBlue'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[token], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    );
  }
}