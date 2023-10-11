import { requireAddress } from '../../utils/general';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Approve a spender to pull tokens from DSProxy
 *
 * @category BasicActions
 */
export class ApproveTokenAction extends Action {
  /**
   * @param token Token address
   * @param spender Address getting allowance to pull tokens from proxy
   * @param amount Allowance amount
   */
  constructor(token:EthAddress, spender:EthAddress, amount:uint256) {
    requireAddress(spender);
    super(
      'ApproveToken',
      getAddr('ApproveToken'),
      [
        'address',
        'address',
        'uint',
      ],
      [token, spender, amount],
    );
  }

  async getAssetsToApprove() {
    return [];
  }
}