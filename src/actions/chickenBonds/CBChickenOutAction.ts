import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CBChickenOutAction - Chickens out the pending bond
 * 
 * @category ChickenBonds
 */
export class CBChickenOutAction extends Action {
  /**
   * @param bondID Nft id of the bond
   * @param minLUSD Min amount of lusd to receive
   * @param to
   */
  constructor(bondId:uint256, minLUSD:uint256, to:EthAddress) {
    requireAddress(to);
    super('CBChickenOut', getAddr('CBChickenOut'), ['uint256','uint256','address'], [...arguments]);
  }
}