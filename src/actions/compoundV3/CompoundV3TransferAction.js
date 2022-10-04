const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3TransferAction - Transfer specified amount of assets from src address to dst
 */
 class CompoundV3TransferAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param from {EthAddress} address of src
     * @param to {EthAddress} address of dst
     * @param asset {EthAddress} address of ERC20 token
     * @param amount {uint256} amount of assets to be transferred
     */
    constructor(market, from, to, asset, amount) {
      requireAddress(from);
      requireAddress(to);
      requireAddress(asset);
      super(
        'CompV3Transfer', 
        getAddr('CompV3Transfer'), 
        ['address','address','address','address','uint256'], 
        [...arguments]
      );

      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
        this.args[3],
        this.args[4],
      ];
    }
  }
  
  module.exports = CompoundV3TransferAction;