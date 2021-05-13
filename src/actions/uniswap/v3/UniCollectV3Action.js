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
     * @param {EthAddress} from
     */
    constructor(tokenId, recipient, amount0Max, amount1Max, from) {
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
        [[tokenId, recipient, amount0Max, amount1Max]]
      );
      
      this.from = from;

      this.mappableArgs = [
        this.args[0][0],
      ];
    }
  
    async getAssetsToApprove() {
      return [{asset : {positionManager : getAddr('UniswapV3PositionManager'), tokenId : this.args[0][0] }, owner : this.from}];
    }
  }
  
  module.exports = UniCollectV3Action;