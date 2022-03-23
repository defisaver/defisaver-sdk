const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * ReflexerGenerateAction - Generated Dai from a Safe
 */
class ReflexerGenerateAction extends Action {
  /**
   * @param safeId {SafeId}
   * @param amount {string} Amount of Rai to generate in wei
   * @param to {EthAddress} Generated Rai will be sent to this address
   */
  constructor(vaultId, amount, to) {
    requireAddress(to);
    super('ReflexerGenerate', getAddr('ReflexerGenerate'), [['uint256','uint256','address']], [[vaultId, amount, to]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
}

module.exports = ReflexerGenerateAction;
