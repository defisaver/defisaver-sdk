import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from Maker
 *
 * @category Flashloans
 */
export class MakerFlashLoanAction extends FLAction {
  /**
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(amount: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.MAKER,
      args: [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
