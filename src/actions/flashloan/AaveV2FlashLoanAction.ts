import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes} from '../../types';

/**
 * Gets a flashloan from Aave v2
 * 
 * @category Flashloans
 */
export class AaveV2FlashLoanAction extends Action {
  /**
   * @param loanAmounts
   * @param tokens
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens:Array<EthAddress>,loanAmounts:Array<uint256>, modes:Array<uint256>, loanPayer:EthAddress, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes= []) {
    super(
      'FLAaveV2',
      getAddr('FLAaveV2'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []]
    );
  }
}