const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Supplies a pair tokens to uniswap pool
 */
class UniswapSupplyAction extends Action {
  /**
   * @param uniSupplyData {Array} Uni supply struct
   * address tokenA;
   * address tokenB;
   * address from;
   * address to;
   * uint256 amountADesired;
   * uint256 amountBDesired;
   * uint256 amountAMin;
   * uint256 amountBMin;
   * uint256 deadline;
   */
  constructor(uniSupplyData) {
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
      [...arguments]
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

    if (assetA !== 'ETH') approveArr.push({asset: this.args[0][0], owner: this.args[0][2]});;
    if (assetB !== 'ETH') approveArr.push({asset: this.args[0][1], owner: this.args[0][2]});

    return approveArr;
  }

}

module.exports = UniswapSupplyAction;
