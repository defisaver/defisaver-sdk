const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * Action that adds liquidity to G-UNI pool of interest (mints G-UNI LP tokens)
*/
class GUniDeposit extends Action {
    /// @param pool address of G-UNI pool to add liquidity to
    /// @param token0 address of token0
    /// @param token1 address of token1
    /// @param amount0Max the maximum amount of token0 msg.sender willing to input
    /// @param amount1Max the maximum amount of token1 msg.sender willing to input
    /// @param amount0Min the minimum amount of token0 actually input (slippage protection)
    /// @param amount1Min the minimum amount of token1 actually input (slippage protection)
    /// @param to account to receive minted G-UNI tokens
    /// @param from account from which to pull underlying tokens from
  constructor(pool, token0, token1, amount0Max, amount1max, amount0Min, amount1Min, to, from) {
    super(
        'GUniDeposit',
        getAddr('GUniDeposit'),
        [['address', 'address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address']],
        [[pool, token0, token1, amount0Max, amount1max, amount0Min, amount1Min, to, from]]
    );
    this.mappableArgs = [
        this.args[0][3],
        this.args[0][4],
        this.args[0][5],
        this.args[0][6],
    ];
  }

  async getAssetsToApprove() {
    const approveArr = [];

    approveArr.push({asset: this.args[0][1], owner: this.args[0][8]});
    approveArr.push({asset: this.args[0][2], owner: this.args[0][8]});

    return approveArr;
  }
}

module.exports = GUniDeposit;