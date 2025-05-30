import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * PendleTokenRedeemAction - Redeem PT tokens for underlying tokens
 *
 * @category Pendle
 */
export class PendleTokenRedeemAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param market The address of the Pendle market
   * @param underlyingToken The address of the underlying token
   * @param ptToken The address of the PT token
   * @param from The address from where the PT tokens will be pulled
   * @param to The address of the recipient to receive the underlying tokens
   * @param ptAmount The amount of PT tokens to redeem
   * @param minAmountOut The minimum amount of underlying tokens to receive
   */
  constructor(
    market: EthAddress,
    underlyingToken: EthAddress,
    ptToken: EthAddress,
    from: EthAddress,
    to: EthAddress,
    ptAmount: uint256,
    minAmountOut: uint256,
  ) {
    super(
      'PendleTokenRedeem',
      getAddr('PendleTokenRedeem'),
      ['address', 'address', 'address', 'address', 'uint256', 'uint256'],
      [market, underlyingToken, from, to, ptAmount, minAmountOut],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
    this.tokenForApproval = ptToken;
  }

  async getAssetsToApprove() {
    return [{ asset: this.tokenForApproval, owner: this.args[2] }];
  }
}
