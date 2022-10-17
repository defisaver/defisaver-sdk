const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class TransferNFTAction extends Action {
  constructor(nftAddr, from, to, nftId) {
    super(
      'TransferNFT',
      getAddr('TransferNFT'),
      [
        "address",
        "address",
        "address",
        "uint256"
      ],
      [...arguments]
    );
  }
}

module.exports = TransferNFTAction;
