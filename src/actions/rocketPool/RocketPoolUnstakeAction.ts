import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * RocketPoolUnstakeAction - Burns rETH and receives ETH in return
 *
 * @category RocketPool
 */
export class RocketPoolUnstakeAction extends Action {
  /**
   * @param amount amount of reth to burn (maxUint256 for whole balance)
   * @param to ETH will be sent to this address
   */
  constructor(amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('RocketPoolUnstake', getAddr('RocketPoolUnstake'), ['uint256', 'address'], [amount, to]);
  }
}
