const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
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
    super('LidoStake', getAddr('LidoStake'), ['uint256','address', 'address'], [amount, from, to]);
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('WETH').address, owner: this.args[1]}];
  }
}

module.exports = LidoStakeAction;
