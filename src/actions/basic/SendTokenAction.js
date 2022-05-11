const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * Transfers specified token from recipe (DsProxy) to specified address
 */
class SendTokenAction extends Action {
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
      [[
        "address",
        "address",
        "uint",
      ]],
      [[...arguments]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
}

module.exports = SendTokenAction;
