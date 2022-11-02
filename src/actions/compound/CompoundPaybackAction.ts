import Action from "../../Action";
import { getAssetInfoByAddress, getAssetInfo } from "@defisaver/tokens";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CompoundPaybackAction - Payback borrowed tokens from Compound
 * 
 * @category CompundV2
 */
export class CompoundPaybackAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param from {EthAddress}
   * @param onBehalf {EthAddress} Defaults to DsProxy address if 0x0
   */
  constructor(cTokenAddr:EthAddress, amount:uint256, from:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
    super('CompPayback', getAddr('CompPayback'), ['address', 'uint256', 'address', 'address'], [cTokenAddr, amount, from, onBehalf]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'cETH') return [{asset: getAssetInfo(asset.symbol.substr(1)).address, owner: this.args[2]}];
    else return [{asset: getAssetInfo('WETH').address, owner: this.args[2]}]
    return [];
  }
}