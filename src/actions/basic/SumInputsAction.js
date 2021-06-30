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

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }
}

module.exports = SumInputsAction;
