const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAssetInfoByAddress } = require("@defisaver/tokens");
const { getAddr } = require("../../addresses.js");

/**
 * Wraps a specified amount of Weth
 */
class WrapEthAction extends Action {
  /**
   * @param token {string} Token address
   * @param to {string} Transfer recipient
   * @param amount {string} Transfer amount (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(amount) {
    super("WrapEth", getAddr("WrapEth"), ["uint256"], [...arguments]);
  }
}

module.exports = WrapEthAction;
