import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from MorphoBlue
 *
 * @category Flashloans
 */
export class MorphoBlueFlashLoanAction extends FLAction {
  /**
   * @param token
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(token: EthAddress, amount: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.MORPHO_BLUE,
      args: [[token], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
