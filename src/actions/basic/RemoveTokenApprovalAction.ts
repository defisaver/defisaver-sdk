import { requireAddress } from '../../utils/general';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Remove approval for a spender to pull tokens from user wallet
 *
 * @category BasicActions
 */
export class RemoveTokenApprovalAction extends Action {
  /**
   * @param token Token address
   * @param spender Spender address
   */
  constructor(token:EthAddress, spender:EthAddress) {
    requireAddress(spender);
    super(
      'RemoveTokenApproval',
      getAddr('RemoveTokenApproval'),
      [
        'address',
        'address',
      ],
      [
        token,
        spender,
      ],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

  async getAssetsToApprove() {
    return [];
  }
}
