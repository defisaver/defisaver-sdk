import { tokenFromJoin, getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
import { getAddr } from '../../addresses';

/**
 * ReflexerSupplyAction - Supply token to a Safe
 *
 * @category Reflexer
 */
export class ReflexerSupplyAction extends Action {
  /**
   * @param safeId
   * @param amount
   * @param adapterAddr
   * @param from Tokens will be supplied from this address
   */
  constructor(safeId:uint256, amount:uint256, adapterAddr:EthAddress, from:EthAddress) {
    super('ReflexerSupply', getAddr('ReflexerSupply'), ['uint256', 'uint256', 'address', 'address'], [safeId, amount, adapterAddr, from]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset !== 'ETH') return [{ asset: getAssetInfo(asset).address, owner: this.args[3] }];
    return [];
  }

  async getEthValue() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset === 'ETH') return this.args[1];
    return '0';
  }
}