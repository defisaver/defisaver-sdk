import ActionWithL2 from '../../ActionWithL2';
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Collects fees earned by user on position identified by tokenId
 */
export default class UniswapV3CollectAction extends ActionWithL2 {

  from: EthAddress;

  /**
   * @param {string} tokenId
   * @param {EthAddress} recipient
   * @param {string} amount0Max
   * @param {string} amount1Max
   * @param {EthAddress} from
   */
  constructor(tokenId:uint256, recipient:EthAddress, amount0Max:uint256, amount1Max:uint256, from:EthAddress) {
    super(
      'UniCollectV3',
      getAddr('UniCollectV3'),
      [
        "uint256",
        "address",
        "uint128",
        "uint128",
      ],
      [tokenId, recipient, amount0Max, amount1Max]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[0],
    ];
  }

  async getAssetsToApprove() {
    return [{
      nft: getAddr('UniswapV3PositionManager'),
      tokenId: this.args[0],
      owner: this.from,
      specialApproveLabel: 'uniswap v3'
    }];
  }
}