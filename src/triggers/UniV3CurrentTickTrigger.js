const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class UniV3CurrentTickTrigger extends Action {

  constructor(tokenId, state) {
    super("UniV3CurrentTickTrigger", getAddr("UniV3CurrentTickTrigger"), ["uint256", "uint8"], [...arguments]);
  }

}

module.exports = UniV3CurrentTickTrigger;
