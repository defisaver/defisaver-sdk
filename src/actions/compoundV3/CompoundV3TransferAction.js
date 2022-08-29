const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3TransferAction - Transfer specified amount of assets from src address to dst
 */
 class CompoundV3TransferAction extends Action {
    /**
     * @param from {EthAddress} address of src
     * @param to {EthAddress} address of dst
     * @param asset {EthAddress} address of ERC20 token
     * @param amount {uint256} amount of assets to be transferred
     */
    constructor(from, to, asset, amount) {
      requireAddress(from);
      requireAddress(to);
      requireAddress(asset);
      super(
        'CompV3Transfer', 
        getAddr('CompV3Transfer'), 
        ['address','address','address','uint256'], 
        [...arguments]
      );
    }
  }
  
  module.exports = CompoundV3TransferAction;