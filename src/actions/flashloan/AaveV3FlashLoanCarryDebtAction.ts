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
   * @param tokens
   * @param loanAmounts
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens:Array<EthAddress>, loanAmounts:Array<uint256>, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes = []) {
    if (tokens.length !== loanAmounts.length) {
      throw new Error('Tokens and loan amounts must be of the same length');
    }
    const modes: Array<uint256> = Array(tokens.length).fill(2); // always use variable borrow rate
    super(
      'FLAaveV3CarryDebt',
      getAddr('FLAaveV3CarryDebt'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, loanAmounts, modes, getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    );
  }
}