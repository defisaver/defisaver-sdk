import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes} from '../../types';

/**
 * Gets a flashloan from Balancer
 */
export default class BalancerFlashLoanAction extends Action {
  /**
   * @param tokens {EthAddress[]}
   * @param amounts {string[]}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(tokens:Array<EthAddress>, amounts:Array<uint256>, flParamGetterAddr:EthAddress = getAddr('Empty'), flParamGetterData:bytes= []) {
    super(
      'FLBalancer',
      getAddr('FLBalancer'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, amounts, [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]
    );
  }
}