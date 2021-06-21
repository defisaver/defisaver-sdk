const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Sums up 2 inputs/return values
 */
class SumInputsAction extends Action {
  constructor(a, b) {
    super(
      'SumInputs',
      getAddr('SumInputs'),
      [[
        "uint",
        "uint",
      ]],
      [[...arguments]]
    );
  }
}

module.exports = SumInputsAction;
