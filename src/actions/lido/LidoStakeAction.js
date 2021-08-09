const Action = require("../../Action");
const {getAssetInfoByAddress, getAssetInfo} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * LidoStakeAction - Receives WETH, transforms it to ETH then sends it to Lido staking contract receiving stETH in return
 */
class LidoStakeAction extends Action {
  /**
   * @param amount {string} amount of WETH to pull and stake
   * @param from {EthAddress} WETH will be taken from this address
   * @param to {EthAddress} stETH will be sent to this address
   */
  constructor(amount, from, to) {
    super('LidoStake', getAddr('LidoStake'), [['uint256','address', 'address']], [[amount, from, to]]);
    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('WETH').address, owner: this.args[0][1]}];
  }
}

module.exports = LidoStakeAction;
