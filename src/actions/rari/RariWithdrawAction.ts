import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256} from '../../types';

/**
 * RariWithdrawAction - Send pool tokens to fund manager which burns them, receive underlying stablecoin back
 * 
 * @category Rari
 */
export class RariWithdrawAction extends Action {
  /**
   * @param fundManager fundManager for the pool which we want to withdraw from
   * @param poolTokenAddress poolToken address
   * @param poolTokensAmountToPull amount of tokens to pull to proxy
   * @param from poolTokens will be taken from this address
   * @param stablecoinAddress stablecoin token address
   * @param stablecoinAmountToWithdraw amount of stablecoin to withdraw from Rari
   * @param to stablecoins withdrawn will be sent to this address
   */
  constructor(fundManager:EthAddress, poolTokenAddress:EthAddress, poolTokensAmountToPull:uint256, from:EthAddress, stablecoinAddress:EthAddress, stablecoinAmountToWithdraw:uint256, to:EthAddress) {
    requireAddress(to);
    super('RariWithdraw', getAddr('RariWithdraw'), ['address', 'address', 'uint256', 'address', 'address', 'uint256', 'address'], [fundManager, poolTokenAddress, poolTokensAmountToPull, from, stablecoinAddress, stablecoinAmountToWithdraw, to]);
    this.mappableArgs = [
      this.args[2],
      this.args[3],
      this.args[5],
      this.args[6],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: this.args[1], owner: this.args[3]}];
  }
}