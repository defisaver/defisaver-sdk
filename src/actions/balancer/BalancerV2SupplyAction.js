const Action = require("../../Action");
const {getAddr} = require('../../addresses.js');

/*
 * 
 */
class BalancerV2SupplyAction extends Action {
  /**
   * @param {bytes32} poolId
   * @param {EthAddress} from
   * @param {EthAddress} to
   * @param {address[]} tokens
   * @param {uint256[]} maxAmountsIn
   * @param {bytes} userData
   */
  constructor(poolId, from, to, tokens, maxAmountsIn, userData) {
    super(
      'BalancerV2Supply',
      getAddr('BalancerV2Supply'),
      [
        [
          "bytes32",
          "address",
          "address",
          "address[]",
          "uint256[]",
          "bytes",
        ],
      ],
      [[poolId, from, to, tokens, maxAmountsIn, userData]]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
    ];
    for (let i = 0; i < this.args[0][4].length; i++){
      this.mappableArgs.push(this.args[0][4][i]);
    }
  }

  async getAssetsToApprove() {
    const approveArr = [];
    const tokens = this.args[0][3];
    tokens.forEach(token => approveArr.push({asset: token, owner: this.args[0][1]}));
    
    return approveArr;
  }
}

module.exports = BalancerV2SupplyAction;
