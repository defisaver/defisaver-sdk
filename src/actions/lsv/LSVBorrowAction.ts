import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

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
  constructor(protocol:uint8, amount:uint256) {
    super('LSVBorrow', getAddr('LSVBorrow'), ['uint8', 'uint256'], [protocol, amount]);
  }
}