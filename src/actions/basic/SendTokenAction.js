const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Transfers specified token to specified address
 */
class SendTokenAction extends Action {
  /**
   * @param token {String} Token address
   * @param to {String} Transfer recipient
   * @param amount {String} Transfer amount
   */
  constructor(token, to, amount) {
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

  async getEthValue() {
    const asssetInfo = getAssetInfoByAddress(this.args[0])
    if (asssetInfo && asssetInfo.symbol === 'ETH') {
      return this.args[2];
    }
    return '0';
  }
}

module.exports = SendTokenAction;
