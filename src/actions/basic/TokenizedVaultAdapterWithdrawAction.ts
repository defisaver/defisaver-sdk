import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';
import { TokenizedVaultOperationId } from '../../utils/basic-utils';

/**
 * TokenizedVaultAdapterWithdrawAction - Action that handles ERC4626 vault withdrawals
 * @category BasicActions
 */
export class TokenizedVaultAdapterWithdrawAction extends Action {
  /**
   * @param amount Amount of underlying asset to withdraw
   * @param minOutOrMaxIn Max amount of shares to burn for withdrawal
   * @param vaultAddress Address of the ERC4626 vault
   * @param from Address from which to pull the shares
   * @param to Asset that will receive the underlying asset
   */
  constructor(
    amount: uint256,
    minOutOrMaxIn: uint256,
    vaultAddress: EthAddress,
    from: EthAddress,
    to: EthAddress,
  ) {
    super(
      'TokenizedVaultAdapter',
      getAddr('TokenizedVaultAdapter'),
      ['uint256', 'uint256', 'address', 'address', 'address', 'uint8'],
      [amount, minOutOrMaxIn, vaultAddress, from, to, TokenizedVaultOperationId.WITHDRAW],
    );
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[2], owner: this.args[3] }];
  }
}
