const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class TrailingStopTrigger extends Action {
  constructor(tokenAddr, percentage, roundId) {
    super("TrailingStopTrigger", getAddr("TrailingStopTrigger"), ["address", "uint256", "uint80"], [...arguments]);
  }

}

module.exports = TrailingStopTrigger;