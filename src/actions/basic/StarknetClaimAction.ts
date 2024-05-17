import Dec from 'decimal.js';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * Claims starknet airdrop
 *
 * @category BasicActions
 */
export class StarknetClaimAction extends Action {
  constructor(payload: Array<uint256>, gasPrice: uint256) {
    super(
      'StarknetClaim',
      getAddr('StarknetClaim'),
      [
        'uint256[]',
        'uint256',
      ],
      [payload, gasPrice],
    );
  }

  async getEthValue() {
    return new Dec(this.args[1]).mul(4000).toString();
  }
}