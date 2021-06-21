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
  }
}

module.exports = SubInputsAction;
