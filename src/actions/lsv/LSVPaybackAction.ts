import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256 } from '../../types';

/**
 *
 * @category LSV
 */
export class LSVPaybackAction extends Action {
  /**
   * @param protocol
   * @param amount
   */
  constructor(protocol:uint8, amount:uint256) {
    super('LSVPayback', getAddr('LSVPayback'), ['uint256', 'uint256'], [protocol, amount]);
    this.mappableArgs = [
      this.args[1],
    ];
  }
}