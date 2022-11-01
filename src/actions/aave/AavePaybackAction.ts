import {Action} from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';
import { getAssetInfoByAddress } from "@defisaver/tokens";

/**
 * AavePaybackAction - Payback borrowed tokens from Aave
 */
export default class AavePaybackAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param rateMode {number} Borrow rate mode: Stable: 1, Variable: 2
   * @param from {EthAddress} Tokens will be sent from this address
   * @param onBehalf {EthAddress}
   */
  constructor(market:EthAddress, tokenAddr:EthAddress, amount:string, rateMode:number, from:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
    super('AavePayback',
      getAddr('AavePayback'),
      ['address', 'address', 'uint256', 'uint256', 'address', 'address'],
      [market, tokenAddr, amount, rateMode, from, onBehalf],
    );
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[4]}];
    return [];
  }
}