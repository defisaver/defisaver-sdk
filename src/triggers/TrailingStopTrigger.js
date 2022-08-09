const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class TrailingStopTrigger extends Action {
  constructor(tokenAddr, percentage, startTimeStamp) {
    super("TrailingStopTrigger", getAddr("TrailingStopTrigger"), ["address", "uint256", "uint256"], [...arguments]);
  }

}

module.exports = TrailingStopTrigger;