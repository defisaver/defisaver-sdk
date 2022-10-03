const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class SendNFTAction extends Action {
  constructor(nftAddr, to, nftId) {
    super(
      'SendNFT',
      getAddr('SendNFT'),
      [
        "address",
        "address",
        "uint256"
      ],
      [...arguments]
    );
  }
}

module.exports = SendNFTAction;
