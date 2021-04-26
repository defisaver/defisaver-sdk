const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * Sums up 2 inputs/return values
 */
class SumInputsAction extends Action {
  constructor(a, b) {
    super(
      'SumInputs',
      getAddr('SumInputs'),
      [
        "uint",
        "uint",
      ],
      [...arguments]
    );
  }
}

module.exports = SumInputsAction;
