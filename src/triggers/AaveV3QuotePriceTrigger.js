const Action = require("../Action");
const { getAddr } = require("../addresses.js");

class AaveV3QuotePriceTrigger extends Action {

  constructor(baseTokenAddr, quoteTokenAddr, price, state) {
    super('AaveV3QuotePriceTrigger', getAddr('AaveV3QuotePriceTrigger'), ['address', 'address', 'uint256', 'uint8'], [...arguments]);
  }

}

module.exports = AaveV3QuotePriceTrigger;
