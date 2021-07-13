const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');
const {getAssetInfoByAddress} = require("@defisaver/tokens");

/**
 * Create a uniswap v3 pool
 */
class UniswapV3CreatePoolAction extends Action {
  /**
   * @param {EthAddress} token0
   * @param {EthAddress} token1
   * @param {number} fee
   * @param {number} tickLower
   * @param {number} tickUpper
   * @param {string} amount0Desired
   * @param {string} amount1Desired
   * @param {string} amount0Min
   * @param {string} amount1Min
   * @param {EthAddress} recipient
   * @param {number} deadline
   * @param {EthAddress} from
   * @param {string} sqrtPriceX96
   */
  constructor(token0, token1, fee, tickLower, tickUpper, amount0Desired, amount1Desired, amount0Min, amount1Min, recipient, deadline, from, sqrtPriceX96) {
    super(
      'UniCreatePoolV3',
      getAddr('UniCreatePoolV3'),
      [
        [
          "address",
          "address",
          "uint24",
          "int24",
          "int24",
          "uint256",
          "uint256",
          "uint256",
          "uint256",
          "address",
          "uint256",
          "address",
          "uint160",
        ],
      ],
      [[...arguments]]
    );

    this.mappableArgs = [
      this.args[0][5],
      this.args[0][6],
    ];
  }

  async getAssetsToApprove() {
    const assetA = getAssetInfoByAddress(this.args[0][0]);
    const assetB = getAssetInfoByAddress(this.args[0][1]);

    const approveArr = [];

    if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[0][0], owner: this.args[0][11]});
    if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[0][1], owner: this.args[0][11]});
    
    return approveArr;
  }
}

module.exports = UniswapV3CreatePoolAction;
