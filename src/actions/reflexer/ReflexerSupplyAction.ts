import Action from "../../Action";
import { tokenFromJoin, getAssetInfo } from "@defisaver/tokens";
import {EthAddress,uint256} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * ReflexerSupplyAction - Supply token to a Safe
 */
export default class ReflexerSupplyAction extends Action {
  /**
   * @param safeId {SafeId}
   * @param amount {string}
   * @param adapterAddr {EthAddress}
   * @param from {EthAddress} Tokens will be supplied from this address
   */
  constructor(safeId:uint256, amount:uint256, adapterAddr:EthAddress, from:EthAddress) {
    super('ReflexerSupply', getAddr('ReflexerSupply'), ['uint256','uint256','address','address'], [safeId, amount, adapterAddr, from]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[3]}];
    return [];
  }

  async getEthValue() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset === 'ETH') return this.args[1];
    return '0';
  }
}