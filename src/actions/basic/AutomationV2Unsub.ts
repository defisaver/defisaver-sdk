import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 *
 * @category BasicActions
 */
export class AutomationV2Unsub extends Action {
  constructor(protocol:uint256, cdpId:uint256 = '0') {
    super(
      'AutomationV2Unsub',
      getAddr('AutomationV2Unsub'),
      ['uint256', 'uint256'],
      [cdpId, protocol],
    );
  }
}
