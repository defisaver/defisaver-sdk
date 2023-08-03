import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

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
  constructor(protocol:uint8, token:EthAddress, amount:uint256) {
    super('LSVSupply', getAddr('LSVSupply'), ['uint8', 'address', 'uint256'], [protocol, token, amount]);
  }
}