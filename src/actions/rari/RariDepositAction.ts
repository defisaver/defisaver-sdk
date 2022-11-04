import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256} from '../../types';

/**
 * RariDepositAction - action that deposits one stablecoin (DAI, USDC, USDT, TUSD, BUSD, and sUSD) and receives RSPT back
 * 
 * @category Rari
 */
export class RariDepositAction extends Action {
  /**
   * @param fundManager fundManager for the pool which we want to deposit into
   * @param stablecoinAddress stablecoin token address
   * @param poolTokenAddress poolTokenAddress
   * @param amount amount of stablecoin to pull and deposit
   * @param from stablecoins will be taken from this address
   * @param to RSPT will be sent to this address
   */
  constructor(fundManager:EthAddress, stablecoinAddress:EthAddress, poolTokenAddress:EthAddress, amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('RariDeposit', getAddr('RariDeposit'), ['address', 'address', 'address', 'uint256', 'address', 'address'], [fundManager, stablecoinAddress, poolTokenAddress, amount, from, to]);
    this.mappableArgs = [
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: this.args[1], owner: this.args[4]}];
  }
}