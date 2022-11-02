import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import { requireAddress } from "../../utils/general";
import {EthAddress,uint256} from '../../types';

/**
 * ReflexerNativeUniV2SaviourWithdrawAction -  Withdraw lpToken from the contract and provide less cover for a SAFE
 */
export default class ReflexerNativeUniV2SaviourWithdrawAction extends Action {
  /**
   * @param to {EthAddress}
   * @param safeId {SafeId}
   * @param lpTokenAmount {string}
   */
  constructor(to:EthAddress, safeId:uint256, lpTokenAmount:uint256) {
    requireAddress(to);
    super('ReflexerNativeUniV2SaviourWithdraw', getAddr('ReflexerNativeUniV2SaviourWithdraw'), ['address','uint256','uint256', ], [to, safeId, lpTokenAmount]);
    this.mappableArgs = [
        this.args[0],
        this.args[2],
      ];
  }
}