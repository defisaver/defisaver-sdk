import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 *  AaveCollateralSwitchAction - Aave enable/disable token usage as collateral
 *
 * @category Aave
 */
export class AaveCollateralSwitchAction extends Action {
  /**
   * @param market - Address of market
   * @param tokens - List of Token Addresses
   * @param useAsCollateral - Enable assets from tokens array as collateral
   */
  constructor(market : EthAddress, tokens: Array<EthAddress>, useAsCollateral:Array<boolean>) {
    super(
      'AaveCollateralSwitch',
      getAddr('AaveCollateralSwitch'),
      ['address', 'address[]', 'bool[]'],
      [market, tokens, useAsCollateral],
    );
    this.mappableArgs = [];
  }
}
