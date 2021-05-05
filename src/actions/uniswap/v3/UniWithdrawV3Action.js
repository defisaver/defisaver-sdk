const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/**
 * Burns liquidity, and returns tokens to recipient
 */
 class UniWithdrawV3Action extends Action {
    /**
     * @param {string} tokenId
     * @param {string} liquidity
     * @param {string} amount0Min
     * @param {string} amount1Min
     * @param {number} deadline
     * @param {EthAddress} recipient
     * @param {string} amount0Max
     * @param {string} amount1Max
     */
    constructor(tokenId, liquidity, amount0Min, amount1Min, deadline, recipient, amount0Max, amount1Max) {
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
  
  module.exports = UniWithdrawV3Action;