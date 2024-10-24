import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';


/**
 * LiquityV2OpenAction - Opens up a trove
 *
 * @category LiquityV2
 */
export class LiquityV2OpenAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the collateralToken and WETH gas compensation
   * @param to address to which to send the borrowed BOLD
   * @param collToken address of the collateral token
   * @param interestBatchManager address of the interest batch manager, or address(0) if this trove will not be part of a batch
   * @param ownerIndex owner index of the trove
   * @param collAmount collateral amount
   * @param boldAmount borrowed BOLD amount
   * @param upperHint upper hint for the trove insertion
   * @param lowerHint lower hint for the trove insertion
   * @param annualInterestRate annual interest rate for the trove or 0 if trove will be part of a batch
   * @param maxUpfrontFee maximum upfront fee user is willing to pay
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    to: EthAddress,
    collToken: EthAddress,
    interestBatchManager: EthAddress,
    ownerIndex: uint256,
    collAmount: uint256,
    boldAmount: uint256,
    upperHint: uint256,
    lowerHint: uint256,
    annualInterestRate: uint256,
    maxUpfrontFee: uint256,
  ) {
    super(
      'LiquityV2Open',
      getAddr('LiquityV2Open'),
      [
        'address',
        'address',
        'address',
        'address',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
      ],
      [
        market,
        from,
        to,
        interestBatchManager,
        ownerIndex,
        collAmount,
        boldAmount,
        upperHint,
        lowerHint,
        annualInterestRate,
        maxUpfrontFee,
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
      this.args[9],
      this.args[10],
    ];

    this.tokenForApproval = collToken;
  }

  async getAssetsToApprove() {
    const wethToken = getAssetInfo('WETH').address;
    if (this.tokenForApproval.toLocaleLowerCase() === wethToken.toLocaleLowerCase()) {
      return [{ asset: wethToken, owner: this.args[1] }];
    }
    return [
      { asset: wethToken, owner: this.args[1] },
      { asset: this.tokenForApproval, owner: this.args[1] },
    ];
  }
}
