const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * LidoWETHStakeAction - Receives WETH, transforms it to ETH then sends it to Lido staking contract receiving stETH in return
 */
class LidoWETHStakeAction extends Action {
  /**
   * @param amount {string} amount of WETH to pull and stake
   * @param from {EthAddress} WETH will be taken from this address
   * @param to {ETHAddress} stETH will be sent to this address
   */
  constructor(amount, from, to) {
    super('LidoWETHStake', getAddr('LidoWETHStake'), [['uint256','address', 'address']], [[amount, from, to]]);
    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
  
  async getAssetsToApprove() {
    return [{asset: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', owner: this.args[0][1]}];
  }
}

module.exports = LidoWETHStakeAction;