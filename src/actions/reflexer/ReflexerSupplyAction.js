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
    super('ReflexerSupply', getAddr('ReflexerSupply'), ['uint256','uint256','address','address'], [safeId, amount, adapterAddr, from]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[3], protocol: 'reflexer'}];
    return [];
  }

  async getEthValue() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset === 'ETH') return this.args[1];
    return '0';
  }
}

module.exports = ReflexerSupplyAction;
