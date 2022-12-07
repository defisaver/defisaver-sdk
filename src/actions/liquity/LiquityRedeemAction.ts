import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityRedeemAction - Redeems collateral from the liquity protocol
 *
 * @category Liquity
 */
export class LiquityRedeemAction extends Action {
  /**
    * @param lusdAmount Amount of LUSD tokens to send
    * @param from Address where the tokens are pulled from
    * @param to Address that will receive redeemed collateral
    * @param firstRedemptionHint Address in the linked list to use as a first hint
    * @param upperPartialRedemptionHint Address in the linked list to use as an upper limit
    * @param lowerPartialRedemptionHint Address in the linked list to use as a lower limit
    * @param partialRedemptionHintNICR
    * @param maxIterations Max number of loops to do when searching for the new position in linked list
    * @param maxFeePercentage Highest redemption fee to accept
    */
  constructor(
    lusdAmount:uint256,
    from:EthAddress,
    to:EthAddress,
    firstRedemptionHint:EthAddress,
    upperPartialRedemptionHint:EthAddress,
    lowerPartialRedemptionHint:EthAddress,
    partialRedemptionHintNICR:uint256,
    maxIterations:uint256,
    maxFeePercentage:uint256,
  ) {
    requireAddress(from);
    requireAddress(to);
    super('LiquityRedeem',
      getAddr('LiquityRedeem'),
      ['uint256', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256'],
      [lusdAmount, from, to, firstRedemptionHint, upperPartialRedemptionHint, lowerPartialRedemptionHint, partialRedemptionHintNICR, maxIterations, maxFeePercentage]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[8],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('LUSD').address, owner: this.args[1] }];
  }
}
