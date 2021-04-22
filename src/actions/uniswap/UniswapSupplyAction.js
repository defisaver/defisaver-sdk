const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const {getAddr} = require('../../addresses.js');

/**
 * Supplies a pair tokens to uniswap pool
 */
class UniswapSupplyAction extends Action {
  /**
   * @param {EthAddress} tokenA
   * @param {EthAddress} tokenB
   * @param {EthAddress} from
   * @param {EthAddress} to
   * @param {string} amountADesired
   * @param {string} amountBDesired
   * @param {string} amountAMin
   * @param {string} amountBMin
   * @param {number} deadline
   */
  constructor(tokenA, tokenB, from, to, amountADesired, amountBDesired, amountAMin, amountBMin, deadline) {
    super(
      'UniSupply',
      getAddr('UniSupply'),
      [
        [
          "address",
          "address",
          "address",
          "address",
          "uint256",
          "uint256",
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
    ];
  }

  async getAssetsToApprove() {
    const assetA = getAssetInfoByAddress(this.args[0][0]);
    const assetB = getAssetInfoByAddress(this.args[0][1]);

    const approveArr = [];

    if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[0][0], owner: this.args[0][2]});
    if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[0][1], owner: this.args[0][2]});

    return approveArr;
  }
}

module.exports = UniswapSupplyAction;
