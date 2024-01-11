import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * @category MorphoBlue
 */
export class MorphoBlueSetAuthAction extends Action {
  /**
   * @param manager
   * @param newIsAuthorized
   */
  constructor(manager:EthAddress, newIsAuthorized:boolean) {
    super(
      'MorphoBlueSetAuth',
      getAddr('MorphoBlueSetAuth'),
      [
        'address',
        'bool',
      ],
      [manager, newIsAuthorized],
    );
    this.mappableArgs = [this.args[0], this.args[1]];
  }
}