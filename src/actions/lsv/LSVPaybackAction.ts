import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 *
 * @category LSV
 */
export class LSVPaybackAction extends Action {
  /**
   * @param protocol
   * @param amount
   */
  constructor(protocol:string, amount:uint256) {
    super('LSVPayback', getAddr('LSVPayback'), ['string', 'uint256'], [protocol, amount]);
  }
}