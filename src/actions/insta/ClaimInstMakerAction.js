const Action = require("../../Action");
const { getAssetInfoByAddress, getAssetInfo } = require("@defisaver/tokens");
const { getAddr } = require("../../addresses.js");

class ClaimInstMakerAction extends Action {
  constructor(index, vaultId, rewardAmount, networthAmount, merkleProof, owner, to) {
    super(
      "ClaimInstMaker",
      getAddr("ClaimInstMaker"),
      [["uint256", "uint256", "uint256", "uint256", "bytes32[]", "address", "address"]],
      [[index, vaultId, rewardAmount, networthAmount, merkleProof,owner, to]]
    );
    this.mappableArgs = [];
  }

  async getAssetsToApprove() {
    return [];
  }
}

module.exports = ClaimInstMakerAction;
