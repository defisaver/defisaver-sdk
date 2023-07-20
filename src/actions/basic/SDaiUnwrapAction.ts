import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint256,
} from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * SDaiUnwrapAction - Unwrap sDAI to DAI
 *
 * @category Spark
 */
export class SDaiUnwrapAction extends Action {
  /**
   * @param amount Amount of token to unwrap
   * @param from Address we are pulling sDAI from (fallback to proxy)
   * @param to Address we are sending DAI to (fallback to proxy)
   */
  constructor(amount: uint256, from: EthAddress = getAddr('Empty'), to: EthAddress = getAddr('Empty')) {
    requireAddress(to);
    super('SDaiUnwrap', getAddr('SDaiUnwrap'),
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
