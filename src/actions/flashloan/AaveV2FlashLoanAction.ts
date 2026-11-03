import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from Aave v2
 *
 * @category Flashloans
 */
export class AaveV2FlashLoanAction extends FLAction {
  /**
   * @param loanAmounts
   * @param tokens
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens: Array<EthAddress>, loanAmounts: Array<uint256>, modes: Array<uint256>, loanPayer: EthAddress, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.AAVEV2,
      args: [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []],
    });
  }
}
