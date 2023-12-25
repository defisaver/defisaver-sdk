import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBluePaybackAction - Payback debt on MorphoBlue
 *
 * @category Morpho
 */
export class MorphoBluePaybackAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param paybackAmount - Amount of debt to repay (uint.max for full debt repayment)
   * @param from - Address from which to pull tokens with which to repay debt
   * @param onBehalf - Position owner whose debt we are paying back
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    paybackAmount:uint256,
    from:EthAddress,
    onBehalf:EthAddress,
  ) {
    super(
      'MorphoBluePayback',
      getAddr('MorphoBluePayback'),
      [['address', 'address', 'address', 'address', 'uint256'], 'uint256', 'address', 'address'],
      [[loanToken, collateralToken, oracle, irm, lltv], paybackAmount, from, onBehalf],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[0][0], owner: this.args[2] }];
  }
}
