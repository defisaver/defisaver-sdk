import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerTokenConverterAction - convert SKY <-> MKR and DAI <-> USDS
 *
 * @category Maker
 */
export class MakerTokenConverterAction extends Action {
  /**
   * @param tokenAddr
   * @param from
   * @param to
   * @param amount
   */
  constructor(tokenAddr:EthAddress, from:EthAddress, to:EthAddress, amount:uint256) {
    super('McdTokenConverter', getAddr('McdTokenConverter'), ['address', 'address', 'address', 'uint256'], [tokenAddr, from, to, amount]);
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[0], owner: this.args[1] }];
  }
}