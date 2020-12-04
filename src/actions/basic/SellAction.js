const Action = require("../../Action");

/**
 * Sells token on DeFi Saver exchange aggregator
 */
class SellAction extends Action {
  /**
   * @param exchangeOrder {Array} Stardard DFS Exchange data
   * @param from {String} Order sender
   * @param to {String} Order recipient
   */
  constructor(exchangeOrder, from, to) {
    super(
      'DFSSell',
      '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed',
      [
        ["address","address","uint256","uint256","uint256","uint256","address","address","bytes",["address","address","uint256","uint256","bytes"]],
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
}

module.exports = SellAction;
