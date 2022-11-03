import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { getAssetInfoByAddress } from "@defisaver/tokens";

/**
 * AaveSupplyAction - Supply token to an aave position
 * 
 * @category Aave
 */
export class AaveSupplyAction extends Action {
  /**
   * @param market - Address of market
   * @param tokenAddr - Address of Token
   * @param amount - Token amount 
   * @param from - Tokens will be sent from this address
   * @param onBehalf - Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl - If we need to enable asset as collateral
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
