const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Subs 2 inputs/return values
 */
class SubInputsAction extends Action {
  constructor(a, b) {
    super(
      'SubInputs',
      getAddr('SubInputs'),
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

module.exports = SubInputsAction;
