import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CompoundV3SetManager
 *
 * @category CompundV3
 */
export class CompoundV3SetManagerAction extends Action {
  /**
   * @param market
   * @param manager
   * @param isAllowed
   */
  constructor(market: EthAddress, manager: EthAddress, isAllowed:boolean) {
    requireAddress(manager);
    super(
      'CompV3SetManager',
      getAddr('CompV3SetManager'),
      [
        'address',
        'address',
        'bool',
      ],
      [market, manager, isAllowed],
    );
  }
}