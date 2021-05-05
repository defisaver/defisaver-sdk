const Action = require("../../../Action");
const {getAddr} = require('../../../addresses.js');

/**
 * Supplies a pair tokens to uniswap v3 position marked by tokenId
 */
 class UniCollectV3Action extends Action {
    /**
     * @param {string} tokenId
     * @param {EthAddress} recipient
     * @param {string} amount0Max
     * @param {string} amount1Max
     */
    constructor(tokenId, recipient, amount0Max, amount1Max) {
      super(
        'UniCollectV3',
        getAddr('UniCollectV3'),
        [
          [
            "uint256",
            "address",
            "uint128",
            "uint128",
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
      return [];
    }
  }
  
  module.exports = UniCollectV3Action;