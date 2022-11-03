import {Action}  from "../../Action";
import { getAddr } from "../../addresses.js";
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";


/**
 * @category Insta
 */
export class InstPullTokensAction extends Action {
  /**
   * @param dsaAddress
   * @param tokens
   * @param amounts
   * @param to
   */
  constructor(dsaAddress:EthAddress, tokens:Array<EthAddress>, amounts:Array<uint256>, to:EthAddress) {
    requireAddress(to);
    super(
      "InstPullTokens",
      getAddr("InstPullTokens"),
      ["address", "address[]", "uint256[]", "address"],
      [dsaAddress, tokens, amounts, to]
    );
    this.mappableArgs = [];
  }

  async getAssetsToApprove() {
    return [{
      dsaAddress: this.args[0],
      specialApproveLabel: 'Instadapp'
    }];
  }
}