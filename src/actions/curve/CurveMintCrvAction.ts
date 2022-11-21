import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * @category Curve
 */
export class CurveMintCrvAction extends Action {
  /**
     * @param gaugeAddrs
     * @param receiver
     */
  constructor(gaugeAddrs:EthAddress[8], receiver:EthAddress) {
    requireAddress(receiver);
    super('CurveMintCrv',
      getAddr('CurveMintCrv'),
      ['address[8]', 'address'],
      [gaugeAddrs, receiver],
    );

    this.mappableArgs = [
      this.args[8],
    ];
  }
}