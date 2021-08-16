const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class ChainLinkPriceTrigger extends Action {

  constructor(tokenAddr, price, state) {
    super("ChainLinkPriceTrigger", getAddr("ChainLinkPriceTrigger"), [["address", "uint256", "uint8"]], [[...arguments]]);
  }

}

module.exports = ChainLinkPriceTrigger;