import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBlueBorrowAction - Borrow a token from MorphoBlue
 *
 * @category Morpho
 */
export class MorphoBlueBorrowAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param borrowAmount - amount of loanToken to borrow
   * @param onBehalf - onBehalf of whom to borrow
   * @param to - address to receive borrowed tokens
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    supplyAmount:uint256,
    onBehalf:EthAddress,
    to:EthAddress,
  ) {
    super(
      'MorphoBlueBorrow',
      getAddr('MorphoBlueBorrow'),
      [['address', 'address', 'address', 'address', 'uint256'], 'uint256', 'address', 'address'],
      [[loanToken, collateralToken, oracle, irm, lltv], supplyAmount, onBehalf, to],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [];
  }
}
