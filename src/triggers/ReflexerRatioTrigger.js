const Action = require("../Action");
const {getAddr} = require("../addresses");

class ReflexerRatioTrigger extends Action {

  constructor(vaultId, ratio, state) {
    super("ReflexerRatioTrigger", getAddr("ReflexerRatioTrigger"), ["uint256", "uint256", "uint8"], [...arguments]);
  }
}

module.exports = ReflexerRatioTrigger;
