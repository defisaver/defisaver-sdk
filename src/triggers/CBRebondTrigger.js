const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class CBRebondTrigger extends Action {
  constructor(bondID) {
    super("CBRebondTrigger", getAddr("CBRebondTrigger"), ["uint256"], [...arguments]);
  }

}

module.exports = CBRebondTrigger;