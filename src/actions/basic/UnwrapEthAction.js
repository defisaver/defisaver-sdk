const ActionWithL2 = require("../../ActionWithL2");
const {requireAddress} = require("../../utils/general");
const {getAddr} = require('../../addresses.js');

/**
 * Unwraps a specified amount of WETH from the proxy
 */
class UnwrapEthAction extends ActionWithL2 {
  /**
   * @param amount {string} Token address
   * @param to {string} Transfer recipient
   */
  constructor(amount, to) {
    requireAddress(to);
    super(
      'UnwrapEth',
      getAddr('UnwrapEth'),
      [[
        "uint256",
        "address"
      ]],
      [[...arguments]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }
  encodeInputs(){
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][0]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][1]));
  }
}

module.exports = UnwrapEthAction;
