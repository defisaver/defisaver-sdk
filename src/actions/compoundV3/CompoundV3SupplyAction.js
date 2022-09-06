const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3SupplyAction - Supply specified amount of token (base or collateral) 
 */
 class CompoundV3SupplyAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param tokenAddr {EthAddress}
     * @param amount {uint256} wei amount of asset to supply
     * @param from {EthAddress}
     */
     constructor(market, tokenAddr, amount, from,) {
        super('CompV3Supply', getAddr('CompV3Supply'), ['address','address','uint256','address'], [market, tokenAddr, amount, from]);
    
        this.mappableArgs = [
          this.args[0],
          this.args[1],
          this.args[2],
          this.args[3]
        ];
        this.tokenForApproval = tokenAddress;
      }

      async getAssetsToApprove() {
        const asset = getAssetInfoByAddress(this.tokenForApproval);

        if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[1]}];
        return [];
      }
  }
  
  module.exports = CompoundV3SupplyAction;