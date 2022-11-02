import Action from "../../Action";
import { getAssetInfoByAddress, getAssetInfo } from "@defisaver/tokens";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CompoundSupplyAction - Supply token to an Compound position
 * 
 * @category CompundV2
 */
export class CompoundSupplyAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param from {EthAddress}
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(cTokenAddr:EthAddress, amount:uint256, from:EthAddress, enableAsColl:boolean = true) {
    super('CompSupply', getAddr('CompSupply'), ['address','uint256','address','bool'], [cTokenAddr, amount, from, enableAsColl]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'cETH') return [{asset: getAssetInfo(asset.symbol.substr(1)).address, owner: this.args[2]}];
    else return [{asset: getAssetInfo('WETH').address, owner: this.args[2]}]
    return [];
  }
}