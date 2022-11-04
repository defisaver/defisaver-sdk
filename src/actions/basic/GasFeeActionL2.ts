import {Action}  from "../../Action";
import { getAddr } from "../../addresses";
import {EthAddress,uint256} from '../../types';

/**
 * @category BasicActions
 */
export class GasFeeActionL2 extends Action {
  /**
   * @param gasStart Always 0 will be inject value
   * @param feeToken Address of the token we are taken the fee in
   * @param availableAmount Amount we have available to pay the gas fee
   * @param dfsFeeDivider Additional fee for DFS, default is 5bps
   * @param l1GasCostInEth Additional tx cost for L1 in eth
   */
  constructor(gasStart:uint256, feeToken:EthAddress, availableAmount:uint256, dfsFeeDivider:uint256 = '2000', l1GasCostInEth:uint256 = '0') {
    super("GasFeeTakerL2",
      getAddr("GasFeeTakerL2"),
      ["uint256", "address", "uint256", "uint256", "uint256"],
      [gasStart, feeToken, availableAmount, dfsFeeDivider, l1GasCostInEth],
    );

    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}