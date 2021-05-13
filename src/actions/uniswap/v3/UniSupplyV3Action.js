const Action = require("../../../Action");
const {getAddr} = require('../../../addresses.js');


/**
 * Supplies a pair tokens to uniswap v3 position marked by tokenId
 */
 class UniSupplyV3Action extends Action {
    /**
     * @param {string} tokenId
     * @param {string} amount0Desired
     * @param {string} amount1Desired
     * @param {string} amount0Min
     * @param {string} amount1Min
     * @param {number} deadline
     * @param {EthAddress} from
     * @param {EthAddress} token0
     * @param {EthAddress} token1
     */
    constructor(tokenId, amount0Desired, amount1Desired, amount0Min, amount1Min, deadline, from, token0, token1) {
      super(
        'UniSupplyV3',
        getAddr('UniSupplyV3'),
        [
          [
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "address",
            "address",
            "address",
          ],
        ],
        [[...arguments]]
      );
  
      this.mappableArgs = [
        this.args[0][0],
        this.args[0][1],
        this.args[0][2],
      ];
    }

    async getAssetsToApprove() {
      const assetA = getAssetInfoByAddress(this.args[0][7]);
      const assetB = getAssetInfoByAddress(this.args[0][8]);

      const approveArr = [];

      if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[0][7], owner: this.args[0][6]});
      if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[0][8], owner: this.args[0][6]});

      return approveArr;
    }
  }
  
  module.exports = UniSupplyV3Action;