import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { FlashLoanId } from './FlashLoanId';
import { ActionWithL2 } from '../../ActionWithL2';
/**
 * Gets a specific FL action
 *
 * @category Flashloans
 */
type SpecificFlashLoanAction = (Action & FlashLoanId) | (ActionWithL2 & FlashLoanId);

export class FLAction extends Action {
  /**
   * @param specificFLAction - FL Action to be used
   */
  #handleArgs(specificFLAction: SpecificFlashLoanAction) {
    const argsToReturn = [
      specificFLAction.args[0],
      specificFLAction.args[1],
      specificFLAction.args[2],
      specificFLAction.args[3],
      getAddr('Empty'),
      [specificFLAction.flashLoanId],
      specificFLAction.args[6],
    ];

    return argsToReturn;
  }

  constructor(specificFLAction: SpecificFlashLoanAction) {
    super(
      'FLAction',
      getAddr('FLAction'),
      [],
      [],
    );
    this.paramTypes = ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'];
    this.args = this.#handleArgs(specificFLAction);
  }
}
