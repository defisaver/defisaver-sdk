import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';
import { TokenizedVaultOperationId } from '../../utils/basic-utils';

/**
 * TokenizedVaultAdapterDepositAction - Action that handles ERC4626 vault deposits
 * @category BasicActions
 */
export class TokenizedVaultAdapterDepositAction extends Action {
  /**
   * @param amount Amount of underlying asset to deposit
   * @param minOutOrMaxIn Min amount of shares to accept
   * @param vaultAddress Address of the ERC4626 vault
   * @param from Address from which to pull the underlying asset
   * @param to Asset that will receive the minted shares
   * @param underlyingAssetAddress Address of the underlying vault asset, only used in sdk for approvals
   */
  constructor(
    amount: uint256,
    minOutOrMaxIn: uint256,
    vaultAddress: EthAddress,
    from: EthAddress,
    to: EthAddress,
    public underlyingAssetAddress: EthAddress,
  ) {
    super(
      'TokenizedVaultAdapter',
      getAddr('TokenizedVaultAdapter'),
      ['uint256', 'uint256', 'address', 'address', 'address', 'uint8'],
      [amount, minOutOrMaxIn, vaultAddress, from, to, TokenizedVaultOperationId.DEPOSIT],
    );
  }

  async getAssetsToApprove() {
    return [{ asset: this.underlyingAssetAddress, owner: this.args[3] }];
  }
}
