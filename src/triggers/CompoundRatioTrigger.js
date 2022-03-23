const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class CompoundRatioTrigger extends Action {

  constructor(user, ratio, state) {
    super("CompoundRatioTrigger", getAddr("CompoundRatioTrigger"), [["address", "uint256", "uint8"]], [[...arguments]]);
  }
}

module.exports = CompoundRatioTrigger;
