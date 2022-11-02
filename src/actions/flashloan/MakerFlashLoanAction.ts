import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes} from '../../types';

/**
 * Gets a flashloan from Maker
 */
export default class MakerFlashLoanAction extends Action {
  /**
   * @param amount {string}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(amount:uint256, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes= []) {
    super(
      'FLMaker',
      getAddr('FLMaker'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]
    );
  }
}