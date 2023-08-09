import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';
import { TokenizedVaultOperationId } from '../../utils/basic-utils';

/**
 * TokenizedVaultAdapterRedeemAction - Action that handles ERC4626 vault redemptions
 * @category BasicActions
 */
export class TokenizedVaultAdapterRedeemAction extends Action {
  /**
   * @param amount Amount of shares to redeem
   * @param minOutOrMaxIn Min amount of underlying asset to accept for the shares burned
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
      [amount, minOutOrMaxIn, vaultAddress, from, to, TokenizedVaultOperationId.REDEEM],
    );
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[2], owner: this.args[3] }];
  }
}
