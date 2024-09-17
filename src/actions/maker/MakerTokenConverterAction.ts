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
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[0], owner: this.args[1] }];
  }
}