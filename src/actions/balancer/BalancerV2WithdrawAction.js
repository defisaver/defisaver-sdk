const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/*
 * struct Params {
        bytes32 poolId;
        address from;
        address to;
        uint256 lpTokenAmount;
        IAsset[] tokens;
        uint256[] minAmountsOut;
        bytes userData;
    }
 */
class BalancerV2WithdrawAction extends Action {
  /**
   * @param {bytes32} poolId
   * @param {EthAddress} from
   * @param {EthAddress} to
   * @param {string} lpTokenAmount;
   * @param {address[]} tokens
   * @param {uint256[]} minAmountsOut
   * @param {bytes} userData
   */
  constructor(poolId, from, to, lpTokenAmount, tokens, minAmountsOut, userData) {
    super(
      'BalancerV2Withdraw',
      getAddr('BalancerV2Withdraw'),
      [
        [
          "bytes32",
          "address",
          "address",
          "uint256",
          "address[]",
          "uint256[]",
          "bytes",
        ],
      ],
      [[poolId, from, to, lpTokenAmount, tokens, minAmountsOut, userData]]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }

  async getAssetsToApprove() {
    const approveArr = [];
    // token = _getPoolAddress(this.args[0][0]);
    approveArr.push({asset: token, owner: this.args[0][1]});
    return approveArr;
  }
}

module.exports = BalancerV2WithdrawAction;
