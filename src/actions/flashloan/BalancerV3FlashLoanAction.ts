import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from BalancerV3
 *
 * @category Flashloans
 */
export class BalancerV3FlashLoanAction extends FLAction {
  /**
   * @param tokens
   * @param loanAmounts
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(
    tokens: Array<EthAddress>,
    loanAmounts: Array<uint256>,
    flParamGetterAddr: EthAddress = getAddr('Empty'),
    flParamGetterData: bytes = [],
  ) {
    super({
      flashLoanId: FLSource.BALANCER_V3,
      args: [tokens, loanAmounts, [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
