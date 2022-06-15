const Action = require("../../Action");
const {getPoolAddressByAddresses} = require("../../utils/uniswapLP");
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
        "address",
        "address",
        "uint256",
        "address",
        "address",
        "uint256",
        "uint256",
        "uint256",
      ],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }

  async getAssetsToApprove() {
    const lpAddress = getPoolAddressByAddresses(this.args[0], this.args[1])
    return [{asset: lpAddress, owner: this.args[4], specialApproveLabel: 'uniswap v2'}];
  }
}

module.exports = UniswapWithdrawAction;
