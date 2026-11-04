import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a GHO flashloan from GHO Flash Minter
 *
 * @category Flashloans
 */
export class GhoFlashLoanAction extends FLAction {
  /**
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(amount: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.GHO,
      args: [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
