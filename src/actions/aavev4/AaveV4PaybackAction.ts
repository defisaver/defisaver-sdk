import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4PaybackAction
 *
 * @category AaveV4Payback
 */
export class AaveV4PaybackAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to payback tokens on behalf of. Defaults to the user's wallet if not provided.
   * @param from Address from which to pull the payback tokens.
   * @param reserveId Reserve id.
   * @param amount Amount of tokens to payback. Send type(uint).max to payback whole amount.
   * @param tokenAddress Address of the token to approve.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    from: EthAddress,
    reserveId: uint256,
    amount: uint256,
    tokenAddress: EthAddress,
  ) {
    super(
      'AaveV4Payback',
      getAddr('AaveV4Payback'),
      ['address', 'address', 'address', 'uint256', 'uint256'],
      [spoke, onBehalf, from, reserveId, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.tokenForApproval, owner: this.args[2] }];
    return [];
  }
}
