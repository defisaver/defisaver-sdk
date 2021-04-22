const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 */
class WrapEthAction extends Action {
  /**
   * @param amount {string} Transfer amount
   */
  constructor(amount) {
    super("WrapEth", getAddr("WrapEth"), ["uint256"], [...arguments]);
  }

  async getEthValue() {
    return this.args[0];
  }
}

module.exports = WrapEthAction;
