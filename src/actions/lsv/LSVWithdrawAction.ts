import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

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
  constructor(protocol:string, token:EthAddress, amount:uint256, isPositionClosing:boolean) {
    super('LSVWithdraw', getAddr('LSVWithdraw'), ['string', 'address', 'uint256', 'bool'], [protocol, token, amount, isPositionClosing]);
  }
}