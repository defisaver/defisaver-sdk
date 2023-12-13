import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';

/**
 * Gets a flashloan from Aave v3 and opens a debt position instead of repaying
 *
 * @category Flashloans
 */
export class AaveV3FlashLoanCarryDebtAction extends ActionWithL2 {
  /**
   * @param loanAmounts
   * @param tokens
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens:Array<EthAddress>, loanAmounts:Array<uint256>, modes:Array<uint256>, loanPayer:EthAddress, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes = []) {
    super(
      'FLAaveV3CarryDebt',
      getAddr('FLAaveV3CarryDebt'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []],
    );
    if (tokens.length !== modes.length || tokens.length !== loanAmounts.length) {
      throw new Error('Arrays must be of the same length');
    }
    modes.forEach((mode) => {
      if (mode.toString() !== '1' && mode.toString() !== '2') {
        throw new Error('Invalid borrow mode set');
      }
    });
  }
}