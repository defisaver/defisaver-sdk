import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV3OpenRatioCheckAction - Checks aave V3 ratio for position of `user` and reverts if faulty.
 *
 * @dev This checker action is different from AaveV3RatioCheckAction in that it checks current ratio without checking previous ratio.
 *
 * @category Checkers
 */
export class AaveV3OpenRatioCheckAction extends Action {
  /**
   * @param targetRatio The ratio user want to be at
   * @param market Address provider for specific market
   * @param user Address of the user (EOA/SW). This param was added later
   */
  constructor(
    targetRatio: uint256,
    market: EthAddress,
    user: EthAddress = getAddr('Empty'),
  ) {
    super(
      'AaveV3OpenRatioCheck',
      getAddr('Empty'), // TODO -> is this ok?
      ['uint256', 'address', 'address'],
      [targetRatio, market, user],
    );

    this.mappableArgs = [this.args[0], this.args[1], this.args[2]];
  }
}
