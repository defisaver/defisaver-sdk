import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 * HandleAuthAction - Action to enable/disable smart wallet authorization given
 *
 * @category BasicActions
 */
export class HandleAuthAction extends Action {
  /**
   * @param enableAuth if true it'll enable authorization, if false it'll disable authorization
   */
  constructor(enableAuth:boolean) {
    super('HandleAuth', getAddr('HandleAuth'), ['bool'], [enableAuth]);
  }
}