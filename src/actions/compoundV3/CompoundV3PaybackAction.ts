import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import { getAssetInfoByAddress } from "@defisaver/tokens";
import {EthAddress,uint256} from '../../types';

/**
 * CompoundV3PaybackAction - Repays specified amount of base token
 * 
 * @category CompundV3
 */
 export class CompoundV3PaybackAction extends Action {

    tokenForApproval:EthAddress;

    /**
     * @param market Comet proxy address of the market
     * @param amount amount of base token to be paid back
     * @param from address from which funds are paid
     * @param onBehalf address for which the funds are paid back
     * @param asset address for which the funds are paid back
     */
    constructor(market:EthAddress, amount:uint256, from:EthAddress, onBehalf:EthAddress,asset:EthAddress) {
      requireAddress(from);
      requireAddress(onBehalf);
      requireAddress(asset)
      super(
        'CompV3Payback',
        getAddr('CompV3Payback'),
        ['address','uint256','address','address'],
        [...arguments].slice(0,4)
      );
      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
        this.args[3],
      ];
      this.tokenForApproval = asset;
    }

    async getAssetsToApprove() {
      const asset = getAssetInfoByAddress(this.tokenForApproval);

      if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[2]}];
      return [];
    }
  }