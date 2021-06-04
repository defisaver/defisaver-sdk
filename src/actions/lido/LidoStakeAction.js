const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * LidoStakeAction - Stakes ETH sent on Lido contract, receives stETH in return
 */
class LidoStakeAction extends Action {
  /**
   * @param ethAmount {string} amount of ETH that will be staked to Lido contract
   * @param to {ETHAddress} stETH will be sent to this address
   */
  constructor(ethAmount, to) {
    super('LidoStake', getAddr('LidoStake'), [['uint256', 'address']], [[ethAmount, to]]);
    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }
  
  async getAssetsToApprove() {
    return [];
  }
}

module.exports = LidoStakeAction;