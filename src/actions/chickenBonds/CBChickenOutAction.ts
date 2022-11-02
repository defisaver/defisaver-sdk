import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CBChickenOutAction - Chickens out the pending bond
 */
export default class CBChickenOutAction extends Action {
  /**
   * @param bondID {string} Nft id of the bond
   * @param minLUSD {string} Min amount of lusd to receive
   * @param to {EthAddress}
   */
  constructor(bondId:uint256, minLUSD:uint256, to:EthAddress) {
    requireAddress(to);
    super('CBChickenOut', getAddr('CBChickenOut'), ['uint256','uint256','address'], [...arguments]);
  }
}