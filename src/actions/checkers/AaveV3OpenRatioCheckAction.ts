import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV3OpenRatioCheckAction - Checks aave V3 ratio for users proxy position and reverts if faulty.
 *
 * @dev This checker action is different from AaveV3RatioCheckAction in that it checks current ratio without checking previous ratio.
 *
 * @category Checkers
 */
export class AaveV3OpenRatioCheckAction extends Action {
  /**
   * @param targetRatio The ratio user want to be at
   * @param market Address provider for specific market
   */
  constructor(targetRatio:uint256, market:EthAddress) {
    super(
      'AaveV3OpenRatioCheck',
      getAddr('Empty'),
      ['uint256', 'address'],
      [targetRatio, market],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
