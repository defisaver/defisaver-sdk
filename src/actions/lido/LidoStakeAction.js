const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * LidoStakeAction - Stakes ETH sent on Lido contract, receives stETH in return
 */
class LidoStakeAction extends Action {
  /**
   * @param to {ETHAddress} stETH will be sent to this address
   */
  constructor(to) {
    super('LidoStake', getAddr('LidoStake'), ['address'], [to]);
    this.mappableArgs = [
      this.args[0][0],
    ];
  }
  
  async getAssetsToApprove() {
    return [];
  }
}

module.exports = LidoStakeAction;