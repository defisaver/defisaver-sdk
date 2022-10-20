const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class CompV3RatioTrigger extends Action {

  constructor(user, market, ratio, state) {
    super("CompV3RatioTrigger", getAddr("CompV3RatioTrigger"), [["address", "address", "uint256", "uint8"]], [[...arguments]]);
  }
}

module.exports = CompV3RatioTrigger;