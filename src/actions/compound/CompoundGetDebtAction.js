const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class CompoundGetDebtAction extends Action {
  constructor(cTokenAddr, holderAddr) {
    super(
      'CompGetDebt',
      getAddr('CompGetDebt'),
      [[
        "address",
        "address",
      ]],
      [[...arguments]]
    );
  }
}

module.exports = CompoundGetDebtAction;
