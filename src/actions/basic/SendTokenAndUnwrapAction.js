const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Transfers specified token from recipe (DsProxy) to specified address unwraps if Weth address
 */
class SendTokenAndUnwrapAction extends Action {
  /**
   * @param token {string} Token address
   * @param to {string} Transfer recipient
   * @param amount {string} Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(token, to, amount) {
    requireAddress(to);
    super(
      'SendTokenAndUnwrap',
      getAddr('SendTokenAndUnwrap'),
      [
        "address",
        "address",
        "uint",
      ],
      [...arguments]
    );
  }
}

module.exports = SendTokenAndUnwrapAction;
