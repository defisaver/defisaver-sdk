import {Action}  from "../../Action";
import { getAssetInfo } from "@defisaver/tokens";
import {EthAddress,uint256} from '../../types';
import { getAddr } from '../../addresses';

/**
 * ReflexerPaybackAction - Payback RAI to a Safe
 * 
 * @category Reflexer
 */
export class ReflexerPaybackAction extends Action {
  /**
   * @param safeId
   * @param amount Amount of RAI to be payed back in wei
   * @param from RAI will be sent from this address
   */
  constructor(safeId:uint256, amount:uint256, from:EthAddress) {
    super('ReflexerPayback', getAddr('ReflexerPayback'), ['uint256','uint256','address'], [safeId, amount, from]);
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('RAI').address, owner: this.args[2]}];
  }
}