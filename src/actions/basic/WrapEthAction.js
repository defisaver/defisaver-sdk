const Action = require("../../L2Action");
const {getAddr} = require("../../addresses.js");

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 */
class WrapEthAction extends L2Action {
  /**
   * @param amount {string} Transfer amount
   */
  constructor(amount) {
    super("WrapEth", getAddr("WrapEth"), [["uint256"]], [[...arguments]]);

    this.mappableArgs = [
      this.args[0][0],
    ];
  }

  async getEthValue() {
    return this.args[0];
  }
  encodeInputs(){
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][0]));
  }
}

module.exports = WrapEthAction;
