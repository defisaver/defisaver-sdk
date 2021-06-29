const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

class MakerRatioTrigger extends Action {
  /**
   * @param amount {string} Transfer amount
   */
  constructor(amount) {
    super("McdRatioTrigger", getAddr("WrapEth"), [["uint256"]], [[...arguments]]);
  }

  async getEthValue() {
    return this.args[0];
  }
}

module.exports = MakerRatioTrigger;
