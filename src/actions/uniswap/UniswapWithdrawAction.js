const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Withdraws liquidity from uniswap pool
 */
class UniswapWithdrawAction extends Action {
  /**
   * @param uniWithdrawData {Array} Uni withdraw struct
   * address tokenA;
   * address tokenB;
   * uint256 liquidity;
   * address to;
   * address from;
   * uint256 amountAMin;
   * uint256 amountBMin;
   * uint256 deadline;
   */
  constructor(uniWithdrawData) {
    super(
      'UniWithdraw',
      getAddr('UniWithdraw'),
      [
        [
          "address",
          "address",
          "uint256",
          "address",
          "address",
          "uint256",
          "uint256",
          "uint256",
      ],
    ],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }

  // should approve lpAddr but we don't have that info witouth web3 call
  // async getAssetsToApprove() {
  // }

}

module.exports = UniswapWithdrawAction;
