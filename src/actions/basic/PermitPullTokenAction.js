const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');
const {getAssetInfoByAddress} = require("@defisaver/tokens");

/**
 * Transfers specified token from a specified address to DSProxy (recipe)
 */
class PermitPullTokenAction extends Action {
  /**
   * @param token Token address
   * @param from The address of the user from which we pull tokens and which signed the permit
   * @param amount Transfer amount (-1 for whole sender balance)
   * @param deadline Timestamp until which the permit is valid
   * @param v
   * @param r
   * @param s
   */
  constructor(token, from, amount, deadline, v, r, s) {
    requireAddress(from);
    super(
      'PermitPullToken',
      getAddr('PermitPullToken'),
      [[
        "address",
        "address",
        "uint256",
        "uint256",
        "uint8",
        "bytes32",
        "bytes32"
      ]],
      [[...arguments]]
    );
  }

  async getAssetsToApprove() {
  }
}

module.exports = PermitPullTokenAction;
