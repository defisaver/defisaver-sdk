import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import { getAssetInfoByAddress } from "@defisaver/tokens";
import {EthAddress,uint256} from '../../types';

/**
 * CompoundV3SupplyAction - Supply specified amount of token (base or collateral)
 * 
 * @category CompundV3
 */
 export class CompoundV3SupplyAction extends Action {

    tokenForApproval:EthAddress;

    /**
     * @param market Comet proxy address of the market
     * @param tokenAddr
     * @param amount wei amount of asset to supply
     * @param from Address from where we're pulling the tokens
     * @param onBehalf Address of the account we are supplying the tokens
     */
     constructor(market:EthAddress, tokenAddr:EthAddress, amount:uint256, from:EthAddress, onBehalf:EthAddress) {
        super('CompV3Supply', getAddr('CompV3Supply'), ['address','address','uint256','address', 'address'], [market, tokenAddr, amount, from, onBehalf]);

        this.mappableArgs = [
          this.args[0],
          this.args[1],
          this.args[2],
          this.args[3],
          this.args[4]
        ];
        this.tokenForApproval = tokenAddr;
      }

      async getAssetsToApprove() {
        const asset = getAssetInfoByAddress(this.tokenForApproval);

        if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[1]}];
        return [];
      }
  }