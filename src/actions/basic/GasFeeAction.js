const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

class GasFeeAction extends Action {
  /**
   * @param gasStart {string} Always 0 will be inject value
   * @param feeToken {string} Address of the token we are taken the fee in
   * @param oracleAddr {string} Chainlink oracle addr
   * @param actionId {string} Id of the fee taking action
   * @param actionData {string} Params of the fee taking action
   */
  constructor(gasStart, feeToken, oracleAddr, actionId, actionData) {
    super("GasFeeTaker", getAddr("GasFeeTaker"), ["uint256","address","address","bytes32","bytes"], [...arguments]);
  }

  async getEthValue() {
    return this.args[0];
  }
}

module.exports = GasFeeAction;
