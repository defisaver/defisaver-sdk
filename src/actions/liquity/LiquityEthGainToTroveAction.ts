import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';
/**
 * LiquityEthGainToTroveAction - Withdraws earned ETH gains to the users Trove
 *
 * @category Liquity
 */
export class LiquityEthGainToTroveAction extends Action {
  /**
   * @param lqtyTo Address that will receive LQTY gains
   * @param upperHint Address in the linked list to use as an upper limit
   * @param lowerHint Address in the linked list to use as a lower limit
   */
  constructor(lqtyTo:EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
    requireAddress(lqtyTo);
    super('LiquityEthGainToTrove',
      getAddr('LiquityEthGainToTrove'),
      ['address', 'address', 'address'],
      [lqtyTo, upperHint, lowerHint]);

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
