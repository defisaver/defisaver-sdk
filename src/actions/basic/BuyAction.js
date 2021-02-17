const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');
const { BN } = require('web3-utils');

/**
 * Buys an exact amount of dest token on DeFi Saver exchange aggregator
 */
class BuyAction extends Action {
  /**
   * @param exchangeOrder {Array} Stardard DFS Exchange data
   * @param from {String} Order sender
   * @param to {String} Order recipient
   */
  constructor(exchangeOrder, from, to) {
    super(
      'DFSBuy',
      getAddr('DFSBuy'),
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
      this.args[0][3],
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
    if (asset.symbol === 'ETH' || asset.symbol === 'WETH') {
    //   const price = parsePriceFromContract(this.args[0][4]);
    //   val = val.add(new BN(this.args[0][3]).times(price));
    // TODO return estimate using price
    }
    // TODO add 0x fee
    return val.toString();
  }
}

module.exports = BuyAction;
