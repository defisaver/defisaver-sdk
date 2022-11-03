import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes} from '../../types';

/**
 * Gets a flashloan from DyDx
 * 
 * @category Flashloans
 */
export class DyDxFlashLoanAction extends Action {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(loanAmount:uint256, tokenAddr:EthAddress, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes= []) {
    super('FLDyDx',
      getAddr('FLDyDx'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[tokenAddr], [loanAmount], [], getAddr('Empty'),flParamGetterAddr, flParamGetterData, []],
      );
  }
}