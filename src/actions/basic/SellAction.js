const ActionAbi = require('../../abis/Action.json');
const AbiCoder = require('web3-eth-abi');
const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAssetInfoByAddress } = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Sells token on DeFi Saver exchange aggregator
 */
class SellAction extends Action {
  /**
   * @param exchangeOrder {Array} Standard DFS Exchange data
   * @param from {string} Order sender
   * @param to {string} Order recipient
   * @param protocolFee {string} 0x fee (amount of ETH in Wei)
   */
  constructor(exchangeOrder, from, to, protocolFee = '0') {
    requireAddress(to);
    super(
      'DFSSell',
      getAddr('DFSSell'),
      [
        ["address","address","uint256","uint256","uint256","uint256","address","address","bytes",["address","address","address","uint256","uint256","bytes"]],
        "address",
        "address",
      ],
      [exchangeOrder, from, to]
    );

    this.protocolFee = protocolFee;

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[1],
      this.args[2],
    ];
  }

  encodeInputs() {
    const executeActionDirectAbi = ActionAbi.find(({ name }) => name === 'executeActionDirect');
    return AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall());
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0][0], owner: this.args[1]}];
    return [];
  }

  async getEthValue() {
    return this.protocolFee || '0';
  }
}

module.exports = SellAction;
