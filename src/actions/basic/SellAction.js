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
  }

  _getMappableArgs() {
    return [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[1],
      this.args[2],
    ];
  }

  getArgsFromReturnVals(returnValues) {
    const _args = this.args;
    if (new RegExp(/\$\d+/).test(_args[0][0])) _args[0][0] = returnValues[parseInt(_args[0][0].substr(1)) - 1];
    if (new RegExp(/\$\d+/).test(_args[0][1])) _args[0][1] = returnValues[parseInt(_args[0][1].substr(1)) - 1];
    if (new RegExp(/\$\d+/).test(_args[0][2])) _args[0][2] = returnValues[parseInt(_args[0][2].substr(1)) - 1];
    if (new RegExp(/\$\d+/).test(_args[1])) _args[1] = returnValues[parseInt(_args[1].substr(1)) - 1];
    if (new RegExp(/\$\d+/).test(_args[2])) _args[2] = returnValues[parseInt(_args[2].substr(1)) - 1];
    return _args;
  }
}

module.exports = SellAction;
