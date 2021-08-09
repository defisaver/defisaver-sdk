const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/*
 * 
 */
class BalancerV2ClaimAction extends Action {
  /**
   * @param {EthAddress} liquidityProvider
   * @param {EthAddress} to
   * @param {} claims
   */
  constructor(liquidityProvider, to, weeks, balances, merkleProofs) {
    super(
      'BalancerV2Claim',
      getAddr('BalancerV2Claim'),
      [
        [
          "address",
          "address",
          "uint256[]",
          "uint256[]",
          "bytes32[][]",
        ],
      ],
      [[liquidityProvider, to, weeks, balances, merkleProofs]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }

  async getAssetsToApprove() {

    const approveArr = [];
      if (this.args[0][0] !== this.args[0][1]){
        const tokenAddress = getAddr('BalancerToken');
        approveArr.push({asset: tokenAddress, owner: this.args[0][0]});
      }
    return approveArr;
  }
}

module.exports = BalancerV2ClaimAction;
