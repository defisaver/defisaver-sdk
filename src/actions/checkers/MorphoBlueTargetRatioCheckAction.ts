import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * MorphoBlueTargetRatioCheckAction - Checks MorphoBlue ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class MorphoBlueTargetRatioCheckAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param user Address of the user we are checking the ratio for
   * @param targetRatio The ratio user want to be at
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    user:EthAddress,
    targetRatio:uint256,
  ) {
    super('MorphoBlueTargetRatioCheck',
      getAddr('Empty'),
      [['address', 'address', 'address', 'address', 'uint256'], 'address', 'uint256'],
      [[loanToken, collateralToken, oracle, irm, lltv], user, targetRatio]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[1],
      this.args[2],
    ];
  }
}