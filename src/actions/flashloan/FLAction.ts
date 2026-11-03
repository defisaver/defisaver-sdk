import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { FlashLoanId } from './FlashLoanId';
import { FLSource, assertFlashLoanSourceSupported } from './FLSource';
/**
 * Executes a supported provider through the unified FLAction contract.
 * The inner action's arguments and flashLoanId are used.
 * Repay with FLPaybackAction or send tokens to FLAction.
 *
 * @category Flashloans
 */
type SpecificFlashLoanAction = FlashLoanId & Pick<Action, 'args'>;

export class FLAction extends Action implements FlashLoanId {
  public flashLoanId: FLSource;

  constructor(specificFLAction: SpecificFlashLoanAction) {
    assertFlashLoanSourceSupported(specificFLAction?.flashLoanId);
    super(
      'FLAction',
      getAddr('FLAction'),
      [],
      [],
    );
    this.paramTypes = ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'];
    this.flashLoanId = specificFLAction.flashLoanId;
    this.args = [
      specificFLAction.args[0],
      specificFLAction.args[1],
      specificFLAction.args[2],
      specificFLAction.args[3],
      getAddr('Empty'),
      [this.flashLoanId],
      specificFLAction.args[6],
    ];
  }
}
