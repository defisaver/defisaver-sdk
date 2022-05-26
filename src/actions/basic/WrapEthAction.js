const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require("../../addresses.js");

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 */
class WrapEthAction extends ActionWithL2 {
  /**
   * @param amount {string} Transfer amount
   */
  constructor(amount) {
    super("WrapEth", getAddr("WrapEth"), ["uint256"], [...arguments]);
  }

  async getEthValue() {
    return this.args[0][0];
  }
  encodeInputs(){
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][0]));
  }
}

module.exports = WrapEthAction;
