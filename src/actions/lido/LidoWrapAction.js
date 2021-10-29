const Action = require("../../Action");
const {getAssetInfoByAddress, getAssetInfo} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');
const { lidoWrap } = require("../../../../../../test/actions");

/**
 * LidoWrapAction - Turns WETH or StEth into WStEth
 */
class LidoWrapAction extends Action {
  /**
   * @param amount {string} amount to pull and stake
   * @param from {EthAddress} tokens will be taken from this address
   * @param to {EthAddress} WStEth will be sent to this address
   * @param useEth {bool} true for using WETH, false for using stEth
   */
  constructor(amount, from, to, useEth) {
    super('LidoWrap', getAddr('LidoWrap'), [['uint256','address', 'address', 'bool']], [[amount, from, to, useEth]]);
    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    if (this.args[0][3]){
        return [{asset: getAssetInfo('WETH').address, owner: this.args[0][1]}];
    }else{
        return [{asset: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84', owner: this.args[0][1]}];
    }
  }
}

module.exports = LidoWrapAction;
