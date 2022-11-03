import { requireAddress } from "../../utils/general";
import { getAssetInfoByAddress } from "@defisaver/tokens";
import {Action}  from "../../Action";
import { getAddr } from "../../addresses.js";
import {EthAddress,uint256} from '../../types';

/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 * 
 * @category BasicActions
 */
export class PullTokenAction extends Action {
  /**
   * @param token Token address
   * @param from Transfer sender
   * @param amount Transfer amount (-1 for whole sender balance)
   */
  constructor(token:EthAddress, from:EthAddress, amount:uint256) {
    requireAddress(from);
    super(
      'PullToken',
      getAddr('PullToken'),
      [
        "address",
        "address",
        "uint",
      ],
      [token,from,amount]
    );
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[1]}];
    return [];
  }
}