import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {uint256} from '../../types';

/**
 * MakerRatioAction
 */
export default class MakerRatioAction extends Action {
  /**
   * @param vaultId {uint256}
   */
  constructor(vaultId:uint256) {
    super('McdRatio', getAddr('McdRatio'), ['uint256'], [vaultId]);
  }
}