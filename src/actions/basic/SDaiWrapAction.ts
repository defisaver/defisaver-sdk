import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint256,
} from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * SDaiWrapAction - Wrap DAI to sDAI
 *
 * @category Spark
 */
export class SDaiWrapAction extends Action {
  /**
   * @param amount Amount of token to wrap
   * @param from Address we are pulling DAI from (fallback to proxy)
   * @param to Address we are sending sDAI to (fallback to proxy)
   */
  constructor(amount: uint256, from: EthAddress = getAddr('Empty'), to: EthAddress = getAddr('Empty')) {
    requireAddress(to);
    super('SDaiWrap', getAddr('SDaiWrap'),
      ['uint256', 'address', 'address'],
      [amount, from, to],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
