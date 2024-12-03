import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 *  GhoStartUnstakeAction - begins the process of unstaking GHO tokens for a proxy
 *
 *  @category StkGHO
 */
export class GhoStartUnstakeAction extends Action {
  constructor() {
    super(
      'GhoUnstake',
      getAddr('GhoUnstake'),
      ['uint256', 'address'],
      [0, getAddr('Empty')],
    );
  }
}