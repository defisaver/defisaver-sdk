import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from Spark with fee enabled
 *
 * @category Flashloans
 */
export class SparkFlashLoanAction extends FLAction {
  /**
   * @param tokens
   * @param loanAmounts
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens: Array<EthAddress>, loanAmounts: Array<uint256>, modes: Array<uint256>, loanPayer: EthAddress, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.SPARK,
      args: [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []],
    });
  }
}
