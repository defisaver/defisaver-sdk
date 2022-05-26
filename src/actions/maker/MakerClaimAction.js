const Action = require("../../Action");
const { tokenFromJoin, getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * MakerClaimAction - Claim bonus tokens in CropJoin types
 */
class MakerClaimAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param joinAddr {EthAddress}
   * @param to {EthAddress} Tokens will be sent to this address
   */
  constructor(vaultId, joinAddr, to) {
    super('McdClaim', getAddr('McdClaim'), ['uint256','address','address'], [vaultId, joinAddr, to]);

    this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
      ];
  }
}

module.exports = MakerClaimAction;
