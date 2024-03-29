import { tokenFromJoin, getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerSupplyAction - Supply token to a Vault
 *
 * @category Maker
 */
export class MakerSupplyAction extends Action {
  /**
   * @param vaultId
   * @param amount
   * @param joinAddr
   * @param from Tokens will be supplied from this address
   * @param mcdManager
   */
  constructor(vaultId:uint256, amount:uint256, joinAddr:EthAddress, from:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdSupply', getAddr('McdSupply'), ['uint256', 'uint256', 'address', 'address', 'address'], [vaultId, amount, joinAddr, from, mcdManager]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]).replace(/^ETH/, 'WETH');
    if (asset !== 'ETH') return [{ asset: getAssetInfo(asset).address, owner: this.args[3] }];
    return [];
  }
}