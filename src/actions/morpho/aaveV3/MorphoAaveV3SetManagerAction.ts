import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
import { EthAddress } from '../../../types';


/**
 *
 * @category MorphoAaveV3
 */
export class MorphoAaveV3SetManagerAction extends Action {
  /**
   * @param market
   * @param manager
   * @param isAllowed
   */
  constructor(market: EthAddress, manager: EthAddress, isAllowed:boolean) {
    super(
      'MorphoAaveV3SetManager',
      getAddr('MorphoAaveV3SetManager'),
      [
        'address',
        'address',
        'bool',
      ],
      [market, manager, isAllowed],
    );
  }
}