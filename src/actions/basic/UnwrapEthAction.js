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
   * @param amount {string} Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token, to, amount) {
    requireAddress(to);
    super(
      'SendToken',
      getAddr('SendToken'),
      [
        "address",
        "address",
        "uint",
      ],
      [...arguments]
    );
  }
}

module.exports = SendTokenAction;
