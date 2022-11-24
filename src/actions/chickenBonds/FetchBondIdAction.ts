import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * FetchBondIdAction - action that retrieves CB BondId from a hashed strategy
 *
 * @category ChickenBonds
 */
export class FetchBondIdAction extends Action {
  /**
   * @param paybackSourceId
   * @param sourceType
   * @param cbRebondBondId
   */
  constructor(paybackSourceId:uint256, sourceType:uint256, cbRebondBondId:uint256) {
    super('FetchBondId', getAddr('FetchBondId'), ['uint256', 'uint256', 'uint256'], [paybackSourceId, sourceType, cbRebondBondId]);
  }
}
