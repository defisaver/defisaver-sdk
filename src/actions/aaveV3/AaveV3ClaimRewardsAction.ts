import ActionWithL2 from "../../ActionWithL2";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint8,uint16,uint256,bytes32,bytes} from '../../types';
import { requireAddress } from "../../utils/general";


/**
 *  AaveV3ClaimRewardsAction
 */
export default class AaveV3ClaimRewardsAction extends ActionWithL2 {
    /**
   * @param assetsLength {number} Address provider for specific market
   * @param amount {string} length of two arrays
   * @param to {EthAddress}
   * @param reward {EthAddress}
   * @param assets {Array<EthAddress>}
   */
  constructor(assetsLength:uint8, amount:uint256, to:EthAddress, reward:EthAddress, assets:Array<EthAddress>) {
    requireAddress(to);
    super(
      'AaveV3ClaimRewards',
      getAddr('AaveV3ClaimRewards'),
      ['uint8', 'uint256', 'address', 'address', 'address[]'],
      [assetsLength, amount, to, reward, assets],
    );
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // assetsLength
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[1]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[2]));
    // reward
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[3]));
    // assets
    const arrayLength = this.args[0];
    for (let i = 0; i < arrayLength; i++){
      // assets[i]
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[4][i]))
    }

    return encodedInput;
  }
}