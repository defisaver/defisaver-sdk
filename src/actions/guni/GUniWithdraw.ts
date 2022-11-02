import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Action that removes liquidity from a G-UNI pool and burns G-UNI LP tokens
 * 
 * @category GUni
*/
export class GUniWithdraw extends Action {
    /// @param pool address of G-UNI pool to remove liquidity from
    /// @param burnAmount The number of G-UNI tokens to burn
    /// @param amount0Min Minimum amount of token0 received after burn (slippage protection)
    /// @param amount1Min Minimum amount of token1 received after burn (slippage protection)
    /// @param to The account to receive the underlying amounts of token0 and token1
    /// @param from Account from which to pull G-Uni LP tokens
  constructor(pool:EthAddress, burnAmount:uint256, amount0Min:uint256, amount1Min:uint256, to:EthAddress, from:EthAddress) {
    requireAddress(to);
    super(
        'GUniWithdraw',
        getAddr('GUniWithdraw'),
        ['address', 'uint256', 'uint256', 'uint256', 'address', 'address'],
        [pool, burnAmount, amount0Min, amount1Min, to, from]
    );
    this.mappableArgs = [
        this.args[1],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: this.args[0], owner: this.args[5]}];
  }
}