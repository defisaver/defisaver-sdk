const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * LidoUnwrapAction - Unwraps WStEth into StEth
 */
class LidoUnwrapAction extends Action {
  /**
   * @param amount {string} amount of WStEth to pull and Unwrap
   * @param from {EthAddress} WstEth will be taken from this address
   * @param to {EthAddress} stETH will be sent to this address
   */
  constructor(amount, from, to) {
    super('LidoUnwrap', getAddr('LidoUnwrap'), [['uint256','address', 'address']], [[amount, from, to]]);
    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', owner: this.args[0][1]}];
  }
}

module.exports = LidoUnwrapAction;
