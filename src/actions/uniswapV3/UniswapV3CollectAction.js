const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/**
 * Collects fees earned by user on position identified by tokenId
 */
class UniswapV3CollectAction extends Action {
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
    return [{
      nft: getAddr('UniswapV3PositionManager'),
      tokenId: this.args[0][0],
      owner: this.from,
      protocol: 'uniswap v3'
    }];
  }
}

module.exports = UniswapV3CollectAction;
