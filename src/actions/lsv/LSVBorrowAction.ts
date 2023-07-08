import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 *
 *
 * @category LSV
 */
export class LSVBorrowAction extends Action {
  /**
   * @param protocol
   * @param amount
   */
  constructor(protocol:string, amount:uint256) {
    super('LSVBorrow', getAddr('LSVBorrow'), ['string', 'uint256'], [protocol, amount]);
  }
}