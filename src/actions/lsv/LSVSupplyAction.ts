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
export class LSVSupplyAction extends Action {
  /**
   * @param protocol
   * @param token
   * @param amount
   */
  constructor(protocol:string, token:EthAddress, amount:uint256) {
    super('LSVSupply', getAddr('LSVSupply'), ['string', 'address', 'uint256'], [protocol, token, amount]);
  }
}