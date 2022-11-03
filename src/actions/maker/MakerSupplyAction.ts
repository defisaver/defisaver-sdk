import {Action}  from "../../Action";
import { tokenFromJoin, getAssetInfo } from "@defisaver/tokens";
import {uint256, EthAddress} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * MakerSupplyAction - Supply token to a Vault
 * 
 * @category Maker
 */
export class MakerSupplyAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param joinAddr {EthAddress}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId:uint256, amount:uint256, joinAddr:EthAddress, from:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdSupply', getAddr('McdSupply'), ['uint256','uint256','address','address','address'], [vaultId, amount, joinAddr, from, mcdManager]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]).replace(/^ETH/, 'WETH');
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[3]}];
    return [];
  }
}