import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from "../../addresses";
import {EthAddress,uint256} from '../../types';

/**
 * CompoundV3WithdrawAction - Withdraw token from an Compound position
 * 
 * @category CompundV3
 */
export class CompoundV3WithdrawAction extends Action {
  /**
   * @param market Comet proxy address of the market
   * @param to Address where we are sending the tokens
   * @param asset Address of asset to withdraw
   * @param amount Wei amount in specified asset
   * @param onBehalf Address from where we are withdrawing the tokens
   */
  constructor(market:EthAddress, to:EthAddress, asset:EthAddress, amount:uint256, onBehalf:EthAddress) {
    requireAddress(to);
    requireAddress(asset);
    super(
      "CompV3Withdraw",
      getAddr("CompV3Withdraw"),
      ["address","address", "address","uint256","address"],
      [market,to,asset,amount,onBehalf]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}