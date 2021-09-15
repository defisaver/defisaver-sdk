const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class TokenBalanceAction extends Action {
  constructor(tokenAddr, holderAddr) {
    super(
      'TokenBalance',
      getAddr('TokenBalance'),
      [[
        "address",
        "address",
      ]],
      [[...arguments]]
    );
  }
}

module.exports = TokenBalanceAction;
