import Action from "../../Action";
import { getAddr } from "../../addresses.js";
import {EthAddress,uint256} from '../../types';

export default class GasFeeAction extends Action {
  /**
   * @param gasStart {string} Always 0 will be inject value
   * @param feeToken {string} Address of the token we are taken the fee in
   * @param availableAmount Amount we have available to pay the gas fee
   * @param dfsFeeDivider Additional fee for DFS, default is 5bps
   */
  constructor(gasStart:uint256, feeToken:EthAddress, availableAmount:uint256, dfsFeeDivider:uint256 = '2000') {
    super("GasFeeTaker",
      getAddr("GasFeeTaker"),
      ["uint256", "address", "uint256", "uint256"],
      [gasStart, feeToken, availableAmount, dfsFeeDivider],
    );

    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

}