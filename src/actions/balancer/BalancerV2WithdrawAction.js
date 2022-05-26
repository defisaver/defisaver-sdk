const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/**
 * BalancerV2WithdrawAction - Withdraw tokens from Balancer pool
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
        "bytes32",
        "address",
        "address",
        "uint256",
        "address[]",
        "uint256[]",
        "bytes",
      ],
      [poolId, from, to, lpTokenAmount, tokens, minAmountsOut, userData]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];

    for (let i = 0; i < this.args[5].length; i++){
      this.mappableArgs.push(this.args[5][i]);
    }
  }

  async getAssetsToApprove() {
    const approveArr = [];
    const token = this.args[0].slice(0,42);
    approveArr.push({asset: token, owner: this.args[1], specialApproveLabel: 'balancer'});
    return approveArr;
  }
}

module.exports = BalancerV2WithdrawAction;
