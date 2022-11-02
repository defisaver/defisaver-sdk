import Action from "../../Action";
import { getAssetInfoByAddress } from "@defisaver/tokens";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * YearnSupplyAction - Supply token to a Yearn vault
 */
export default class YearnSupplyAction extends Action {
  /**
   * @param tokenAddr {EthAddress} token address
   * @param amount {string} amount of tokens to supply
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param to {ETHAddress} yTokens will be sent to this address
   */
  constructor(tokenAddr:EthAddress, amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('YearnSupply', getAddr('YearnSupply'), ['address','uint256','address', 'address'], [tokenAddr, amount, from, to]);
    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[2], specialApproveLabel: 'yearn'}];
    return [];
  }
}