const Action = require("../../Action");
const { tokenFromJoin, getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerSupplyAction - Supply token to a Safe
 */
class ReflexerSupplyAction extends Action {
  /**
   * @param safeId {SafeId}
   * @param amount {string}
   * @param adapterAddr {EthAddress}
   * @param from {EthAddress} Tokens will be supplied from this address
   */
  constructor(safeId, amount, adapterAddr, from) {
    super('ReflexerSupply', getAddr('ReflexerSupply'), [['uint256','uint256','address','address']], [[safeId, amount, adapterAddr, from]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[0][2]);
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[0][3]}];
    return [];
  }

  async getEthValue() {
    const asset = tokenFromJoin(this.args[0][2]);
    if (asset === 'ETH') return this.args[0][1];
    return '0';
  }
}

module.exports = ReflexerSupplyAction;
