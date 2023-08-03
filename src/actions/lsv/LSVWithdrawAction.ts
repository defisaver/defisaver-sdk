import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

/**
 *
 * @category LSV
 */
export class LSVWithdrawAction extends Action {
  /**
   * @param protocol
   * @param token
   * @param amount
   * @param isPositionClosing
   */
  constructor(protocol:uint8, token:EthAddress, amount:uint256, isPositionClosing:boolean) {
    super('LSVWithdraw', getAddr('LSVWithdraw'), ['uint8', 'address', 'uint256', 'bool'], [protocol, token, amount, isPositionClosing]);
  }
}