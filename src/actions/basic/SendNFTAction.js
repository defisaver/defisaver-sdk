const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class SendNFTAction extends Action {
  constructor(nftAddr, from, to, nftId) {
    super(
      'SendNFT',
      getAddr('SendNFT'),
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

module.exports = SendNFTAction;
