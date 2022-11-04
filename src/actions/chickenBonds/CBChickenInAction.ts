import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * CBCreateAction - Chickens in the pending bond
 * 
 * @category ChickenBonds
 */
export class CBChickenInAction extends Action {
  /**
   * @param bondId Nft id of the bond
   * @param to 
   */
  constructor(bondId:uint256, to:EthAddress) {
    requireAddress(to);
    super('CBChickenIn', getAddr('CBChickenIn'), ['uint256','address'], [bondId,to]);
  }
}