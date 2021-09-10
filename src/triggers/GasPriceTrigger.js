const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class GasPriceTrigger extends Action {

  constructor(maxGasPrice) {
    super("GasPriceTrigger", getAddr("GasPriceTrigger"), [["uint256"]], [[...arguments]]);
  }
}

module.exports = GasPriceTrigger;
