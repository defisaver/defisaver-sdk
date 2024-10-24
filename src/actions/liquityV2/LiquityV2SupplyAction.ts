import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2SupplyAction - Supplies collateral to a trove
 *
 * @category LiquityV2
 */
export class LiquityV2SupplyAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the collateral
   * @param collToken address of the collateral token
   * @param troveId id of the trove to supply collateral to
   * @param amount collateral amount to supply
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    collToken: EthAddress,
    troveId: uint256,
    amount: uint256,
  ) {
    super(
      'LiquityV2Supply',
      getAddr('LiquityV2Supply'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
      ],
      [
        market,
        from,
        troveId,
        amount,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];

    this.tokenForApproval = collToken;
  }

  async getAssetsToApprove() {
    return [{ asset: this.tokenForApproval, owner: this.args[1] }];
  }
}
