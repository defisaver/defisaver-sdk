const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Unwraps a specified amount of Weth
 */
class UnwrapEthAction extends Action {
  /**
   * @param token {string} Token address
   * @param to {string} Transfer recipient
   */
  constructor(amount, to) {
    requireAddress(to);
    super(
      'UnwrapEth',
      getAddr('UnwrapEth'),
      [
        "uint256",
        "address"
      ],
      [...arguments]
    );
  }
}

module.exports = UnwrapEthAction;
