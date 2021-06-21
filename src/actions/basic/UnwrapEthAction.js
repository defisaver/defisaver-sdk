const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const {getAddr} = require('../../addresses.js');

/**
 * Unwraps a specified amount of WETH from the proxy
 */
class UnwrapEthAction extends Action {
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
  }
}

module.exports = UnwrapEthAction;
