import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256} from '../../types';

/**
 * RariDepositAction - action that deposits one stablecoin (DAI, USDC, USDT, TUSD, BUSD, and sUSD) and receives RSPT back
 */
export default class RariDepositAction extends Action {
  /**
   * @param fundManager {EthAddress} fundManager for the pool which we want to deposit into
   * @param stablecoinAddress {EthAddress} stablecoin token address
   * @param poolTokenAddress {EthAddress} poolTokenAddress
   * @param amount {string} amount of stablecoin to pull and deposit
   * @param from {EthAddress} stablecoins will be taken from this address
   * @param to {EthAddress} RSPT will be sent to this address
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