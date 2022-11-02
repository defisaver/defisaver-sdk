import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes} from '../../types';

/**
 * Gets a flashloan from Euler using their low-level one token only flashloan option
 */
export default class EulerFlashLoanAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(tokenAddr:EthAddress, amount:uint256, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes= []) {
    super(
      'FLEuler',
      getAddr('FLEuler'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[tokenAddr], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]
    );
  }
}