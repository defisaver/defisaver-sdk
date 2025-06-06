import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * @category Summerfi
 */
export class SFApproveTokensAction extends Action {
  /**
   * @param sfProxy Summerfi proxy address
   * @param spender DSProxy address
   * @param tokens List of assets to approve
   * @param allowances Approve amounts
   */
  constructor(
    sfProxy: EthAddress,
    spender: EthAddress,
    tokens: EthAddress[],
    allowances: uint256[],
  ) {
    super(
      'SFApproveTokens',
      getAddr('SFApproveTokens'),
      ['address', 'address', 'address[]', 'uint256[]'],
      [sfProxy, spender, tokens, allowances],
    );
    this.mappableArgs = [];
  }
}