const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class TimestampTrigger extends Action {

  constructor(nextTimestamp) {
    super("TimestampTrigger", getAddr("TimestampTrigger"), ["uint256"], [...arguments]);
  }
}

module.exports = TimestampTrigger;
