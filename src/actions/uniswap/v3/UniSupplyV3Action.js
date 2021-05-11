const Action = require("../../../Action");
const {getAddr} = require('../../../addresses.js');
const { getAssetAddrByTokenId } = require('../../../utils/uniV3.js')


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
     */
    constructor(tokenId, amount0Desired, amount1Desired, amount0Min, amount1Min, deadline, from) {
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

    async getAssetsToApprove(web3) {
      const tokenId = this.args[0][0];
      const tokens = await getAssetAddrByTokenId(web3, tokenId);
      const assetA = tokens[0];
      const assetB = tokens[1];
      const approveArr = [];

      if (assetA.symbol !== 'ETH') approveArr.push({asset: assetA, owner: this.args[0][6]});
      if (assetB.symbol !== 'ETH') approveArr.push({asset: assetB, owner: this.args[0][6]});

      return approveArr;
    }
  }
  
  module.exports = UniSupplyV3Action;