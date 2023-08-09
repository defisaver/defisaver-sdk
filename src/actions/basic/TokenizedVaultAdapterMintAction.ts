import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';
import { TokenizedVaultOperationId } from '../../utils/basic-utils';

/**
 * TokenizedVaultAdapterMintAction - Action that handles ERC4626 vault minting
 * @category BasicActions
 */
export class TokenizedVaultAdapterMintAction extends Action {
  /**
   * @param amount Amount of shares to mint
   * @param minOutOrMaxIn Max amount of underlying asset to deposit for minting
   * @param vaultAddress Address of the ERC4626 vault
   * @param from Address from which to pull the underlying asset
   * @param to Asset that will receive the shares minted
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
      [amount, minOutOrMaxIn, vaultAddress, from, to, TokenizedVaultOperationId.MINT],
    );
  }

  async getAssetsToApprove() {
    return [{ asset: this.underlyingAssetAddress, owner: this.args[3] }];
  }
}
