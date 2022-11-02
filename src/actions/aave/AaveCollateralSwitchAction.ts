import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 *  AaveCollateralSwitchAction - Aave enable/disable token usage as collateral
 */
export default class AaveCollateralSwitchAction extends Action {
  constructor(market : EthAddress, tokens: Array<EthAddress>, useAsCollateral:Array<boolean>) {
    super(
      'AaveCollateralSwitch',
      getAddr('AaveCollateralSwitch'),
      ['address', 'address[]', 'bool[]'],
      [...arguments],
    );
    this.mappableArgs = [];
  }
}