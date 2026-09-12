import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * FtDnmmRatioCheckAction - Checks ftDNMM account ratio and reverts if faulty
 *
 * @category Checkers
 */
export class FtDnmmRatioCheckAction extends Action {
  /**
   * @param user - Address of the user (smart wallet) whose ftDNMM account is checked
   * @param ratioState - If the ratio should be higher (IN_BOOST) or lower (IN_REPAY) than before
   * @param targetRatio - The ratio the user wants to be at
   */
  constructor(
    user:EthAddress,
    ratioState:uint8,
    targetRatio:uint256,
  ) {
    super('FtDnmmRatioCheck',
      getAddr('Empty'),
      ['address', 'uint8', 'uint256'],
      [user, ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
