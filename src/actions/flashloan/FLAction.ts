import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 * Gets a specific FL action
 *
 * @category Flashloans
 */
export class FLAction extends Action {
  /**
   * @param specificFLAction - FL Action to be used
   */
  #handleArgs(specificFLAction: Action) {
    const argsToReturn = [
      specificFLAction.args[0],
      specificFLAction.args[1],
      specificFLAction.args[2],
      specificFLAction.args[3],
      getAddr('Empty'),
      [],
      specificFLAction.args[6],
    ];
    if (specificFLAction.constructor.name === 'AaveV2FlashLoanAction') {
      argsToReturn[5] = [1];
    }
    if (specificFLAction.constructor.name === 'BalancerFlashLoanAction') {
      argsToReturn[5] = [2];
    }
    if (specificFLAction.constructor.name === 'GhoFlashLoanAction') {
      argsToReturn[5] = [3];
    }
    if (specificFLAction.constructor.name === 'MakerFlashLoanAction') {
      argsToReturn[5] = [4];
    }
    if (specificFLAction.constructor.name === 'AaveV3FlashLoanAction') {
      argsToReturn[5] = [5];
    }
    if (specificFLAction.constructor.name === 'UniV3FlashLoanAction') {
      argsToReturn[5] = [6];
    }
    if (specificFLAction.constructor.name === 'SparkFlashLoanAction') {
      argsToReturn[5] = [7];
    }
    if (specificFLAction.constructor.name === 'MorphoBlueFlashLoanAction') {
      argsToReturn[5] = [8];
    }
    return argsToReturn;
  }

  constructor(specificFLAction: Action) {
    super(
      'FLActionTEMP',
      getAddr('FLActionTEMP'),
      [],
      [],
    );
    this.paramTypes = ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'];
    this.args = this.#handleArgs(specificFLAction);
  }
}
