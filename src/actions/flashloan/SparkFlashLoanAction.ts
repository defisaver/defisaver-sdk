import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a flashloan from Spark with fee enabled
 *
 * @category Flashloans
 */
export class SparkFlashLoanAction extends ActionWithL2 implements FlashLoanId {
  public flashLoanId = 7;

  /**
   * @param tokens
   * @param loanAmounts
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens: Array<EthAddress>, loanAmounts: Array<uint256>, modes: Array<uint256>, loanPayer: EthAddress, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super(
      'FLSpark',
      getAddr('FLSpark'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []],
    );
  }
}
