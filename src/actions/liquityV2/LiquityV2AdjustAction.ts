import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

/**
 * LiquityV2AdjustAction - Adjusts a trove's collateral and/or debt
 *
 * @category LiquityV2
 */
export class LiquityV2AdjustAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the collateral or pay debt
   * @param to address to which to send the collateral or borrowed debt
   * @param troveId id of the trove being adjusted
   * @param collAmount collateral amount to supply/withdraw
   * @param debtAmount debt amount to borrow/payback
   * @param maxUpfrontFee maximum upfront fee user is willing to pay
   * @param collAction specify if collateral is supplied or withdrawn
   * @param debtAction specify if debt is borrowed or paid back
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    to: EthAddress,
    troveId: uint256,
    collAmount: uint256,
    debtAmount: uint256,
    maxUpfrontFee: uint256,
    collAction: uint8,
    debtAction: uint8,
  ) {
    super(
      'LiquityV2Adjust',
      getAddr('LiquityV2Adjust'),
      [
        'address',
        'address',
        'address',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'uint8',
        'uint8',
      ],
      [
        market,
        from,
        to,
        troveId,
        collAmount,
        debtAmount,
        maxUpfrontFee,
        collAction,
        debtAction,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
      this.args[8],
    ];
  }
}
