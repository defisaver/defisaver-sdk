const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');
const {getAssetInfoByAddress} = require("@defisaver/tokens");

/**
 * CompoundV3PaybackAction - Repays specified amount of base token
 */
 class CompoundV3PaybackAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param amount {uint256} amount of base token to be paid back
     * @param from {EthAddress} address from which funds are paid
     * @param onBehalf {EthAddress} address for which the funds are paid back
     * @param asset {EthAddress} address for which the funds are paid back
     */
    constructor(market, amount, from, onBehalf,asset) {
      requireAddress(from);
      requireAddress(onBehalf);
      super(
        'CompV3Payback',
        getAddr('CompV3Payback'),
        ['address','uint256','address','address'],
        [...arguments]
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

  module.exports = CompoundV3PaybackAction;
