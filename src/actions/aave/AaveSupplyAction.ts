import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint8,uint16,uint256,bytes32,bytes} from '../../types';
import { getAssetInfoByAddress } from "@defisaver/tokens";

/**
 * AaveSupplyAction - Supply token to an aave position
 */
export default class AaveSupplyAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(market: EthAddress, tokenAddr:EthAddress, amount:uint256, from:EthAddress, onBehalf:EthAddress = getAddr('Empty'), enableAsColl:boolean) {
    super('AaveSupply', getAddr('AaveSupply'), ['address','address','uint256','address','address','bool'], [market, tokenAddr, amount, from, onBehalf, enableAsColl]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[3]}];
    return [];
  }
}
