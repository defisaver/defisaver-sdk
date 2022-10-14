const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class AaveQuotePriceTrigger extends Action {

  constructor(baseTokenAddr, quoteTokenAddr, price, state) {
    super('AaveQuotePriceTrigger', getAddr('AaveQuotePriceTrigger'), ['address', 'address', 'uint256', 'uint8'], [...arguments]);
  }

}

module.exports = AaveQuotePriceTrigger;
