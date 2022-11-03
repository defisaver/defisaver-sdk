import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { getAssetInfoByAddress } from "@defisaver/tokens";

/**
 * AavePaybackAction - Payback borrowed tokens from Aave
 * 
 * @category Aave
 */
export class AavePaybackAction extends Action {
  /**
   * @param market - Address of market
   * @param tokenAddr - Address of Token
   * @param amount - Token amount 
   * @param rateMode - Borrow rate mode: Stable: 1, Variable: 2
   * @param from - Tokens will be sent from this address
   * @param onBehalf - Tokens will be paid back to this address' position (defaults to sender's proxy)
   */
  constructor(market:EthAddress, tokenAddr:EthAddress, amount:uint256, rateMode:uint256, from:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
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