const Action = require("../../Action");
const { getAssetInfoByAddress, getAssetInfo } = require("@defisaver/tokens");
const { getAddr } = require("../../addresses.js");

class InstPullTokensAction extends Action {
  constructor(dsaAddress, tokens, amounts, to) {
    super(
      "InstPullTokens",
      getAddr("InstPullTokens"),
      ["address", "address[]", "uint256[]", "address"],
      [dsaAddress, tokens, amounts, to]
    );
    this.mappableArgs = [];
  }

  async getAssetsToApprove() {
    return [{
      dsaAddress: this.args[0],
      specialApproveLabel: 'Instadapp'
    }];
  }
}

module.exports = InstPullTokensAction;
