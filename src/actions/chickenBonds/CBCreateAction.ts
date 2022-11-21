import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CBCreateAction - Create a chicken bond nft
 *
 * @category ChickenBonds
 */
export class CBCreateAction extends Action {
  /**
   * @param amount Wei amount in LUSD
   * @param from
   */
  constructor(amount:uint256, from:EthAddress) {
    requireAddress(from);
    super('CBCreate', getAddr('CBCreate'), ['uint256', 'address'], [amount, from]);
  }

  async getAssetsToApprove() {
    return [{ asset: getAddr('LUSD'), owner: this.args[1] }];
  }
}