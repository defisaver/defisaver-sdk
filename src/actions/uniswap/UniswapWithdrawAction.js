const Action = require("../../Action");
const {getPoolAddressByAddresses} = require("../../utils/uniswap");
const {getAddr} = require('../../addresses.js');

/**
 * Withdraws liquidity from uniswap pool
 */
class UniswapWithdrawAction extends Action {
  /**
   * @param {EthAddress} tokenA
   * @param {EthAddress} tokenB
   * @param {string} liquidity
   * @param {EthAddress} to
   * @param {EthAddress} from
   * @param {string} amountAMin
   * @param {string} amountBMin
   * @param {number} deadline
   */
  constructor(tokenA, tokenB, liquidity, to, from, amountAMin, amountBMin, deadline) {
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
      [[...arguments]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }

  async getAssetsToApprove() {
    const lpAddress = getPoolAddressByAddresses(this.args[0][0], this.args[0][1])
    return [{asset: lpAddress, owner: this.args[0][4]}];
  }
}

module.exports = UniswapWithdrawAction;
