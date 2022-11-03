import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * CompoundV3AllowAction - Change if manager has authority over owner based on isAllowed from CompoundV3
 * 
 * @category CompundV3
 */
 export class CompoundV3AllowAction extends Action {
    /**
     * @param market Comet proxy address of the market
     * @param manager address of manager
     * @param isAllowed
     */
    constructor(market:EthAddress, manager:EthAddress, isAllowed:boolean) {
      requireAddress(manager);
      super('CompV3Allow', getAddr('CompV3Allow'), ['address', 'address','bool'], [market,manager,isAllowed]);

      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
      ];
    }
  }