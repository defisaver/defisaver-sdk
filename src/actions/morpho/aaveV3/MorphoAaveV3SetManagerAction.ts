import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
import { EthAddress, uint256 } from '../../../types';


/**
 *
 * @category MorphoAaveV3
 */
export class MorphoAaveV3SetManagerAction extends Action {
  /**
   * @param emodeId
   * @param manager
   * @param isAllowed
   */
  constructor(emodeId: uint256, manager: EthAddress, isAllowed:boolean) {
    super(
      'MorphoAaveV3SetManager',
      getAddr('MorphoAaveV3SetManager'),
      [
        'uint256',
        'address',
        'bool',
      ],
      [emodeId, manager, isAllowed],
    );
  }
}