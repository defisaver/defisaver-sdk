import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CompoundV3TransferAction - Transfer specified amount of assets from src address to dst
 * 
 * @category CompundV3
 */
 export class CompoundV3TransferAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param from {EthAddress} address of src
     * @param to {EthAddress} address of dst
     * @param asset {EthAddress} address of ERC20 token
     * @param amount {uint256} amount of assets to be transferred
     */
    constructor(market:EthAddress, from:EthAddress, to:EthAddress, asset:EthAddress, amount:uint256) {
      requireAddress(from);
      requireAddress(to);
      requireAddress(asset);
      super(
        'CompV3Transfer', 
        getAddr('CompV3Transfer'), 
        ['address','address','address','address','uint256'], 
        [...arguments]
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