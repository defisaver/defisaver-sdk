const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class AaveV3RatioTrigger extends Action {

  constructor(user, market, ratio, state) {
    super("AaveV3RatioTrigger", getAddr("AaveV3RatioTrigger"), [["address", "address", "uint256", "uint8"]], [[...arguments]]);
  }
}

module.exports = AaveV3RatioTrigger;