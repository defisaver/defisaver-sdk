import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBlueSupplyAction - Supply token as a lender on MorphoBlue to earn interest
 *
 * @category Morpho
 */
export class MorphoBlueSupplyAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param supplyAmount - Amount of loanToken to supply
   * @param from - Address from which to pull tokens
   * @param onBehalf - on whose behalf to supply the tokens
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    supplyAmount:uint256,
    from:EthAddress,
    onBehalf:EthAddress,
  ) {
    super(
      'MorphoBlueSupply',
      getAddr('MorphoBlueSupply'),
      [['address', 'address', 'address', 'address', 'uint256'], 'uint256', 'address', 'address'],
      [[loanToken, collateralToken, oracle, irm, lltv], supplyAmount, from, onBehalf],
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
