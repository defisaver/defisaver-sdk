import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from Balancer
 *
 * @category Flashloans
 */
export class BalancerFlashLoanAction extends FLAction {
  /**
   * @param tokens
   * @param amounts
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens: Array<EthAddress>, amounts: Array<uint256>, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.BALANCER,
      args: [tokens, amounts, [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
