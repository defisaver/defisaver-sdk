const Action = require("../Action");

class LiquityRatioTrigger extends Action {

  constructor(troveOwner, ratio, state) {
    super(
      "LiquityRatioTrigger",
      getAddr("LiquityRatioTrigger"),
      [["addresss", "uint256", "uint8"]],
      [[...arguments]]
    );
  }
}

module.exports = LiquityRatioTrigger;
