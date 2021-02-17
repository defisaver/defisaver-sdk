const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');
const { BN } = require('web3-utils');

/**
 * Sells token on DeFi Saver exchange aggregator
 */
class SellAction extends Action {
  /**
   * @param exchangeOrder {Array} Standard DFS Exchange data
   * @param from {string} Order sender
   * @param to {string} Order recipient
   */
  constructor(exchangeOrder, from, to) {
    requireAddress(to);
    super(
      'DFSSell',
      getAddr('DFSSell'),
      [
        ["address","address","uint256","uint256","uint256","uint256","address","address","bytes",["address","address","address","uint256","uint256","bytes"]],
        "address",
        "address",
      ],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0][0], owner: this.args[1]}];
    return [];
  }

  async getEthValue() {
    let val = new BN('0');
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol === 'ETH' || asset.symbol === 'WETH') val = val.add(new BN(this.args[0][2]));
    // TODO add 0x fee
    return val.toString();
  }
}

module.exports = SellAction;
