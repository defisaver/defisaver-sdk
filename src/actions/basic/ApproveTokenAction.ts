import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *
 * @category BasicActions
 */
export class ApproveTokenAction extends Action {
  /**
   * @param token Token address
   * @param spender
   * @param amount Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token: EthAddress, spender: EthAddress, amount:uint256) {
    requireAddress(spender);
    super(
      'ApproveToken',
      getAddr('ApproveToken'),
      [
        'address',
        'address',
        'uint',
      ],
      [token, spender, amount],
    );
  }
}