import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {uint256} from '../../types';

/**
 * MakerRatioAction
 * 
 * @category Maker
 */
export class MakerRatioAction extends Action {
  /**
   * @param vaultId {uint256}
   */
  constructor(vaultId:uint256) {
    super('McdRatio', getAddr('McdRatio'), ['uint256'], [vaultId]);
  }
}