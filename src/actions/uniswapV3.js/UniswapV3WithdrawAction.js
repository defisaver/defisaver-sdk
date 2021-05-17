const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/**
 * Burns liquidity, and returns underlying tokens to recipient
 */
class UniswapV3WithdrawAction extends Action {
  /**
   * @param {string} tokenId
   * @param {string} liquidity
   * @param {string} amount0Min
   * @param {string} amount1Min
   * @param {number} deadline
   * @param {EthAddress} recipient
   * @param {string} amount0Max
   * @param {string} amount1Max
   * @param {EthAddress} from
   */
  constructor(tokenId, liquidity, amount0Min, amount1Min, deadline, recipient, amount0Max, amount1Max, from) {
    super(
      'UniWithdrawV3',
      getAddr('UniWithdrawV3'),
      [
        [
          "uint256",
          "uint128",
          "uint256",
          "uint256",
          "uint256",
          "address",
          "uint128",
          "uint128",
        ],
      ],
      [[tokenId, liquidity, amount0Min, amount1Min, deadline, recipient, amount0Max, amount1Max]]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }

  async getAssetsToApprove() {
    return [{
      nft: getAddr('UniswapV3PositionManager'),
      tokenId: this.args[0][0],
      owner: this.from
    }];
  }
}

module.exports = UniswapV3WithdrawAction;
