import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 *  AaveStartUnstakeAction - begins the process of unstaking AAVE tokens for a proxy
 *
 *  @category Aave
 */
export class AaveStartUnstakeAction extends Action {
  constructor() {
    super(
      'AaveUnstake',
      getAddr('AaveUnstake'),
      ['uint256', 'address'],
      [0, getAddr('Empty')],
    );
  }
}
